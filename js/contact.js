/* ============================================
   Contact Form JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

/**
 * Handle contact form submission
 */
function handleContactFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Validate email
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simulate form submission (in a real application, this would send to a backend)
    console.log('Form submitted:', {
        name,
        email,
        subject,
        message
    });

    // Show success message
    showFormSuccess(form);

    // Reset form
    form.reset();

    // Track event
    trackEvent('Contact Form', 'Submit', subject);
}

/**
 * Validate email address
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show success message
 */
function showFormSuccess(form) {
    // Create and show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = '<p>Thank you! Your message has been sent successfully. We will get back to you soon.</p>';
    
    form.parentElement.insertBefore(successDiv, form);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Add success message styling
const style = document.createElement('style');
style.textContent = `
    .form-success {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 16px;
        border-radius: 4px;
        margin-bottom: 24px;
    }

    .form-success p {
        margin: 0;
    }
`;
document.head.appendChild(style);
