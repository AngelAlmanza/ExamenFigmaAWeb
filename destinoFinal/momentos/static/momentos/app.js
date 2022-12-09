function init() {
  const LAT = 24.14142803893573;
  const LNG = -110.31353050730529;
  const map = L.map('map').setView([LAT, LNG], 13);
  const modal = new bootstrap.Modal("#staticBackdrop", {
      focus: true,
      keyboard: false,
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var latlngs = [
      [24.10308242665393, -110.31632217525247],
      [24.128890363793435, -110.33411586369584]
  ];
  var polyline = L.polyline(latlngs, { color: 'green' }).addTo(map);
  var distance = getDistance([24.10308242665393, -110.31632217525247],[24.128890363793435, -110.33411586369584]);
  distance = round(distance/1000);
  document.getElementById("distancia").innerText = "La distancia que hay entre los puntos es de " + distance + " Km."

  map.fitBounds(polyline.getBounds());
  map.on("click", function (e) {
      const {
          latlng: { lat, lng }
      } = e;
      console.log(lat, lng);
      L.marker([lat, lng]).addTo(map).bindPopup("Esta es una marca");
      document.querySelector('#latHidden').value = lat;
      document.querySelector('#lngHidden').value = lng;
      modal.show();
  });
  L.marker([24.10308242665393, -110.31632217525247]).addTo(map)
      .bindPopup('DASC')
      .openPopup();
  str = document.querySelector('#momentosData').textContent;
  data = parseData(str);
  data.forEach(function (d) {
      const {
          fields: {
              content, lat, lng
          },
      } = d;
      L.marker([lat, lng]).addTo(map).bindPopup(content);
  });
}
function parseData(str) {
  return JSON.parse(JSON.parse(str))
}
window.addEventListener('load', init);

//Marca DASC
function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}
function getDistance(origin, destination) {
  // return distance in meters
  var lon1 = toRadian(origin[1]),
      lat1 = toRadian(origin[0]),
      lon2 = toRadian(destination[1]),
      lat2 = toRadian(destination[0]);

  var deltaLat = lat2 - lat1;
  var deltaLon = lon2 - lon1;

  var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
  var c = 2 * Math.asin(Math.sqrt(a));
  var EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
  return degree*Math.PI/180;
}