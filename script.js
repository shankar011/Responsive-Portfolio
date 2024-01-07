document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    const smoothScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    };

    // Handle click on the "View Portfolio" button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll('portfolio');
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

       
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
    });
});
