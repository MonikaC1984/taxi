const menuOverlay = document.querySelector(".mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__btn");
const openMenuBtn = document.querySelector(".nav__btn");

openMenuBtn.addEventListener("click", (e) => {
  menuOverlay.classList.remove("d-none");
});

closeMenuButton.addEventListener("click", (e) => {
  menuOverlay.classList.add("d-none");
});

// //(() => {
//   const mobileMenu = document.querySelector(".js-menu-container");
//   const openMenuBtn = document.querySelector(".js-open-menu");
//   const closeMenuBtn = document.querySelector(".js-close-menu");
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute("aria-expanded") === "true" || false;
//     openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
//     mobileMenu.classList.toggle("is-open");
//     const scrollLockMethod = !isMenuOpen
//       ? "disableBodyScroll"
//       : "enableBodyScroll";
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   openMenuBtn.addEventListener("click", toggleMenu);
//   closeMenuBtn.addEventListener("click", toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove("is-open");
//     openMenuBtn.setAttribute("aria-expanded", false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
