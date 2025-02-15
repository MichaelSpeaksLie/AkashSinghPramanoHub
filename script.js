// Modal and Ribbon Functionality
const ribbon = document.getElementById('ribbon');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

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


// Contact Form Submission
const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbzz3yaOnA9kSKePEd5Y3mkYfhJnvrfhaVjTQhinGSIDJC92HJyzSeaVk-q8t3SflyRYog/exec', { // ***MAKE SURE THIS URL IS CORRECT***
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        responseDiv.innerHTML = data;
        form.reset();
    })
    .catch(error => {
        responseDiv.innerHTML = "An error occurred. Please try again later.";
        console.error('Error:', error);
    });
});
