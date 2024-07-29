document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Perform form validation if needed
        const formData = new FormData(form);

        // Simulate form submission to Getform
        fetch('https://getform.io/f/aolgqldb', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                responseMessage.innerText = 'Thank you for your message! We will get back to you soon.';
                responseMessage.style.backgroundColor = '#d4edda';
                responseMessage.style.color = '#155724';
                form.reset(); // Optionally reset the form fields
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        responseMessage.innerText = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        responseMessage.innerText = 'There was an error sending your message. Please try again later.';
                    }
                    responseMessage.style.backgroundColor = '#f8d7da';
                    responseMessage.style.color = '#721c24';
                });
            }
        })
        .catch(error => {
            responseMessage.innerText = 'There was an error sending your message. Please try again later.';
            responseMessage.style.backgroundColor = '#f8d7da';
            responseMessage.style.color = '#721c24';
        })
        .finally(() => {
            responseMessage.style.display = 'block';
        });
    });
});
