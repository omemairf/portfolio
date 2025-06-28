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
      window.addEventListener("load", () => {
        let portfolioContainer = document.querySelector(".portfolio-container");
        if (portfolioContainer) {
          let iso = new Isotope(portfolioContainer, { itemSelector: ".portfolio-item", layoutMode: "fitRows" });
          let portfolioFilters = document.querySelectorAll("#portfolio-flters li");
          portfolioFilters.forEach(filter => {
            filter.addEventListener("click", function(event) {
              event.preventDefault();
              portfolioFilters.forEach(f => {
                f.classList.remove("filter-active");
              });
              this.classList.add("filter-active");
              iso.arrange({ filter: this.getAttribute("data-filter") });
              initAOS();
            });
          });
        }
      });
    
      GLightbox({ selector: ".portfolio-lightbox" });
    
      new Swiper(".portfolio-details-slider", { speed: 400, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: true } });
    
      new Swiper(".events-slider", { speed: 600, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: true } });
    
      window.addEventListener("load", () => {
        initAOS();
      });
  
 
    }
  })();
  
