// Contact form validation
const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let valid = true;  // Assume form is valid until proven otherwise

    clearError(firstname);
    clearError(lastname);
    clearError(email);
    clearError(phone);
    clearError(message);

    if (firstname.value.trim() === "") {
        setError(firstname, "First name is required!");
        valid = false;
    }
    if (lastname.value.trim() === "") {
        setError(lastname, "Last name is required!");
        valid = false;
    }
    if (email.value.trim() === "") {
        setError(email, "Email is required!");
        valid = false;
    } 
    else if (!emailRegex.test(email.value.trim())) {
        setError(email, "Invalid email format!");
        valid = false;
    }
    if (phone.value.trim() === "") {
        setError(phone, "Phone number is required!");
        valid = false;
    } 
    else if (!phoneRegex.test(phone.value.trim())) {
        setError(phone, "Contact number must have exactly 10 digits");
        valid = false;
    }
    if (message.value.trim() === "") {
        setError(message, "Message is required!");
        valid = false;
    }

    // If all fields are valid, submit the form
    if (valid) {
        contactForm.submit();  // Only submit if everything is valid
    }
});

function clearError(field) {
    const error = field.parentElement.querySelector("small");
    error.textContent = ""; // Clear the error message
}

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    error.textContent = errorMessage;
}
