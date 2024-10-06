var swiper = new Swiper(".reviews-box", {
    cssMode: true,
    slidesPerView: 3, // Shows 3 slides at once on large screens
    spaceBetween: 20, // Space between slides
    navigation: {
        nextEl: ".swiper-button-next", // Button to move to the next slide
        prevEl: ".swiper-button-prev", // Button to move to the previous slide
    },
    pagination: {
        el: ".swiper-pagination", // Pagination dots
        clickable: true, // Allow clicking on the pagination dots
    },
    breakpoints: {
        // Settings for different screen sizes
        0: {
            slidesPerView: 1, // 1 slide on small screens
        },
        520: {
            slidesPerView: 1, // 1 slide on slightly larger screens
        },
        600: {
            slidesPerView: 2, // 2 slides on medium screens
        },
        1200: {
            slidesPerView: 3, // 3 slides on large screens
        },
    },
});
