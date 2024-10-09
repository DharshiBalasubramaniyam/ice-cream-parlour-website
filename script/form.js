document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    let isValid = true;

    // Validation logic
    if (fname.value.trim() === '') {
        displayError(fname, 'First name is required');
        isValid = false;
    }
    if (lname.value.trim() === '') {
        displayError(lname, 'Last name is required');
        isValid = false;
    }
    if (email.value.trim() === '' || !validateEmail(email.value)) {
        displayError(email, 'Valid email is required');
        isValid = false;
    }
    if (phone.value.trim() === '' || !validatePhone(phone.value)) {
        displayError(phone, 'Valid phone number is required');
        isValid = false;
    }
    if (message.value.trim() === '') {
        displayError(message, 'Message cannot be empty');
        isValid = false;
    }

    // If all fields are valid, show the confirmation message
    if (isValid) {
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.classList.add('show');
        
        setTimeout(() => {
            confirmationMessage.classList.remove('show');
        }, 3000); // Message disappears after 3 seconds

        clearForm(); // Clear the form fields
    }
});

// Function to display validation error
function displayError(element, message) {
    const small = element.parentElement.querySelector('small');
    small.textContent = message;
}

// Function to validate email using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate phone number (basic validation)
function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // Adjust this regex based on your phone number format
    return re.test(String(phone));
}

// Function to clear form fields after successful submission
function clearForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
