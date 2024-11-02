const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close-cart");

// Toggle cart visibility when the cart icon is clicked
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("active");
});

// Close the cart when the close button is clicked
if (close) {
    close.addEventListener("click", () => {
        cart.classList.remove("active");
    });
}

















