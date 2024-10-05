document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    const dropdown = document.getElementById('search-dropdown');
    dropdown.innerHTML = ''; // Clear previous suggestions

    console.log('Search input:', query);

    if (query.length >= 1) {  // Only apply changes after 1 characters
        const suggestions = getSuggestions(query); // Get filtered suggestions
        console.log('Filtered suggestions:', suggestions);

        if (suggestions.length > 0) {
            suggestions.forEach(function(suggestion) {
                const item = document.createElement('a');
                item.href = '#';
                item.textContent = suggestion;
                item.addEventListener('click', function() {
                    document.getElementById('search-bar').value = suggestion;
                    dropdown.style.display = 'none';
                    dropdown.classList.remove('show');
                    document.getElementById('search-bar').classList.remove('expand');
                });
                dropdown.appendChild(item);
            });
            dropdown.style.display = 'block'; 
            dropdown.classList.add('show'); // Show dropdown
            document.getElementById('search-bar').classList.add('expand'); // Apply bar styling when dropdown shows
        } else {
            dropdown.style.display = 'none'; // Hide dropdown if no suggestions
            dropdown.classList.remove('show');
            document.getElementById('search-bar').classList.remove('expand'); // Reset bar styling
        }
    } else {
        dropdown.style.display = 'none'; // Hide dropdown if query is less than 3 characters
        dropdown.classList.remove('show');
        document.getElementById('search-bar').classList.remove('expand'); // Reset bar styling
    }
});

// Ensures that the styling doesn’t change just on focus
document.getElementById('search-bar').addEventListener('focus', function() {
    const query = this.value.trim().toLowerCase();
    const dropdown = document.getElementById('search-dropdown');
    
    if (query.length < 1) {
        dropdown.style.display = 'none';
        document.getElementById('search-bar').classList.remove('expand'); // Prevent style loss on focus
    }
});
// adjust the items as needed these are just for testing
function getSuggestions(query) {
    const items = [
        'Vanilla', 'Chocolate', 'Strawberry',
        'Mint', 'Cookie Dough', 'Pistachio',
        'Mango', 'Lemon', 'Blueberry',
        'Coconut', 'Rocky Road', 'Butter Pecan'
    ];

    return items.filter(item => item.toLowerCase().includes(query));
}
