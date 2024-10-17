
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
