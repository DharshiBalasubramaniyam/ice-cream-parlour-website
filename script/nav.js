// nav.js

window.addEventListener('load', function() {
    setTimeout(function() {
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
        link.addEventListener("click", ()=> {
            if (navlinks.classList.contains("active")) {
                navlinks.classList.remove("active")
            }
        })
    });
}

controlLinks();

// ================scroll  bottom to top==========================
const scrollButton = document.querySelector(".scroll-button");

window.addEventListener("scroll", () => {
    window.pageYOffset > 100
        ? scrollButton.classList.add("show-btn")
        : scrollButton.classList.remove("show-btn");
});

function smoothScrollToTop() {
    const scrollY = window.pageYOffset;
    const scrollStep = Math.max(10, Math.floor(scrollY / 20)); 
    if (scrollY > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(smoothScrollToTop);
    }
}

// When the button is clicked, scroll to the top smoothly
scrollButton?.addEventListener("click", () => {
    requestAnimationFrame(smoothScrollToTop);
});

// Intersection Observer options
// const observerOptions = {
//     root: null, // Using the viewport as the root
//     rootMargin: "0px",
//     threshold: 0.3 // Trigger when at least 30% of the section is visible
// };

// // Function to handle active link update
// function observerCallback(entries) {
//     entries.forEach(entry => {
//         const id = entry.target.id;
//         const activeLink = document.querySelector(`.link[href="#${id}"]`);

//         if (entry.isIntersecting) {
//             // Remove active class from all links
//             links.forEach(link => link.classList.remove("active"));
//             // Add active class to the current link
//             if (activeLink) {
//                 activeLink.classList.add("active");
//             }
//         }
//     });
// }

// // Creating the observer
// const observer = new IntersectionObserver(observerCallback, observerOptions);

// // Observing each section
// sections.forEach(section => {
//     observer.observe(section);
// });

// // Smooth scrolling and manual link activation
// links.forEach(link => {
//     link.addEventListener("click", function() {
//         links.forEach(link => link.classList.remove("active"));
//         this.classList.add("active");
//     });
// });


