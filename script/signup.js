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