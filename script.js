const toggleMenu = document.querySelectorAll('.toggle-menu');
const nav = document.querySelector('header');

toggleMenu.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});

const navLinks = document.querySelectorAll('.menu a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});

const headerNav = document.querySelector('.nav');
const headerHeight = headerNav.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= headerHeight) {
    headerNav.classList.add('shadow-scroll');
  } else {
    headerNav.classList.remove('shadow-scroll');
  }
});

// Swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 5,

  autoplay: {
    delay: 5000,
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

//
