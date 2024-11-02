// nav.js

window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 3000); // 3 seconds delay
});

const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");
const navlinks = document.querySelector(".nav-links");
const scrollButton = document.querySelector(".scroll-button");

// Menu control
menu.addEventListener("click", controlMenu);

function controlMenu() {
    navlinks.classList.toggle("active");
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-times');
}

function controlLinks() {
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active");
            }
        });
    });
}

controlLinks();

// ================ Scroll to Top ===========================
window.addEventListener("scroll", () => {
    window.pageYOffset > 100
        ? scrollButton.classList.add("show-btn")
        : scrollButton.classList.remove("show-btn");
});

// Smooth scroll to top
scrollButton?.addEventListener("click", smoothScrollToTop);

function smoothScrollToTop() {
    const scrollStep = -window.scrollY / (500 / 15); // Calculate step
    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

// Copyright Year
const year = new Date().getFullYear();
document.getElementById("year").innerText = year;












