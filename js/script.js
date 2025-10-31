
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Portfolio loaded successfully — by Vidya");

  
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const fadeElements = document.querySelectorAll(".fade-up");

  function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) el.classList.add("show");
      else el.classList.remove("show");
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const typedText = document.querySelector(".glow");
  if (typedText) {
    const words = ["Vidya", "Full Stack Developer", "UI Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const currentWord = words[wordIndex];
      if (deleting) {
        typedText.textContent = currentWord.substring(0, charIndex--);
      } else {
        typedText.textContent = currentWord.substring(0, charIndex++);
      }

      if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        setTimeout(type, 1000);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 400);
      } else {
        setTimeout(type, deleting ? 80 : 150);
      }
    }
    type();
  }
});
