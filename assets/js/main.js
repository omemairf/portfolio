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
  if (window.scrollY > 300) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  });


  // Swiper - Events slider (optional)
  new Swiper(".events-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
    const lightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

});
