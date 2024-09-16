const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = new RegExp(/[^A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
const phoneRegex = new RegExp(/[^0-9]/, "gm");

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    if (firstname.value.trim()==="") {
        setError(firstname, "First name is required!");
    }
    if (lastname.value.trim()==="") {
        setError(lastname, "Last name is required!");
    }
    if (email.value.trim()==="") {
        setError(email, "Email is required!");
    }
    else if (!emailRegex.test(email.value.trim())){
        setError(email, "Invalid email format!");
    }
    if (phone.value.trim()==="") {
        setError(phone, "Phone number is required!");
    }
    else if (phone.value.trim().length>10 || phoneRegex.test(phone.value.trim())){
        setError(phone, "Contact number must have 10 digits")
    }
    if (message.value.trim()==="") {
        setError(message, "message is required!");
    }
})


// news letter section scripts
const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (newsletterEmail.value.trim()==="") {
        setError(newsletterEmail, "Email is required!")
    }
    else if (!emailRegex.test(newsletterEmail.value.trim())){
        setError(newsletterEmail, "Invalid email format!")
    }
})

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    console.log(error)
    error.textContent = errorMessage;
}