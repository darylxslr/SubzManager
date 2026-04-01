 //  Main Coordinator (Init) Entry Point

import { API } from './api.js';
import { UI } from './ui.js';
import { CONFIG } from './config.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Setup Click Listeners
    const loginBtns = document.querySelectorAll('.btn-primary-sm, .btn-primary-lg');
    loginBtns.forEach(btn => btn.addEventListener('click', () => API.login()));

    // 2. Auto-load if in Mock Mode or if logged in
    try {
        const data = await API.getSubscriptions();
        if (data) {
            UI.renderDashboard(data);
        }
    } catch (err) {
        console.log("Waiting for user login...");
    }
});