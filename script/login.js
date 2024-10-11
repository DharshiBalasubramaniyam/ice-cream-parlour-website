document.getElementById("loginButton").addEventListener("click", function(event) {
  event.preventDefault();

  // Fetch input values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(e => e.remove());

  // Validation logic
  let isValid = true;

  // Validate first name and last name
  if (firstName === "") {
      showError("firstName", "First name is required");
      isValid = false;
  }
  if (lastName === "") {
      showError("lastName", "Last name is required");
      isValid = false;
  }

  // Validate username
  if (username === "") {
      showError("username", "Username is required");
      isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
  }

  // Validate password (minimum 6 characters)
  if (password.length < 6) {
      showError("password", "Password must be at least 6 characters long");
      isValid = false;
  }

  // If all validations pass, proceed to redirect
  if (isValid) {
      alert("Login successful! Redirecting to homepage...");
      window.location.href = "index.html"; // Redirect to index.html
  }
});

// Function to display error messages
function showError(inputId, message) {
  const inputField = document.getElementById(inputId);
  const errorElement = document.createElement("div");
  errorElement.className = "error";
  errorElement.style.color = "red";
  errorElement.textContent = message;
  inputField.parentNode.appendChild(errorElement);
}

// Password toggle visibility
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function() {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Toggle the icon between eye and eye-slash
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");
});


