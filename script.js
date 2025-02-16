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

const form = document.getElementById('contactForm');
const responseDiv = document.getElementById('form-response');

if (form && responseDiv) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://script.google.com/macros/s/AKfycbzz3ya0nA9kSKEPEd5Y3mkYfhJnvrfhaVjTQhinGSIDJC92HJyzSeaVk-q8t35flyRYog/exec', {
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
}
