// Tilføjer en event listener til menu-ikonet, der lytter efter klik
document.getElementById("menu-icon").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links"); // Henter navigationselementet
  navLinks.classList.toggle("show"); // Skifter mellem at vise/skjule navigationen
});

// Henter elementerne til navigation og body
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");
const body = document.body;

// Tilføjer en event listener til menuikonet, der håndterer visning af navigationen
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open"); // Skifter mellem at tilføje/fjerne "open"-klassen

  if (navLinks.classList.contains("open")) {
    body.classList.add("no-scroll"); // Forhindrer scrolling, når menuen er åben
  } else {
    body.classList.remove("no-scroll"); // Tillader scrolling, når menuen lukkes
  }
});

// Henter header og hero-sektionen
const header = document.getElementById("header");
const aboutSection = document.getElementById("hero_section");

// Tilføjer en event listener til vinduets scroll-event
window.addEventListener("scroll", () => {
  // Hvis brugeren har scrollet forbi hero-sektionen, tilføjes "scrolled"-klassen til headeren
  if (window.scrollY >= aboutSection.offsetTop + aboutSection.offsetHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled"); // Hvis ikke, fjernes klassen igen
  }
});
