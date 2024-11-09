const reviewsPerPage = 2; // Number of reviews per page
const reviewsContainer = document.getElementById('reviewsContainer');
const paginationContainer = document.getElementById('pagination');
const reviews = Array.from(document.querySelectorAll('.review-box'));

function displayReviews(page) {
    // Hide all reviews first
    reviews.forEach(review => review.style.display = 'none');
    
    // Calculate the start and end index of the reviews for the current page
    const start = (page - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;

    // Show the reviews for the current page
    reviews.slice(start, end).forEach(review => review.style.display = 'block');
    
    // Update the pagination buttons
    updatePaginationButtons(page);
}

function updatePaginationButtons(currentPage) {
    // Calculate the total number of pages
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    
    // Clear the pagination container
    paginationContainer.innerHTML = '';
    
    // Generate pagination buttons
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.classList.toggle('active', i === currentPage);
        button.addEventListener('click', () => displayReviews(i));
        paginationContainer.appendChild(button);
    }
}

// Initial display of the first page
displayReviews(1);
