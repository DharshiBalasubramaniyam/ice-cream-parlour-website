document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("toggle-password");
  const passwordField = document.getElementById("password-input-field");

  // Set initial password input type to 'password'
  passwordField.setAttribute('type', 'password'); 

  // Add event listener to toggle password visibility
  togglePassword.addEventListener("click", function () {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute("type", type);

      if (type === 'text') {
          this.classList.remove('fa-eye-slash');
          this.classList.add('fa-eye');
      } else {
          this.classList.remove('fa-eye');
          this.classList.add('fa-eye-slash');
      }
  });
});
