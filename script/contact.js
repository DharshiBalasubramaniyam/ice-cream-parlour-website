const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // First name validation
    if (firstname.value.trim() === "") {
        setError(firstname, "First name is required!");
        isValid = false;
    } else if (/[^a-zA-Z]/.test(firstname.value.trim())) {
        setError(firstname, "Only letters are allowed in the first name!");
        isValid = false;
    } else {
        clearError(firstname); // Clear error if valid
    }
    
    // Last name validation
    if (lastname.value.trim() === "") {
        setError(lastname, "Last name is required!");
        isValid = false;
    } else if (/[^a-zA-Z]/.test(lastname.value.trim())) {
        setError(lastname, "Only letters are allowed in the last name!");
        isValid = false;
    } else {
        clearError(lastname); // Clear error if valid
    }

    // Email validation
    if (email.value.trim() === "") {
        setError(email, "Email is required!");
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        setError(email, "Invalid email format!");
        isValid = false;
    } else {
        clearError(email); // Clear error if valid
    }

    // Phone validation
    if (phone.value.trim() === "") {
        setError(phone, "Phone number is required!");
        isValid = false;
    } else if (!phoneRegex.test(phone.value.trim())) {
        setError(phone, "Contact number must have exactly 10 digits!");
        isValid = false;
    } else {
        clearError(phone); // Clear error if valid
    }

    // Message validation
    if (message.value.trim() === "") {
        setError(message, "Message is required!");
        isValid = false;
    } else {
        clearError(message); // Clear error if valid
    }

    // If form is valid, submit data
    if (isValid) {
        const formData = new FormData(contactForm);
        contactForm.reset();
        // Uncomment the following line to show a success message
        // alert("Your details were submitted successfully");
    }
});

// Newsletter section scripts
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (newsletterEmail.value.trim() === "") {
        setError(newsletterEmail, "Email is required!");
    } else if (!emailRegex.test(newsletterEmail.value.trim())) {
        setError(newsletterEmail, "Invalid email format!");
    } else {
        clearError(newsletterEmail); // Clear error if valid
    }
});

// Function to set error message
function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    error.textContent = errorMessage;
    error.style.display = "block"; // Show error message
}

// Function to clear error message
function clearError(field) {
    const error = field.parentElement.querySelector("small");
    error.textContent = ""; // Clear error message
    error.style.display = "none"; // Hide error message
}
