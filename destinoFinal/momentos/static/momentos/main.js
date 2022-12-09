const mensaje = document.querySelector('#distancia');
const contenedorMensaje = document.querySelector('#mensajeContenedor');
const btn = document.querySelector('#btn');
const precio = document.querySelector('#precio');
const puntos = [];
const PRECIO_POR_METRO = 5;

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const toRadian = (degree) => {
  return degree*Math.PI/180;
}

const obtenerDistancia = (array) => {
  let lon1 = toRadian(array[0][0]);
  let lat1 = toRadian(array[0][1]);
  let lon2 = toRadian(array[1][0]);
  let lat2 = toRadian(array[1][1]);

  let deltaLat = lat2 -  lat1;
  let deltaLon = lon2 - lon1;

  let a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
  let c = 2 * Math.asin(Math.sqrt(a));
  let EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS * 1000;
}

map.on('click', function(e){
  const { lat, lng } = e.latlng;
  if (puntos.length == 2) {
    console.log('entro')
    mensaje.innerText = 'Demasiados puntos';
  } else {
    L.marker([lat, lng]).addTo(map);
    puntos.push([lat, lng])
  }
  if (puntos.length === 2 && mensaje.childNodes[0].textContent !== 'Demasiados puntos') {
    let d = obtenerDistancia(puntos)
    mensaje.innerText = d;
    precio.innerText = `$${d * PRECIO_POR_METRO}`;
  }
});

btn.addEventListener('click', () => {
  puntos.pop();
  puntos.pop();
  mensaje.innerText = '0';
  precio.innerText = '$00';
})