var acc = document.getElementsByClassName("FAQ-questions");
let answer = false;

for (let index = 0; index < acc.length; index++) {
  acc[index].addEventListener("click", () => {
    toggleFAQ(index);
  });
}

function toggleFAQ(index) {
  const faqs = document.querySelectorAll(".FAQ");
  const answers = document.querySelectorAll(".FAQ-answers");

  // Get the selected FAQ and answer
  const faq = faqs[index];
  const answer = answers[index];

  if (answer.classList.contains("active")) {
    // Remove active class if it's already active
    faq.classList.remove("active");
    answer.classList.remove("active");
  } else {
    // Close all other FAQs and answers
    for (let i = 0; i < answers.length; i++) {
      if (i !== index) {
        faqs[i].classList.remove("active");
        answers[i].classList.remove("active");
      }
    }
    // Add active class to the clicked FAQ and answer
    faq.classList.add("active");
    answer.classList.add("active");
  }
}

