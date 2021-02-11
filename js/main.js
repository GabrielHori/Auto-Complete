 // key: 'pk.eyJ1IjoiaG9yaXpvbmZ4IiwiYSI6ImNra3duN3k2djJjMWkydnMxZHk1OGs1M2sifQ.vK-KV0CgJIYZcmOqujU9wQ', 
var map = L.map('map').setView([43.300, 5.400], 10);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetmap</a> contributors'
  }).addTo(map);
  
var searchControl = L.esri.Geocoding.geosearch().addTo(map);
// j'ajoute un group pour le search control
  var results = L.layerGroup.addTo(map);

  searchControl.on('results', function(data){
    results.clearLayers();

    for(var i= data.results.length  - 1; i>=0; i--){
      results.addLayer(L.marker(data.results[i].latlng));

    }
  })
