const toggleSwitch = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

// Load the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggleSwitch.checked = true; // Check the toggle switch
    themeLabel.innerHTML = 'Light mode &#x2600;'; // Set to sun icon
} else {
    themeLabel.innerHTML = 'Dark mode &#x1F319;'; // Set to moon icon
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    
    // Update the label text and icon
    if (document.body.classList.contains('dark')) {
        themeLabel.innerHTML = 'Light mode &#x2600;'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark');
    } else {
        themeLabel.innerHTML = 'Dark mode &#x1F319;'; // Moon icon for dark mode
        localStorage.removeItem('theme');
    }
});
