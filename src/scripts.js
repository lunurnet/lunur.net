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

// export for tests
if (typeof exports !== "undefined") {
  module.exports = {
    // toggleNavbar,
    toggleAstronaut,
    scrollUp,
    scrollToAbout,
    scrollToWorks,
    scrollToContact,
  };
}
