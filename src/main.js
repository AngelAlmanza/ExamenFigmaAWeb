const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuHeader = document.querySelector('.menu-header');

if (window.innerWidth >= 1024) {
  menuHamburguesa.classList.add('inactive');
  menuHeader.classList.remove('inactive');
} else {
  menuHamburguesa.classList.remove('inactive');
  menuHeader.classList.add('inactive');
}

window.onresize = () => {
  if (window.innerWidth >= 1024 && !menuHamburguesa.classList.contains('inactive')) {
    menuHamburguesa.classList.add('inactive');
  }
  if (window.innerWidth < 1024 && menuHamburguesa.classList.contains('inactive')) {
    menuHamburguesa.classList.remove('inactive');
  }
  if (window.innerWidth >= 1024 && menuHeader.classList.contains('inactive')) {
    menuHeader.classList.remove('inactive');
  }
  if (window.innerWidth < 1024 && !menuHeader.classList.contains('inactive')) {
    menuHeader.classList.add('inactive');
  }
}
