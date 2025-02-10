const ribbon = document.getElementById('ribbon');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

ribbon.addEventListener('click', () => {
    modal.style.display = 'flex'; // Show the modal
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close modal if user clicks outside the modal content area
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
