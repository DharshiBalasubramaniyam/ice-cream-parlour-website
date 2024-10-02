var acc = document.getElementsByClassName("FAQ-questions");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Toggle the active class for the answer div
        var answer = this.nextElementSibling; 
        answer.classList.toggle("active");    // Toggle the active class
    });
}

