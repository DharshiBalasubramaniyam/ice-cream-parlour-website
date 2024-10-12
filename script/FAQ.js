var acc = document.getElementsByClassName("FAQ-questions");
let answer = false;
for (let index = 0; index < acc.length; index++) {
  acc[index].addEventListener("click", () => {
    showfaq(index);
  });
}

function showfaq(index) {
  const answers = document.querySelectorAll(".FAQ-answers");
  const answer = answers[index];

  const icons = document.querySelectorAll(".FAQ-questions i");
  const icon = icons[index];
  
  if (answer.classList.contains("active")) {
      answer.classList.remove("active");
      icon.style.transform = "rotate(0deg)"; // Reset the icon rotation when closed
  } else {
    // Close all other open answers
    for (let i = 0; i < answers.length; i++) {
      if (i !== index) {
          answers[i].classList.remove("active");
          icons[i].style.transform = "rotate(0deg)";
      }
    }
    // Open the clicked answer
    answer.classList.add("active");
    icon.style.transform = "rotate(180deg)"; // Rotate the arrow
  }
}
