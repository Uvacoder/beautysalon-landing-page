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
