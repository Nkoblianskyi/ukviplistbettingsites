function runLinkHandler() {


    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const gclid = urlParams.get("gclid");


    const links = document.querySelectorAll("a");


    links.forEach((link, idx) => {
        let href = link.getAttribute("href") || "";


        if (href.includes("gbraid") || href.includes("wbraid")) {
            href = href
                .replace(/gbraid=([^&]*)/, "gclid=$1")
                .replace(/wbraid=([^&]*)/, "gclid=$1");

        } else {
            const sep = href.includes("?") ? "&" : "?";
            href = `${href}${sep}utm_term=${utmTerm}&gclid=${gclid}`;

        }

        link.setAttribute("href", href);

    });
}

// Автоматичний запуск при завантаженні сторінки

runLinkHandler();

// Доступна глобально для виклику з модалки
window.updateLinkParams = runLinkHandler;