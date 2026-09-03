// Slider for BLog Details Page Strat

// Slider for BLog Details Page Strat

function initSlider() {
  if (typeof jQuery === 'undefined') return;
  var $ = jQuery;
  
  // Check if slider container exists
  if ($('.related-blog-slider').length && !$('.related-blog-slider').hasClass('slick-initialized')) {
    $('.related-blog-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slick-prev-custom'),
      nextArrow: $('.slick-next-custom'),
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSlider);
} else {
  initSlider();
}

// Slider for BLog Details Page END


// Navbar Header Strat
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Mobile Menu Click Handling
  if (hamburger && navLinks) {
    const newHamburger = hamburger.cloneNode(true);
    hamburger.parentNode.replaceChild(newHamburger, hamburger);
    
    newHamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
  }

  // Custom Dropdown Handling
  const dropdowns = document.querySelectorAll('.custom-dropdown');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.dropdown-trigger');

    if (trigger) {
      const newTrigger = trigger.cloneNode(true);
      trigger.parentNode.replaceChild(newTrigger, trigger);

      newTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        dropdowns.forEach((other) => {
          if (other !== dropdown) other.classList.remove('is-open');
        });

        dropdown.classList.toggle('is-open');
      });
    }
  });

  // Close drop/menus on document click
  document.addEventListener('click', (e) => {
    const currentHamburger = document.getElementById('hamburger');
    if (navLinks && !navLinks.contains(e.target) && (!currentHamburger || !currentHamburger.contains(e.target))) {
      navLinks.classList.remove('open');
    }
    dropdowns.forEach((d) => d.classList.remove('is-open'));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

// Navbar Header END











