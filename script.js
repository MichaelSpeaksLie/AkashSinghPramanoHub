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


