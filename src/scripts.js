// State
let navbarOpen = false;

/**
 * function to toggle navbar open and closed based on global state (defaults closed)
 */
function toggleNavbar() {
  const openBtn = document.getElementById("navbarBtnOpen");
  const closeBtn = document.getElementById("navbarBtnClose");
  const mobileMenu = document.getElementById("mobileMenu");

  navbarOpen = !navbarOpen;

  if (navbarOpen) {
    openBtn.classList.remove("block");
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    closeBtn.classList.add("block");
    mobileMenu.classList.remove("hidden");
  } else {
    closeBtn.classList.remove("block");
    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
    openBtn.classList.add("block");
    mobileMenu.classList.add("hidden");
  }
}

/**
 * function to hide/show astronaut
 */
function toggleAstronaut() {
  const astronaut = document.getElementById("astronaut");
  const anchor = document.getElementById("anchorAstronaut");
  if (window.scrollY === 0) {
    astronaut.classList.add("opacity-0");
    anchor.classList.add("cursor-default");
  } else {
    astronaut.classList.remove("opacity-0");
    anchor.classList.remove("cursor-default");
  }
}

function scrollToAbout() {
  var element = document.getElementById("about");
  element.scrollIntoView({ behavior: "smooth" });
}
function scrollToWorks() {
  var element = document.getElementById("works");
  element.scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  var element = document.getElementById("contact");
  element.scrollIntoView({ behavior: "smooth" });
}

function scrollUp() {
  var element = document.getElementById("top");
  element.scrollIntoView({ behavior: "smooth" });
}

/**
 * Add toggle navbar function to mobile hamburger menu
 */
// document
//   .getElementById("navbarBtnToggleMobile")
//   .addEventListener("click", function () {
//     toggleNavbar();
//   });

// export for tests
if (typeof exports !== "undefined") {
  module.exports = {
    toggleNavbar,
    toggleAstronaut,
    scrollUp,
    scrollToAbout,
    scrollToWorks,
    scrollToContact,
  };
}
