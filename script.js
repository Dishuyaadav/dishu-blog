const progressBar = document.getElementById("progressBar");
const themeToggle = document.getElementById("themeToggle");
const revealElements = document.querySelectorAll(".reveal");

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

  revealOnScroll();
});

// Reveal animation
function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);