const $btnOpen = document.querySelector(".btnOpenHamburger");
const $btnClose = document.querySelector(".btnCloseHamburger");
const $navLinks = document.querySelector(".navLinks");

$btnOpen.addEventListener("click", () => {
  $navLinks.classList.toggle("mobileMenu");
});

$btnClose.addEventListener("click", () => {
  $navLinks.classList.toggle("mobileMenu");
});


console.log($btnOpen,$btnClose)