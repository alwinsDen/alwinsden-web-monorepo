export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);

    // 1. Get the original static index.html
    const response = await next();

    // 2. Determine what the title/desc should be based on the URL
    // You can fetch this from an API, or use a switch statement
    let customTitle = "alw1nsDen";
    let customDescription = "Away from syntax towards intent.";
    let customPreviewImage = "https://alwinsden.com/landscape-icon.png"

    if (url.pathname.includes("article/google-auth-the-kmp-way")) {
        customTitle = "Google Sign-in: The KMP Way";
        customDescription = "Series exploring KMP UI.";
        customPreviewImage = "https://alwinsden.com/Undestand-kotlin-compose.png"
    }

    // 3. Rewrite the HTML on the fly
    return new HTMLRewriter()
        .on("title", {
            element(element) {
                element.setInnerContent(customTitle);
            },
        })
        .on('meta[name="description"]', {
            element(element) {
                element.setAttribute("content", customDescription);
            },
        })
        .on('meta[property="og:title"]', {
            element(element) {
                element.setAttribute("content", customTitle);
            },
        })
        .on('meta[property="og:image"]', {
            element(element) {
                element.setAttribute("content", customPreviewImage);
            },
        })
        .transform(response);
}