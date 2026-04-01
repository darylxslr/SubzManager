// Handles all fetch() calls to Python Data Fetching

import { CONFIG } from './config.js';

export const API = {
    async getSubscriptions() {
        if (CONFIG.USE_MOCK) {
            // Simulate a 1-second network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return [
                { vendor: "Netflix", amount: "15.99", date: "Apr 01, 2026" },
                { vendor: "Spotify", amount: "9.99", date: "Mar 28, 2026" },
                { vendor: "Adobe CC", amount: "19.99", date: "Mar 15, 2026" },
                { vendor: "Amazon Prime", amount: "14.99", date: "Apr 01, 2026" }
            ];
        }

        const response = await fetch(`${CONFIG.BACKEND_URL}${CONFIG.ENDPOINTS.SUBSCRIPTIONS}`, {
            credentials: 'include'
        });
        return await response.json();
    },

    login() {
        if (CONFIG.USE_MOCK) {
            alert("Mock Mode: Redirecting to Dashboard...");
            location.reload(); // Just refresh to trigger the 'init'
        } else {
            window.location.href = `${CONFIG.BACKEND_URL}${CONFIG.ENDPOINTS.LOGIN}`;
        }
    }
};