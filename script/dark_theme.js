// script.js
const toggleSwitch = document.getElementById('themeToggle');

// Load the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleSwitch.checked = true; // Check the toggle switch
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    // Save the theme preference to localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});
