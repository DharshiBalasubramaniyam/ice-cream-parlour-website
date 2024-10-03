// form.js
const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
const phoneRegex = /^[0-9]{10}$/; // Regex for 10 digits only

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        clearErrors();
        let valid = true;

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
        } else if (!emailRegex.test(email.value.trim())) {
            setError(email, "Invalid email format!");
            valid = false;
        }
        if (phone.value.trim() === "") {
            setError(phone, "Phone number is required!");
            valid = false;
        } else if (!phoneRegex.test(phone.value.trim())) {
            setError(phone, "Contact number must have 10 digits");
            valid = false;
        }
        if (message.value.trim() === "") {
            setError(message, "Message is required!");
            valid = false;
        }

        if (valid) {
            console.log("Form submitted successfully!");
            // contactForm.submit(); // Uncomment to allow submission
        }
    });
} else {
    console.error("Contact form not found! Please check the ID in your HTML.");
}

// Newsletter section scripts
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (newsletterEmail.value.trim() === "") {
            setError(newsletterEmail, "Email is required!");
        } else if (!emailRegex.test(newsletterEmail.value.trim())) {
            setError(newsletterEmail, "Invalid email format!");
        } else {
            console.log("Newsletter subscription successful!");
            newsletterForm.reset(); // Reset form after submission
        }
    });
} else {
    console.error("Newsletter form not found! Please check the ID in your HTML.");
}

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    if (error) {
        error.textContent = errorMessage;
    }
}

function clearErrors() {
    const errors = document.querySelectorAll("small");
    errors.forEach(error => {
        error.textContent = ""; // Clear previous error messages
    });
}
