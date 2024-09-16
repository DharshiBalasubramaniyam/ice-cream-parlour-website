var swiper = new Swiper(".reviews-box", {
    cssMode: true,
    slidesPerView:3,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
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