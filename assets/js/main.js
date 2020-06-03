const map = L.map('map', {
      center: [15.326572, -76.157227],
      zoom: 3
    });
    L.esri.basemapLayer('Oceans').addTo(map);
    L.esri.basemapLayer('OceansLabels').addTo(map);