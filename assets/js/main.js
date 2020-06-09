// basemap
const map = L.map('map', {
      center: [15.326572, -76.157227],
      zoom: 3
    });
    L.esri.basemapLayer('Oceans').addTo(map);
    L.esri.basemapLayer('OceansLabels').addTo(map);
// basemap

// loader
var myVar;

function loaderFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("pageLoader").style.display = "block";
}
// loader