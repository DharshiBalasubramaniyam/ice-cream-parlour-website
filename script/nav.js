// nav.js
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1 // Trigger when at least 10% of the section is visible
};

// Function to handle active link update
function observerCallback(entries) {
    entries.forEach(entry => {
        console.log(`Observing section: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`);
        const id = entry.target.id;
        const activeLink = document.querySelector(`.link[href="#${id}"]`);

        if (entry.isIntersecting) {
            // Remove active class from all links
            links.forEach(link => link.classList.remove("active"));
            // Add active class to the current link
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});


// Ensure the links are clickable and toggle the active state
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(link => link.classList.remove("active"));
        link.classList.add("active");
    });
=======
// when user click the button take him to the top with smooth behavior
scrollButton?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // for smoothly scrolling
  });
});

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
