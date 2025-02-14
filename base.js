document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const body = document.body;

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});

const header = document.getElementById("header");
const aboutSection = document.getElementById("hero_section");

window.addEventListener("scroll", () => {
  if (window.scrollY >= aboutSection.offsetTop + aboutSection.offsetHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
