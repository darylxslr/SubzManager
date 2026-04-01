import { Feature } from '../types';

export const initFeatures = (features: Feature[]) => {
    const grid = document.querySelector('.feature-grid');
    if (!grid) return;

    grid.innerHTML = features.map(f => `
        <div class="f-card">
            <div class="f-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.description}</p>
        </div>
    `).join('');
};