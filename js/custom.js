document.addEventListener('DOMContentLoaded', function () {

  // MENU: Hide navbar collapse when a nav-link is clicked
  const navLinksForMenuToggle = document.querySelectorAll('.nav-link');
  const navbarCollapseElement = document.querySelector('#navbarNav'); // More specific ID for the main navbar
  // const navbarTogglerButton = document.querySelector('.navbar-toggler'); // Potentially not needed for aria updates if BS5 handles it

  if (navbarCollapseElement) {
    navLinksForMenuToggle.forEach(function (link) {
      link.addEventListener('click', function () {
        // Check if the target is actually the collapsible element and if it's shown
        if (navbarCollapseElement.classList.contains('show')) {
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapseElement);
            if (collapseInstance) {
              collapseInstance.hide();
            } else {
              // If no instance, it might not have been initialized by BS, or it is being hidden.
              // As a fallback, manually remove 'show' if BS API didn't catch it.
              // This path is less likely if BS5 JS is correctly loaded and initialized.
              // navbarCollapseElement.classList.remove('show'); 
              // console.warn('Bootstrap Collapse instance not found for #navbarNav. Manually hiding might be needed or check BS5 init.');
            }
          } else {
            // Fallback for when Bootstrap JS or Collapse module is not available
            // navbarCollapseElement.classList.remove('show');
            // if (navbarTogglerButton) {
            //   navbarTogglerButton.setAttribute('aria-expanded', 'false');
            //   navbarTogglerButton.classList.add('collapsed');
            // }
            console.warn('Bootstrap library or Collapse module not available.');
          }
        }
      });
    });
  }

  // AOS ANIMATION
  if (typeof AOS !== 'undefined') {
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });
  } else {
    console.warn('AOS library not found.');
  }

  // SMOOTH SCROLL for .nav-link clicks
  const navLinksForScroll = document.querySelectorAll('.nav-link[href^="#"]');

  navLinksForScroll.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const targetId = this.getAttribute('href');
      try {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault(); // Only prevent default if it's a valid internal anchor
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          smoothScrollTo(targetPosition, 1000);
        }
        // If targetElement is not found, or href is not an ID, default link behavior will occur
      } catch (e) {
        console.warn('Could not select target for smooth scroll or invalid selector:', targetId, e);
        // Allow default behavior for non-anchor links like contact.html
      }
    });
  });

  // Helper function for smooth scrolling with duration
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // PROJECT SLIDE - SwiperJS Initialization
  const projectSlideElement = document.querySelector('#project-slide');
  if (projectSlideElement && typeof Swiper !== 'undefined') {
    const projectSwiper = new Swiper(projectSlideElement, {
      // Owl Carousel options mapped to SwiperJS:
      // loop: true, -> loop: true
      // center: true, -> centeredSlides: true
      // autoplayHoverPause: false, -> (Swiper) autoplay: { disableOnInteraction: false }
      // autoplay: true, -> (Swiper) autoplay: { delay: 3000 } (adjust delay as needed)
      // margin: 30, -> spaceBetween: 30
      // responsive: { 0: { items:1 }, 768: { items:2 } } -> slidesPerView & breakpoints

      loop: true,
      centeredSlides: true,
      slidesPerView: 1, // Default slides per view (mobile first)
      spaceBetween: 30, // Equivalent to Owl's margin

      autoplay: {
        delay: 3000, // Time in ms
        disableOnInteraction: false, // Corresponds to autoplayHoverPause: false
      },

      breakpoints: {
        // When window width is >= 0px (already covered by slidesPerView: 1)
        // 0: {
        //   slidesPerView: 1,
        //   spaceBetween: 30
        // },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },

      // Optional: Pagination (uncomment if you added HTML for it)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Optional: Navigation arrows (uncomment if you added HTML for it)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    if (!projectSlideElement) console.warn('Swiper target #project-slide not found.');
    if (typeof Swiper === 'undefined') console.warn('Swiper library not found.');
  }

}); // End of DOMContentLoaded

// --- Additional Vanilla JS for Navbar Toggler (THIS SECTION IS LIKELY REDUNDANT WITH BOOTSTRAP 5 JS) ---
/*
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler'); 
  
  if (navbarToggler) {
    const targetSelector = navbarToggler.getAttribute('data-bs-target'); // Updated to data-bs-target
    if (targetSelector) {
      const navbarCollapse = document.querySelector(targetSelector);

      if (navbarCollapse) {
        // Bootstrap 5 JS should handle this automatically via data-bs-toggle="collapse"
        // This manual toggle is a fallback or for non-BS5 setups without jQuery
        // let isBs5Handling = false;
        // if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        //     const instance = bootstrap.Collapse.getInstance(navbarCollapse);
        //     if (instance) isBs5Handling = true;
        // }

        // if (!isBs5Handling) { // Only run if BS5 is not already handling it
        //     navbarToggler.addEventListener('click', function() {
        //       navbarCollapse.classList.toggle('show');
        //       const isExpanded = navbarCollapse.classList.contains('show');
        //       navbarToggler.setAttribute('aria-expanded', String(isExpanded));
        //       if (!isExpanded && !navbarToggler.classList.contains('collapsed')) {
        //         navbarToggler.classList.add('collapsed');
        //       } else if (isExpanded && navbarToggler.classList.contains('collapsed')) {
        //         navbarToggler.classList.remove('collapsed');
        //       }
        //     });
        // }
      } else {
        console.warn('Navbar collapse target not found:', targetSelector);
      }
    } else {
      console.warn('Navbar toggler missing data-bs-target attribute.');
    }
  }
});
*/


    

