const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const menuHeader = document.querySelector('.menu-header');
const lineaUno = document.querySelector('.menu-hamburguesa__linea1');
const lineaDos = document.querySelector('.menu-hamburguesa__linea2');
const lineaTres = document.querySelector('.menu-hamburguesa__linea3');

const menuAnimado = () => {
  lineaUno.classList.toggle('activemenu-hamburguesa__linea1');
  lineaDos.classList.toggle('activemenu-hamburguesa__linea2');
  lineaTres.classList.toggle('activemenu-hamburguesa__linea3');
  menuHeader.classList.toggle('menu-headeractive');
}

menuHamburguesa.addEventListener('click', menuAnimado);

// if (window.innerWidth >= 1024) {
//   menuHamburguesa.classList.add('inactive');
//   menuHeader.classList.remove('inactive');
// } else {
//   menuHamburguesa.classList.remove('inactive');
//   menuHeader.classList.add('inactive');
// }

// window.onresize = () => {
//   if (window.innerWidth >= 1024 && !menuHamburguesa.classList.contains('inactive')) {
//     menuHamburguesa.classList.add('inactive');
//   }
//   if (window.innerWidth < 1024 && menuHamburguesa.classList.contains('inactive')) {
//     menuHamburguesa.classList.remove('inactive');
//   }
//   if (window.innerWidth >= 1024 && menuHeader.classList.contains('inactive')) {
//     menuHeader.classList.remove('inactive');
//   }
//   if (window.innerWidth < 1024 && !menuHeader.classList.contains('inactive')) {
//     menuHeader.classList.add('inactive');
//   }
// }
