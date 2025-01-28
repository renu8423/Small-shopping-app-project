window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const footer = document.querySelector("footer");
  footer.style.backgroundColor="#0a153d"
  const footerOffsetTop = footer.offsetTop;

  if (window.scrollY > 50 && window.scrollY < footerOffsetTop - window.innerHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const backToTopBtn = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    backToTopBtn.style.display = "block"; // Show button after scrolling 600px
  } else {
    backToTopBtn.style.display = "none"; // Hide button when near top
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling back to top
  });
});
