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
  // Portfolio Filtering + Show More
  // -------------------------

  const filters = document.querySelectorAll("#portfolio-flters li");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const showMoreBtn = document.getElementById("showMoreBtn");
  const ITEMS_TO_SHOW = 9; // items to show initially
  let currentFilter = ".filter-custom";
  let showingAll = false;

  function getCategoryCount(filterValue) {
    return [...portfolioItems].filter(item => item.classList.contains(filterValue.slice(1))).length;
  }

  function filterItems(filterValue, showAll = false) {
    let visibleCount = 0;

    portfolioItems.forEach(item => {
      if (item.classList.contains(filterValue.slice(1))) {
        if (showAll || visibleCount < ITEMS_TO_SHOW) {
          item.style.display = "block";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      } else {
        item.style.display = "none";
      }
    });

    // Show or hide the Show More button based on items left to show
    if (!showAll && visibleCount < getCategoryCount(filterValue)) {
      showMoreBtn.style.display = "block";
    } else {
      showMoreBtn.style.display = "none";
    }
  }

  // Initial load — show default filtered items
  filterItems(currentFilter);

  // Set active class on default filter
  filters.forEach(filter => {
    filter.classList.toggle("filter-active", filter.getAttribute("data-filter") === currentFilter);
  });

  // Filter click handler
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      currentFilter = filter.getAttribute("data-filter");
      showingAll = false;

      filters.forEach(f => f.classList.remove("filter-active"));
      filter.classList.add("filter-active");

      filterItems(currentFilter);
    });
  });

  // Show More button click handler
  showMoreBtn.addEventListener("click", () => {
    showingAll = true;
    filterItems(currentFilter, true);
  });
});
