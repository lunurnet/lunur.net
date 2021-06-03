// State
let navbarOpen = false;

/**
 * function to toggle navbar open and closed based on global state (defaults closed)
 */
function toggleNavbar() {
  const openBtn = document.getElementById('navbarBtnOpen');
  const closeBtn = document.getElementById('navbarBtnClose');
  const mobileMenu = document.getElementById('mobileMenu');

  navbarOpen = !navbarOpen;

  if (navbarOpen) {
    openBtn.classList.remove('block');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    closeBtn.classList.add('block');
    mobileMenu.classList.remove('hidden');
  } else {
    closeBtn.classList.remove('block');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
    openBtn.classList.add('block');
    mobileMenu.classList.add('hidden');
  }
}

/**
 * function to hide/show astronaut
 */
function toggleAstronaut() {
  const astronaut = document.getElementById('astronaut');
  if (window.scrollY === 0) {
    astronaut.classList.add('opacity-0');
  } else {
    astronaut.classList.remove('opacity-0');
  }
}

/**
 * Smooth scrolling for href # links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/**
 * Detect if scrolled away from top of page
 */
window.addEventListener('scroll', function () {
  toggleAstronaut();
}, false);

/**
 * Add onload handler to show/hide astronaut on page load
 */
window.addEventListener('load', function () {
  toggleAstronaut();
});

/**
 * Add toggle navbar function to mobile hamburger menu
 */
document.getElementById('navbarBtnToggleMobile').addEventListener('click', function () {
  toggleNavbar();
});

// export for tests
if (typeof exports !== 'undefined') {
  module.exports = {
      toggleNavbar,
      toggleAstronaut,
  };
}
