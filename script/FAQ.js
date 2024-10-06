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
    // Close the currently active answer
    answer.style.padding = "0"; // Set padding to 0 for a smooth transition
    setTimeout(() => {
      answer.classList.remove("active");
    }, 190); // Match this with your CSS transition duration
  } else {
    // Close all other open answers
    for (let i = 0; i < answers.length; i++) {
      if (i !== index) {
        answers[i].style.padding = "0"; // Set padding to 0 for a smooth transition
        setTimeout(() => {
          answers[i].classList.remove("active");
        }, 20); // Match this with your CSS transition duration
      }
    }
    // Open the clicked answer
    answer.classList.add("active");
    setTimeout(() => {
      answer.style.padding = "1.3rem"; // Set padding to the desired value
    }, 10); // A short delay to ensure the class change has been applied
  }
}
