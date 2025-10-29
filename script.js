// Section fade animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.scrollY + window.innerHeight * 0.8;
  sections.forEach((s) => {
    if (trigger > s.offsetTop) s.classList.add("visible");
  });
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.innerHTML = document.body.classList.contains("light")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

