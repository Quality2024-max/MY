document.addEventListener("DOMContentLoaded", function () {
  const typedText = document.getElementById("typing");
  const phrases = [
    "Web Development",
    "Digital Marketing",
    "SEO Services",
    "Mobile Apps",
    "Cloud Solutions",
    "AI Integration",
  ];

  let currentPhrase = 0;
  let currentLetter = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let deletingSpeed = 50;
  let pauseBetweenPhrases = 1500;

  function typeEffect() {
    const phrase = phrases[currentPhrase];

    if (isDeleting) {
      // Deleting mode
      typedText.textContent = phrase.substring(0, currentLetter - 1);
      currentLetter--;

      if (currentLetter === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typeEffect, 300);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      // Typing mode
      typedText.textContent = phrase.substring(0, currentLetter + 1);
      currentLetter++;

      if (currentLetter === phrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBetweenPhrases);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  // Start the typing effect after a short delay
  setTimeout(typeEffect, 1000);
});

// ======================sticky navbar=============================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

//-------------------------------------------------------------------------

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  let top = window.scrollY;
  // Remove 'active' class from all links once per scroll event
  navLinks.forEach((link) => link.classList.remove("active"));
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      let activeLink = document.querySelector("header nav a[href*=" + id + "]");
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });

  // ======================sticky navbar=============================
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ============================remove toggle icon and navbar when click navbar link (scroll)==============================
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ======================scroll reveal=============================

ScrollReveal({
  reset: true,
  distance: "10px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-contect, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
