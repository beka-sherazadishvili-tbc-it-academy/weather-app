const notFound = document.querySelector(".not__found");
const sections = document.querySelectorAll("main section");

function invisible(inputValue) {
  if (!inputValue) {
    sections.forEach((sections) => {
      if (sections.classList.contains("not__found")) {
        notFound.style.display = "flex";
      } else {
        sections.style.display = "none";
      }
    });
  } else {
    sections.forEach((sections) => {
      sections.style.display = "flex";
      notFound.style.display = "none";
    });
  }
}
