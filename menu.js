const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  const menuIsOpen = menu.classList.contains("menu-is-open");
  if (menuIsOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

const openMenu = () => {
  menu.classList.add("menu-is-open");
};
const closeMenu = () => {
  menu.classList.remove("menu-is-open");
};
