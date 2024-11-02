window.onscroll = function() {
    var scrollProgress = document.querySelector('.scroll-progress');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Calculate the percentage scrolled
    var scrolled = (scrollTop / scrollHeight) * 100;

    // Set the width of the scroll progress element
    scrollProgress.style.width = scrolled + "%";
};
