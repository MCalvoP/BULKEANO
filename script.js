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

document.getElementById('scroll-to-top').addEventListener('click', function(event) {
  event.preventDefault();
  const duration = 500; // Duración de la animación en milisegundos
  const scrollHeight = window.pageYOffset;
  const scrollStep = -scrollHeight / (duration / 15);

  const scrollAnimation = setInterval(function() {
    if (window.pageYOffset === 0) {
      clearInterval(scrollAnimation);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
});

