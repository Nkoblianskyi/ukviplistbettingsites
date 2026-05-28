// /public/link-handler.js
(function () {
    const TAG = "[link-handler]";
    const VER = "v1.4.0";
    const TTL_DAYS = 90;
    const NOW = Date.now();

    // --- Production: логи вимкнено ---
    // const log  = (...a) => console.log(TAG, ...a);
    // const warn = (...a) => console.warn(TAG, ...a);
    // const err  = (...a) => console.error(TAG, ...a);
    const log = () => { };
    const warn = () => { };
    const err = () => { };

    const LS_KEYS = {
        UTM: "lh_utm_term",
        GCLID: "lh_gclid",
        TS: "lh_ts",
    };

    /** utils **/
    const days = (n) => n * 24 * 60 * 60 * 1000;

    const readCookie = (name) => {
        const m = document.cookie.match(
            new RegExp(
                "(^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
            )
        );
        return m ? decodeURIComponent(m[2]) : "";
    };

    const parseGclFromCookie = (value) => {
        if (!value) return "";
        const parts = value.split(".");
        return parts[parts.length - 1] || "";
    };

    function saveCache({ utm, gclid }) {
        if (utm) localStorage.setItem(LS_KEYS.UTM, utm);
        if (gclid) localStorage.setItem(LS_KEYS.GCLID, gclid);
        localStorage.setItem(LS_KEYS.TS, String(NOW));
    }

    function loadCache() {
        const ts = Number(localStorage.getItem(LS_KEYS.TS) || "0");
        if (!ts || NOW - ts > days(TTL_DAYS)) {
            return { utm: "", gclid: "" };
        }
        return {
            utm: localStorage.getItem(LS_KEYS.UTM) || "",
            gclid: localStorage.getItem(LS_KEYS.GCLID) || "",
        };
    }

    function getParams() {
        const sp = new URLSearchParams(location.search);
        let utm = sp.get("utm_term") || "";
        let gclid = sp.get("gclid") || sp.get("gbraid") || sp.get("wbraid") || "";

        if (!gclid) {
            const gcl_aw = parseGclFromCookie(readCookie("_gcl_aw"));
            const gcl_dc = parseGclFromCookie(readCookie("_gcl_dc"));
            const gcl_gb = parseGclFromCookie(readCookie("_gcl_gb"));
            const gcl_au = parseGclFromCookie(readCookie("_gcl_au"));
            gclid = gcl_aw || gcl_dc || gcl_gb || gcl_au || "";
        }

        if (!utm && !gclid) {
            const cached = loadCache();
            utm = utm || cached.utm;
            gclid = gclid || cached.gclid;
        }

        if (utm || gclid) saveCache({ utm, gclid });

        return { utm, gclid };
    }

    const isExternal = (a) => {
        try {
            const href = a.getAttribute("href") || "";
            if (!href) return false;
            if (
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                href.startsWith("javascript:")
            ) {
                return false;
            }
            return new URL(href, location.href).hostname !== location.hostname;
        } catch {
            return false;
        }
    };

    function patchLink(a, params) {
        const originalHref = a.getAttribute("href");
        if (!originalHref) return;

        if (!isExternal(a)) return;

        let url;
        try {
            url = new URL(originalHref, location.href);
        } catch {
            return;
        }

        const braid = url.searchParams.get("gbraid") || url.searchParams.get("wbraid");
        if (!params.gclid && braid) {
            url.searchParams.set("gclid", braid);
        }

        let changed = false;
        if (params.utm) {
            url.searchParams.set("utm_term", params.utm);
            changed = true;
        }
        if (params.gclid) {
            url.searchParams.set("gclid", params.gclid);
            changed = true;
        }

        if (!changed) return;

        a.setAttribute("href", url.toString());
    }

    function runLinkHandler() {
        const params = getParams();
        const links = document.querySelectorAll("a[href]");
        links.forEach((a) => patchLink(a, params));
    }

    const start = () => {
        try {
            runLinkHandler();
        } catch (e) {
            err("run error:", e);
        }
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
        start();
    } else {
        addEventListener("DOMContentLoaded", start);
    }

    window.updateLinkParams = () => {
        start();
    };

    addEventListener("popstate", start);

    const mo = new MutationObserver((mutations) => {
        let needRun = false;
        for (const m of mutations) {
            if (m.addedNodes && m.addedNodes.length) {
                for (const n of m.addedNodes) {
                    if (
                        n.nodeType === 1 &&
                        (n.tagName === "A" || n.querySelector?.("a"))
                    ) {
                        needRun = true;
                        break;
                    }
                }
            }
            if (needRun) break;
        }
        if (needRun) {
            start();
        }
    });
    try {
        mo.observe(document.documentElement, { childList: true, subtree: true });
    } catch { }
})();