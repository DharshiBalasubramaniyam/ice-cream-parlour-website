document.addEventListener("DOMContentLoaded", function() {
  const signInButton = document.querySelector(".signin-btn button");
  const emailField = document.querySelector(".input-field[type='email']");
  const passwordField = document.getElementById("password-input-field");
  const togglePassword = document.getElementById("toggle-password");

  signInButton.addEventListener("click", function(event) {
      event.preventDefault();

      // Clear previous error messages
      document.querySelectorAll('.error-message').forEach(e => e.remove());

      // Fetch input values
      const email = emailField.value.trim();
      const password = passwordField.value.trim();
      
      // Validation flags
      let isValid = true;

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
          showError(emailField, "Please enter a valid email address.");
          isValid = false;
      }

      // Password validation (minimum 6 characters)
      if (password.length < 6) {
          showError(passwordField, "Password must be at least 6 characters long.");
          isValid = false;
      }

      // If validation passes, redirect to index.html
      if (isValid) {
          alert("Login successful! Redirecting to homepage...");
          window.location.href = "index.html"; // Redirect to index.html
      }
  });

  // Password toggle visibility
  togglePassword.addEventListener("click", function() {
      const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);

      // Toggle the icon between eye and eye-slash
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
  });

  // Function to display error messages
  function showError(inputField, message) {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.style.color = "red";
      errorElement.textContent = message;
      inputField.parentNode.appendChild(errorElement);
  }
});
