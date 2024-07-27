document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Perform form validation if needed

        // Simulate form submission
        setTimeout(() => {
            // Show response message
            responseMessage.innerText = 'Thank you for your message! We will get back to you soon.';
            responseMessage.style.display = 'block';
            
            // Optionally, you can reset the form fields here
            form.reset();
        }, 1000); // Simulating a delay for form submission
    });
});
