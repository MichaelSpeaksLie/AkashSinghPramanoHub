// ... (Your modal and ribbon code, if any) ...

// Contact Form Submission (This code will now only run on contact.html)
const form = document.getElementById('contactForm'); // Check if form exists
if (form) { // Only add event listener if the form is on the page
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

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
