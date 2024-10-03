const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    if (firstname.value.trim() === "") {
        setError(firstname, "First name is required!");
    }
    if (lastname.value.trim() === "") {
        setError(lastname, "Last name is required!");
    }
    if (email.value.trim() === "") {
        setError(email, "Email is required!");
    }
    else if (!emailRegex.test(email.value.trim())){
        setError(email, "Invalid email format!");
    }
    if (phone.value.trim() === "") {
        setError(phone, "Phone number is required!");
    }
    else if (!phoneRegex.test(phone.value.trim())){
        setError(phone, "Contact number must have exactly 10 digits");
    }
    if (message.value.trim() === "") {
        setError(message, "Message is required!");
    }
});

// Newsletter section scripts
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (newsletterEmail.value.trim() === "") {
        setError(newsletterEmail, "Email is required!");
    }
    else if (!emailRegex.test(newsletterEmail.value.trim())) {
        setError(newsletterEmail, "Invalid email format!");
    }
});

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    error.textContent = errorMessage;
}
