document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const revealElements = document.querySelectorAll(".project-card, .reveal-up");

  function updateNavStyle() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.hash);
      if (!target) return;

      event.preventDefault();
      const offset = nav.offsetHeight + 10;
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 },
  );

  revealElements.forEach((element) => observer.observe(element));

  updateNavStyle();
  window.addEventListener("scroll", updateNavStyle);
});
