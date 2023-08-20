import name from '/script/script2.js';

function controlMenu() {
    const navlinks = document.querySelector(".nav-links");
    if (navlinks.classList.contains("active")) {
        navlinks.classList.remove("active");
    }
    else {
        navlinks.classList.add("active");
    }
}

function controlLinks() {
    const links = document.querySelectorAll(".link");
    const navlinks = document.querySelector(".nav-links");
    links.forEach(link => {
        link.addEventListener("click", ()=> {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active")
            }
        })
    });
}
controlLinks();

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





console.log(name);


const contactForm = document.getElementById("contact-form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

contactForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    if (firstname.value.trim()==="") {
        setError(firstname, "First name is required!");
    }
    if (lastname.value.trim()==="") {
        setError(lastname, "Last name is required!");
    }
    if (email.value.trim()==="") {
        setError(email, "Email is required!");
    }
    else if (emailRegex.test(email.value.trim())){
        setError(email, "Invalid email format!");
    }
    if (phone.value.trim()==="") {
        setError(phone, "Phone number is required!");
    }
    if (message.value.trim()==="") {
        setError(message, "message is required!");
    }
})

const newsletterForm = document.getElementById("news-letter");
const newsletterEmail = document.getElementById("newsletter-email");

newsletterForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (newsletterEmail.value.trim()==="") {
        setError(newsletterEmail, "Email is required!")
    }
    else if (emailRegex.test(newsletterEmail.value.trim())){
        setError(newsletterEmail, "Invalid email format!")
    }
})

function setError(field, errorMessage) {
    const error = field.parentElement.querySelector("small");
    console.log(error)
    error.textContent = errorMessage;
}