// URL Management: Remove .html from URLs
document.addEventListener('DOMContentLoaded', () => {
    let path = window.location.pathname;

    // If the URL ends with .html, remove it and update history
    if (path.endsWith('.html')) {
        let newPath = path.replace('.html', '');
        window.history.replaceState(null, '', newPath);
    }
});



// Remove .html or extra path segments from the URL for the ContactUs page
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        let path = window.location.pathname;
        
        if (path.match(/\/ContactUs\/contact\/?$/i)) {
            let newPath = path.replace(/\/ContactUs\/contact\/?$/i, '/ContactUs');
            window.history.replaceState(null, '', newPath);
        }
    });
})();



