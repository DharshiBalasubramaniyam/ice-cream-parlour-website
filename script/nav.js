// nav.js

window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.add('loaded');
    }, 3000); // 3 seconds delay
});



const menu = document.querySelector(".menu");
// Selecting the links and sections
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

menu.addEventListener("click", controlMenu)

function controlMenu() {
    const navlinks = document.querySelector(".nav-links");
    console.log(navlinks.classList)
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
        link.addEventListener("click", () => {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active")
            }
        })
    });
}

document.querySelector('.menu').addEventListener('click', function () {
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-times');
});

controlLinks();


// ================scroll  bottom to top==========================
const scrollButton = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => {
    window.pageYOffset > 100
        ? scrollButton.classList.add("show-btn")
        : scrollButton.classList.remove("show-btn");
});

// When the button is clicked, scroll to the top instantly
scrollButton?.addEventListener("click", () => {
    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0; // For older browsers
});

scrollButton?.addEventListener("click", () => {
    requestAnimationFrame(smoothScrollToTop);
});

// copyright
const year = new Date().getFullYear();
document.getElementById("year").innerText = year;
