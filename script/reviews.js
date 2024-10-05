var swiper = new Swiper(".reviews-box", {
    cssMode: true,
    slidesPerView:3,
    spaceBetween:20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:1,
        },
        600: {
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        },
    },
});
// Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Swiper options
    loop: true, // Loop the slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Get the buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Add event listeners for the buttons
prevButton.addEventListener('click', () => {
    swiper.slidePrev(); // Move to the previous slide
});

nextButton.addEventListener('click', () => {
    swiper.slideNext(); // Move to the next slide
});
