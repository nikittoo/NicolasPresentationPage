// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbar-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbarMenu.classList.remove('active');
  });
});

// Navbar hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 50) {
    // Near the top of the page - always show header
    header.classList.remove('hide');
  } else if (currentScroll > lastScrollTop) {
    // Scrolling DOWN - hide header
    header.classList.add('hide');
  } else {
    // Scrolling UP - show header
    header.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});