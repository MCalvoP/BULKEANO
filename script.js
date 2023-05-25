const menuContainer = document.querySelector('.menu-container');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close-icon');

let isOpen = false;

hamburgerMenu.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);

function toggleMenu() {
  if (isOpen) {
    menu.style.left = '-200px';
    hamburgerMenu.classList.remove('open');
  } else {
    menu.style.left = '0';
    hamburgerMenu.classList.add('open');
  }

  isOpen = !isOpen;
}

function closeMenu(event) {
  if (!menuContainer.contains(event.target) && isOpen) {
    menu.style.left = '-200px';
    hamburgerMenu.classList.remove('open');
    isOpen = false;
  }
}

