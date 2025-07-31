const internalLinks = document.querySelectorAll(".menu a[href^='#']");

function scrollTo(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

internalLinks.forEach((link) => {
  link.addEventListener("click", scrollTo);
});
