// Slider for BLog Details Page Strat

jQuery(document).ready(function ($) {
  // Check if slider container exists
  if ($('.related-blog-slider').length) {
    $('.related-blog-slider').slick({
      dots: false,
      infinite: true,
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
});

// Slider for BLog Details Page END


// Navbar Header Strat
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Mobile Menu Click Handling
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });
  }

  // Custom Dropdown Handling
  const dropdowns = document.querySelectorAll('.custom-dropdown');

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.dropdown-trigger');

    if (trigger) {
      trigger.addEventListener('click', (e) => {
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
    if (navLinks && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
    dropdowns.forEach((d) => d.classList.remove('is-open'));
  });
});

// Navbar Header END











