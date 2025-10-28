// Fade-in animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
      sec.style.transition = "0.8s ease";
    } else {
      sec.style.opacity = "0";
      sec.style.transform = "translateY(50px)";
    }
  });
});

// Dark-Light theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleBtn.innerHTML = body.classList.contains("light")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
