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
};

console.log('scripts loaded');
