const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Update position of the cursorDot
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Update position of the cursorOutline
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    // Animate the cursorOutline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {
        duration: 500,
        fill: "forwards"
    });
});
