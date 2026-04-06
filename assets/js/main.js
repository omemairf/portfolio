window.addEventListener("load", () => {
  // Smooth scroll to hash (if any)
  if (window.location.hash && document.querySelector(window.location.hash)) {
    document.querySelector(window.location.hash).scrollIntoView({ behavior: "smooth" });
  }

  // Mobile Navbar Toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // AOS animations
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Scroll to top button logic
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  window.addEventListener("scroll", () => {
    scrollUpBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Swiper - Testimonials
  new Swiper(".testimonials-slider", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 }
    }
  });

const lightbox = GLightbox({
  selector: '.glightbox',
  zoomable: true,
  touchNavigation: true,
  loop: true
});



 const swiper = new Swiper('.logoSwiper', {
    slidesPerView: 5,       // number of slides visible
    spaceBetween: 16,       // space between slides in px
    loop: true,             // infinite loop
    autoplay: {
      delay: 1500,          // auto-slide every 1.5 sec
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 10 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 5, spaceBetween: 16 },
    },
  });
 
});
