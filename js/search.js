// Theme toggle (dark mode by default)
const themeToggle = document.getElementById('theme-toggle');

function getStoredTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) { }
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
  }
}

applyTheme(getStoredTheme() === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const nextTheme = isLight ? 'dark' : 'light';
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navbarMenu = document.getElementById('navbar-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbarMenu.classList.remove('active');
  });
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
}
updateHeaderHeight();
window.addEventListener('resize', updateHeaderHeight);

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