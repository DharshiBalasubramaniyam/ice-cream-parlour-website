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

  if (answer.classList.contains("active")) {
      answer.classList.remove("active");
  } else {
    // Close all other open answers
    for (let i = 0; i < answers.length; i++) {
      if (i !== index) {
          answers[i].classList.remove("active");
      }
    }
    // Open the clicked answer
    answer.classList.add("active");
  }
}
