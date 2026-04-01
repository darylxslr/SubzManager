/** Safe wrapper for selecting elements */
export function qs<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector);
}