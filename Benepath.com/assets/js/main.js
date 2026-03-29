const dropdowns = document.querySelectorAll('.navbar .dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.add('show');
      dropdown.querySelector('.dropdown-menu').classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('show');
      dropdown.querySelector('.dropdown-menu').classList.remove('show');
    });
  });
  const partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 2.5,
    spaceBetween: 24,
    grabCursor: true,

    breakpoints: {
      576: {
        slidesPerView: 2.5,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 6,   // all logos
        allowTouchMove: false, // disable dragging
      }
    }
  });
  
  
  let Testimonialswiper;

  function handleTestimonialSwiper() {
    if (window.innerWidth >= 992) {

      // INIT only if not already initialized
      if (!Testimonialswiper) {
        Testimonialswiper = new Swiper(".testimonial-swiper", {
          slidesPerView: 3.2,
          spaceBetween: 24,
          grabCursor: true,
          loop: false,
          centeredSlides: false,

          breakpoints: {
            1200: {
              slidesPerView: 3.2,
            }
          }
        });
      }

    } else {

      // DESTROY swiper below 992
      if (Testimonialswiper) {
        Testimonialswiper.destroy(true, true);
        Testimonialswiper = undefined;
      }

    }
  }

  // Run on load
  handleTestimonialSwiper();

  // Run on resize
  window.addEventListener("resize", handleTestimonialSwiper);


  const insuranceSwiper = new Swiper(".insurance-swiper", {
    slidesPerView: 3.25,   // 3 full + 1/4 visible
    spaceBetween: 24,      // exact gap
    grabCursor: true,
    loop: false,
    centeredSlides: false,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.2,
      },
      992: {
        slidesPerView: 3.65, // your main layout
      },
      1600: {
        slidesPerView: 4.45, // extra wide screens
        spaceBetween: 48,
      }
    },
  });


  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });