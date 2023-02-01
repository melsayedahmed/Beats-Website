/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show Menu */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide Menu */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Change Header Background */
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* Show Scroll Up Button */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* Scroll Reveal */
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home-header, .section-title`, { delay: 600 });
sr.reveal(`.home-footer`, { delay: 700 });
sr.reveal(`.home-img`, { delay: 900, origin: "top" });

sr.reveal(
  `.sponsor-img, .products-card, .footer-logo, .footer-content, .footer-copy`,
  { origin: "top", interval: 100 }
);
sr.reveal(`.specs-data, .discount-animate`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.specs-img, .discount-img`, { origin: "right" });
sr.reveal(`.case-img`, { origin: "top" });
sr.reveal(`.case-data`);
