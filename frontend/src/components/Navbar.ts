import { qs } from '../utils/dom-utils';

export const initNavbar = () => {
    const nav = qs('.navbar');
    if (!nav) return;
    // You can add scroll-based transparency logic here later
    console.log("Navbar initialized");
};