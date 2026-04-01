export const initFooter = () => {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="container footer-flex">
            <div class="logo">📦 SubManager</div>
            <div class="footer-links">
                <a href="#" style="margin-right:20px; text-decoration:none; color:inherit;">Privacy Policy</a>
                <a href="#" style="margin-right:20px; text-decoration:none; color:inherit;">Terms of Service</a>
                <a href="#" style="text-decoration:none; color:inherit;">Contact Support</a>
            </div>
            <div>© 2025 SubManager. All rights reserved.</div>
        </div>
    `;
};