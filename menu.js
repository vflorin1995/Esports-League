const menuButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.closeButton');
const menuList = document.querySelector('.menuList');
const homeButton = document.querySelector('.homeButton');

menuButton.addEventListener('click', () => {
  menuList.classList.add('menuOpen');
  homeButton.classList.remove('displayNone');
});

closeButton.addEventListener('click', () => {
  menuList.classList.remove('menuOpen');
  homeButton.classList.add('displayNone');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuList.classList.remove('menuOpen');
    homeButton.classList.add('displayNone');
  }
});