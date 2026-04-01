import { Brand } from '../types';

export const initMarquee = (brands: Brand[]) => {
    const wrapper = document.querySelector('.marquee-wrapper');
    if (!wrapper) return;
    
    wrapper.innerHTML = `
        <p class="overline">Automatically finds subscriptions from</p>
        <div class="marquee-content"></div>
    `;
    
    const content = wrapper.querySelector('.marquee-content')!;
    const html = brands.map(b => `
        <span><img src="${b.logoPath}" alt="${b.name}" class="brand-logo"> ${b.name}</span>
    `).join('');
    
    content.innerHTML = html + html; // Loop duplication
};