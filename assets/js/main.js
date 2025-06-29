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

  // Swiper - Events slider
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

  // Lightbox
  const lightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  // -------------------------
  // Portfolio Filtering (Only)
  // -------------------------

  const filters = document.querySelectorAll("#portfolio-flters li");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  let currentFilter = ".filter-custom";

  function filterItems(filterValue) {
    portfolioItems.forEach(item => {
      if (item.classList.contains(filterValue.slice(1))) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Initial load — show default category
  filterItems(currentFilter);

  // Set active class on default filter
  filters.forEach(filter => {
    filter.classList.toggle("filter-active", filter.getAttribute("data-filter") === currentFilter);
  });

  // Filter click handler
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      currentFilter = filter.getAttribute("data-filter");

      filters.forEach(f => f.classList.remove("filter-active"));
      filter.classList.add("filter-active");

      filterItems(currentFilter);
    });
  });
});
