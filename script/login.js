const toggle_password = document.getElementById("toggle-password");
const password = document.getElementById("password-input-field");

password.setAttribute('type', 'password'); 

toggle_password.addEventListener("click", function() {
    // Toggle the type attribute between 'password' and 'text'
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute("type", type);

    // Toggle the icon classes for showing/hiding the password
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});
