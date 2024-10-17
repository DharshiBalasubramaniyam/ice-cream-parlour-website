
const passwordInput = document.getElementById("password-input-field");
const strengthText = document.getElementById("password-strength-text");
const strengthBar = document.getElementById("strength-bar");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    const result = zxcvbn(password);
    const strength = result.score;

    // Update strength bar and text
    strengthBar.style.width = `${(strength + 1) * 20}%`;
    const strengthLevels = ["Very Weak", "Weak", "Okay", "Good", "Strong"];
    strengthText.textContent = strengthLevels[strength];
    
    const colors = ["#ff4d4d", "#ff944d", "#ffd24d", "#d2ff4d", "#4dff88"];
    strengthBar.style.backgroundColor = colors[strength];
});

// Form validation logic
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("input[placeholder='First name']");
    const lastName = document.querySelector("input[placeholder='Last name']");
    const email = document.querySelector("input[type='email']");
    const password = document.getElementById("password-input-field");

    clearErrors();

    let isValid = true;

    if (firstName.value.trim() === "") {
        showError(firstName, "First name is required");
        isValid = false;
    }

    if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    }

    if (password.value.trim() === "") {
        showError(password, "Password is required");
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});

function showError(inputElement, message) {
    inputElement.classList.add("error");

    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message show-message";
    errorMessage.innerText = message;

    inputElement.parentNode.appendChild(errorMessage);
}

function clearErrors() {
    const inputs = document.querySelectorAll(".input-field");
    inputs.forEach(input => input.classList.remove("error"));

    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());
}

const toggle_password=document.getElementById("toggle-password");
const password=document.getElementById("password-input-field");

password.setAttribute('type', 'password'); 

toggle_password.addEventListener("click", function(){
    const type=password.getAttribute('type')==='password'? 'text':'password'
    password.setAttribute("type",type);

  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');
})





const form = document.getElementById('login-form');
const email = document.getElementById('email');


const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function (e) {
// Prevent the form from submitting
e.preventDefault();

let isValid = true;

// Reset previous error messages
emailError.textContent = '';
passwordError.textContent = '';

// Check if the email is valid
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (email.value.trim() === '') {
emailError.textContent = 'Email must not be empty';
isValid = false;
} else if (!emailPattern.test(email.value)) {
emailError.textContent = 'Please enter a valid email address';
isValid = false;
}

// Check if the password is not empty
if (password.value.trim() === '') {
passwordError.textContent = 'Password must not be empty';
isValid = false;
}

// If all validations pass, submit the form
if (isValid) {
form.submit();  // Submit the form if everything is valid
}
})