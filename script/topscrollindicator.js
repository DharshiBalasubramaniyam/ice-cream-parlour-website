window.onscroll = function() {
    var scrollProgress = document.querySelector('.scroll-progress');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + "%";
};

