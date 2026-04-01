// Handles DOM manipulation & rendering logic 

export const UI = {
    renderDashboard(subs) {
        const grid = document.getElementById('subscription-grid');
        const heroSubtext = document.querySelector('.hero-subtext');
        const heroCtas = document.querySelector('.hero-ctas');
        const heroTitle = document.querySelector('h1');

        // Update UI to "Dashboard Mode"
        heroTitle.innerText = "Active Subscriptions";
        if (heroSubtext) heroSubtext.style.display = "none";
        if (heroCtas) heroCtas.style.display = "none";

        grid.innerHTML = subs.map(sub => `
            <div class="feature-card dashboard-card">
                <div class="icon-box"><i class="fas fa-receipt"></i></div>
                <h3>${sub.vendor}</h3>
                <p class="price">$${sub.amount}<span class="period">/mo</span></p>
                <p class="section-subtext">Detected: ${sub.date}</p>
            </div>
        `).join('');
    }
};