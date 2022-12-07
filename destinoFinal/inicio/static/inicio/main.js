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