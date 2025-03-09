// Modal and Ribbon Functionality (If applicable)
const ribbon = document.getElementById('ribbon');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

if (ribbon && modal && closeButton) {
    window.addEventListener('DOMContentLoaded', () => {
        modal.style.display = 'flex';
    });

    ribbon.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// URL Management: Remove .html from URLs
document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname;

    // If the URL ends with .html, remove it and update history
    if (path.endsWith('.html')) {
        let newPath = path.replace('.html', '');
        window.history.replaceState(null, '', newPath);
    }
});
