const menuBtn = document.querySelector(".second--navbar__menu--icon");
const navbar = document.querySelector(".nav--links");
const closeMenuBtn = document.querySelector(".close--menu");
const overlay = document.querySelector(".overlay");
const navbarMenu = document.querySelector(".navbar--menu--icon");
const priceBox = document.querySelector(".price--box");

priceBox.addEventListener("click", (e) => {
  const btn = e.target.closest(".price--btn");
  if (!btn) return;

  btn.classList.toggle("price--btn--active");
  document
    .querySelector(`.cart--info__${btn.dataset.btn}`)
    .classList.toggle("active--heading--color");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("nav--links--active");
  overlay.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav--links--active");
  overlay.style.display = "none";
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("nav--links--active");
  overlay.style.display = "block";
});

navbarMenu.addEventListener("click", () => {
  navbar.classList.toggle("nav--links--active");
  overlay.style.display = "block";
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
