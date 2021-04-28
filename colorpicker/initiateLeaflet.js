//import * as L from 'https://laurens-vb.github.io/node_modules/leaflet/Leaflet.js';

console.log("mjef me name");

var map = L.map('map').setView([50.641111, 4.668056], 1);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=tLle2wcpHPrfuS2ObIb7',{
  tileSize: 512,
  zoomOffset: -1,
  minZoom: 0,
  attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
  crossOrigin: true
}).addTo(map);
     
  addMarkerToMap(50.641111,4.668056,"BE",map);
  addMarkerToMap(51,10,"DE",map);
  addMarkerToMap(47,2,"FR",map);

function addMarkerToMap(lat,lng,name,map)
  {
      L.marker([lat,lng]).addTo(map).on('click', () =>
      {
          console.log(name);
      });
  }

  console.log("HET ZOU MOETEN WERKEN");