
const heroTitle = document.querySelector(".hero-title");
const heroSubtitle = document.querySelector(".hero-subtitle");

window.addEventListener("load", () => {
  heroTitle.classList.add("active");
  heroSubtitle.classList.add("active");
});


const sections = document.querySelectorAll("section:not(.hero)");

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
});

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
