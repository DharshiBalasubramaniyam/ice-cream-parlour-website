const wishlistIcon = document.querySelector(".wishlist-icon"); // This will now correctly target the wishlist icon
const wishlist = document.querySelector(".wishlist");
const close = document.querySelector(".close-wishlist");

// Toggle the wishlist sidebar
wishlistIcon.addEventListener("click", () => {
    wishlist.classList.toggle("active"); // Toggle the active class
});

// Close the wishlist sidebar
close.addEventListener("click", () => {
    wishlist.classList.remove("active");
});
