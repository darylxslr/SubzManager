import './styles/main.css';
import './styles/marquee.css';
import { initLogoNavigation } from './navigation';

const BRANDS = [
    { name: "Netflix", logo: "/assets/netflix.png" },
    { name: "Spotify", logo: "/assets/spotify.png" },
    { name: "Gemini", logo: "/assets/gemini.png" },
    { name: "Amazon", logo: "/assets/amazon.png" },
    { name: "ChatGPT", logo: "/assets/chatgpt.png" }
];

const FEATURES = [
    { 
        title: "Auto-Discovery", 
        description: "We securely scan your inbox to find subscription receipts. You don't have to manually enter any data or link your bank accounts.", 
        icon: "🔍" 
    },
    { 
        title: "Usage Analytics", 
        description: "See exactly how much you're spending monthly and yearly. SubManager highlights inactive apps so you know what to cut.", 
        icon: "📊" 
    },
    { 
        title: "1-Click Cancellation", 
        description: "Ready to let an app go? We provide direct cancellation links or handle the unsubscription process for you instantly.", 
        icon: "ⓧ" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee-content');
    if (marquee) {
        const brandItems = BRANDS.map(b => `
            <div class="brand-item">
                <div class="brand-logo-container">
                    <img src="${b.logo}" alt="${b.name}" class="brand-logo">
                </div>
                <span class="brand-name">${b.name}</span>
            </div>
        `).join('');
        
        marquee.innerHTML = brandItems + brandItems;
    }

    // --- Features Setup ---
    const grid = document.querySelector('.feature-grid');
    if (grid) {
        grid.innerHTML = FEATURES.map(f => `
            <div class="f-card">
                <div class="f-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p>${f.description}</p>
            </div>
        `).join('');
    }

    initLogoNavigation();
});


