const ribbon = document.getElementById('ribbon');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

// Show the modal on page load
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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting Premano Studio!');
});
