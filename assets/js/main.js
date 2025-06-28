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

  // Isotope filtering
  const portfolioContainer = document.querySelector(".portfolio-container");
  if (portfolioContainer) {
    const iso = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      filter: ".filter-custom" // 👉 Show only Custom Coding projects on load
    });

    const portfolioFilters = document.querySelectorAll("#portfolio-flters li");

    // Set 'Custom Coding' as active filter on load
    portfolioFilters.forEach(el => el.classList.remove("filter-active"));
    const defaultFilter = document.querySelector('[data-filter=".filter-custom"]');
    if (defaultFilter) defaultFilter.classList.add("filter-active");

    // Filter button click handling
    portfolioFilters.forEach((filter) => {
      filter.addEventListener("click", function (e) {
        e.preventDefault();
        portfolioFilters.forEach((el) => el.classList.remove("filter-active"));
        this.classList.add("filter-active");

        const filterValue = this.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });

        AOS.refresh(); // Refresh AOS animations
      });
    });

    // SHOW MORE logic
    const allItems = document.querySelectorAll(".portfolio-item");
    const showMoreBtn = document.getElementById("show-more");

    if (allItems.length > 9 && showMoreBtn) {
      allItems.forEach((item, index) => {
        if (index >= 9) item.classList.add("hidden");
      });

      showMoreBtn.style.display = "inline-block";

      showMoreBtn.addEventListener("click", () => {
        allItems.forEach(item => item.classList.remove("hidden"));
        iso.arrange(); // Re-arrange Isotope after revealing items
        showMoreBtn.style.display = "none";
        AOS.refresh();
      });
    } else if (showMoreBtn) {
      showMoreBtn.style.display = "none";
    }
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

  // Swiper - Portfolio Details Slider (optional)
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
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

  // GLightbox for portfolio
  GLightbox({ selector: ".portfolio-lightbox" });
});
