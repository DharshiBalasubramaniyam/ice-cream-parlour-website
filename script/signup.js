const toggle_password=document.getElementById("toggle-password");
const password=document.getElementById("password-input-field");

password.setAttribute('type', 'password'); 

toggle_password.addEventListener("click", function(){
    const type=password.getAttribute('type')==='password'? 'text':'password'
    password.setAttribute("type",type);

  this.classList.toggle('fa-eye-slash');
  this.classList.toggle('fa-eye');
})


// Select form elements
const form = document.querySelector('form');  // Selects the sign-up form
const firstName = document.querySelector('#first-name-field input');
const lastName = document.querySelector('#last-name-field input');
const email = document.querySelector('.input-fields input[type="email"]');
const button=document.querySelector('.submit-button')
const subscriptionPlan = document.getElementById('subscription-plan');

// Error message elements
const emailError = document.createElement('p');
const passwordError = document.createElement('p');
const firstNameError = document.createElement('p');
const lastNameError = document.createElement('p');

// Insert error messages after respective fields
email.parentElement.appendChild(emailError);
password.parentElement.appendChild(passwordError);
firstName.parentElement.appendChild(firstNameError);
lastName.parentElement.appendChild(lastNameError);

// Add styles for error messages
emailError.style.color = 'red';
passwordError.style.color = 'red';
firstNameError.style.color = 'red';
lastNameError.style.color = 'red';

button.addEventListener('click', function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    let isValid = true;

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    firstNameError.textContent = '';
    lastNameError.textContent = '';

    // Check if the first name is not empty
    if (firstName.value.trim() === '') {
        firstNameError.textContent = 'First name must not be empty';
        isValid = false;
    }

    // Check if the last name is not empty
    

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
});
