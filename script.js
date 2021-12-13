const toggleMenu = document.querySelectorAll('.toggle-menu');
const menuOpen = document.querySelector('.menu-open');
const nav = document.querySelector('header');

toggleMenu.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});

const navLinks = document.querySelectorAll('.menu a');

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    nav.classList.remove('show');
  });
});
