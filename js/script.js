/* Scroll sections Active Link */
let sections = document.querySelectorAll("section");
let naLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]");
      });
    }
  });

  /* Sticky navbar */
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* Remove toggle icon and navbar when click navbar link (scroll)*/
  menuIcon.classList.toggle("bx-x");
  menuIcon.classList.toggle("active");
};

/* Scroll Reveal */
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* Typed Js */
const typed = new Typed(".multiple-text", {
  strings: ["Culinary", "Adventurer", "Desainer", "Gamers", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 100,
  loop: true,
});
