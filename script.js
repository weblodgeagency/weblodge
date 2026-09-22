document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     MOBILE MENU
  ================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("active");
      });
    });
  }


  /* ================================
     STICKY HEADER EFFECT
  ================================= */

  const header = document.querySelector(".site-header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }


  /* ================================
     SCROLL REVEAL
  ================================= */

  const revealElements = document.querySelectorAll(
    ".section, .service-card, .why-card, .work-card, .process-step, .hero-content, .hero-visual"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });


  /* ================================
     SMOOTH SCROLL
  ================================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        const headerOffset = 90;

        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

      }

    });

  });


  /* ================================
     HERO MOUSE MOVEMENT
  ================================= */

  const heroVisual = document.querySelector(".hero-visual");

  if (heroVisual && window.innerWidth > 900) {

    heroVisual.addEventListener("mousemove", (event) => {

      const rect = heroVisual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width -
        0.5;

      const y =
        (event.clientY - rect.top) /
        rect.height -
        0.5;

      heroVisual.style.transform =
        `perspective(1000px)
         rotateY(${x * 4}deg)
         rotateX(${y * -4}deg)`;

    });

    heroVisual.addEventListener("mouseleave", () => {

      heroVisual.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";

    });

  }


  /* ================================
     CURRENT YEAR
  ================================= */

  const yearElement = document.querySelector(".current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
