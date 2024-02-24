!(function () {
    "use strict";

      /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

    /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});
  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }
    function k() {
        AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 });
    }
    b("click", ".mobile-nav-toggle", function (b) {
        a("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x");
    }),
        b(
            "click",
            ".navbar .dropdown > a",
            function (b) {
                a("#navbar").classList.contains("navbar-mobile") && (b.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active"));
            },
            !0
        ),
        b(
            "click",
            ".scrollto",
            function (d) {
                if (a(this.hash)) {
                    d.preventDefault();
                    let b = a("#navbar");
                    if (b.classList.contains("navbar-mobile")) {
                        b.classList.remove("navbar-mobile");
                        let c = a(".mobile-nav-toggle");
                        c.classList.toggle("bi-list"), c.classList.toggle("bi-x");
                    }
                    j(this.hash);
                }
            },
            !0
        ),
        window.addEventListener("load", () => {
            window.location.hash && a(window.location.hash) && j(window.location.hash);
        }),
        window.addEventListener("load", () => {
            let c = a(".portfolio-container");
            if (c) {
                let d = new Isotope(c, { itemSelector: ".portfolio-item", layoutMode: "fitRows" }),
                    e = a("#portfolio-flters li", !0);
                b(
                    "click",
                    "#portfolio-flters li",
                    function (a) {
                        a.preventDefault(),
                            e.forEach(function (a) {
                                a.classList.remove("filter-active");
                            }),
                            this.classList.add("filter-active"),
                            d.arrange({ filter: this.getAttribute("data-filter") }),
                            k();
                    },
                    !0
                );
            }
        }),
        GLightbox({ selector: ".portfokio-lightbox" }),
        new Swiper(".portfolio-details-slider", { speed: 400, autoplay: { delay: 5e3, disableOnInteraction: !1 }, pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }),
        new Swiper(".events-slider", { speed: 600, loop: !0, autoplay: { delay: 5e3, disableOnInteraction: !1 }, slidesPerView: "auto", pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 } }),
        window.addEventListener("load", () => {
            k();
        });
})(),
    $(".skill").waypoint(
        function () {
            $(".progress .progress-bar").each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        },
        { offset: "80%" }
    );
