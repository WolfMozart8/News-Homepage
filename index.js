const burger = document.getElementById("burger");
const mobileNav = document.querySelector(".mobile");
const overlay = document.getElementById("overlay");

burger.addEventListener("click", burgerActive)

function burgerActive () {
   this.classList.toggle("is-active");
   mobileNav.classList.toggle("is-mobile");
   overlay.classList.toggle("is-overlay");
}