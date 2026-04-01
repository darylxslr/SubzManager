const BRAND_URLS: Record<string, string> = {
    "Netflix": "https://www.netflix.com",
    "Spotify": "https://www.spotify.com",
    "Amazon": "https://www.amazon.com",
    "ChatGPT": "https://chatgpt.com",
    "Gemini": "https://gemini.google.com"
};

export function initLogoNavigation() {
    const marquee = document.querySelector('.marquee-content');

    if (marquee) {
        marquee.addEventListener('click', (event) => {
            // Find the closest brand-item div from the clicked element
            const target = (event.target as HTMLElement).closest('.brand-item');
            
            if (target) {
                const nameElement = target.querySelector('.brand-name');
                const brandName = nameElement?.textContent?.trim();

                if (brandName && BRAND_URLS[brandName]) {
                    // Open in a new tab for better UX
                    window.open(BRAND_URLS[brandName], '_blank');
                }
            }
        });
    }
}