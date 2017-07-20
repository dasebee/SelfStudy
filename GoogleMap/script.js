(function(global){
  'use strict'

    var doc = document,
    win = window,
    body = doc.body;

  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
    maxZoom: 18,
    attribution: '',
    id: 'mapbox.streets'
  }).addTo(map);

  var popup = L.popup();

  var coords = [];
  var markers = [];

  var items = doc.getElementsByClassName('items__item');

  setMap();

  function setMap(){
    for (var i = 0; i < items.length; i++) {
      (function(i){
        var icon = L.divIcon({className: 'map__icon', html: '<span>'+items[i].getElementsByTagName('h3')[0].textContent+'</span>'});

        coords[i] = [items[i].getAttribute('data-lat'), items[i].getAttribute('data-lon')];
        markers[i] = L.marker(coords[i], {icon: icon}).addTo(map);

        markers[i].on('click', function(e){
          onMapClick(e, i);
        });
        items[i].setAttribute('data-id', i);
        items[i].addEventListener('click', onItemClick, true);
      })(i);
    }

    map.fitBounds(coords);
  }

  function onMapClick(e, i) {
    var item = items[i];
    
    removeSelected();
    
    win.scrollTo(0, item.offsetTop);
    item.classList.add('is-selected');
    map.panTo(e.latlng);
    popup.setLatLng(e.latlng);
    popup.setContent('<div class="popup">'+item.innerHTML+'</div>');
    popup.openOn(map);
  }

  function onItemClick(e) {
    var el = e.target;
    while (el && el.tagName !== 'LI') {
      el = el.parentNode;
    }
    removeSelected();
    el.classList.add('is-selected');
    map.panTo(coords[el.getAttribute('data-id')]);
  }

  function removeSelected(){
    var selected = doc.getElementsByClassName('is-selected')[0];
    if (!selected) return false;
    selected.classList.remove('is-selected');
  }

})//(window);
;
var map;
var map_el = document.getElementById('map');
function initMap(){
  map = new google.maps.Map(map_el, {
    center: {lat: -33.91722, lng: 151.23064},
    zoom: 17
  });


}

 var features = [
          {
            position: {lat: -33.91721, lng: 151.22630},
            type: 'info'
          }, {
            position: {lat: -33.91539, lng: 151.22820},
            type: 'info'
          }, {
            position: {lat: -33.91747, lng: 151.22912},
            type: 'info'
          }, {
            position: {lat: -33.91910, lng: 151.22907},
            type: 'info'
          }, {
            position: {lat: -33.91725, lng: 151.23011},
            type: 'info'
          }, {
            position: {lat: -33.91872, lng: 151.23089},
            type: 'info'
          }, {
            position: {lat: -33.91784, lng: 151.23094},
            type: 'info'
          }, {
            position: {lat: -33.91682, lng: 151.23149},
            type: 'info'
          }, {
            position: {lat: -33.91790, lng: 151.23463},
            type: 'info'
          }, {
            position: {lat: -33.91666, lng: 151.23468},
            type: 'info'
          }, {
            position: {lat: -33.916988, lng: 151.233640},
            type: 'info'
          }, {
            position:{ lat: -33.91662347903106, lng: 151.22879464019775},
            type: 'parking'
          }, {
            position:{ lat: -33.916365282092855,lng:  151.22937399734496},
            type: 'parking'
          }, {
            position:{ lat: -33.91665018901448, lng: 151.2282474695587},
            type: 'parking'
          }, {
            position:{ lat: -33.919543720969806,lng:  151.23112279762267},
            type: 'parking'
          }, {
            position:{ lat: -33.91608037421864, lng: 151.23288232673644},
            type: 'parking'
          }, {
            position:{ lat: -33.91851096391805, lng: 151.2344058214569},
            type: 'parking'
          }, {
            position:{ lat: -33.91818154739766, lng: 151.2346203981781},
            type: 'parking'
          }, {
            position:{ lat: -33.91727341958453, lng: 151.23348314155578},
            type: 'library'
          }
        ];

    //   function addMarker(feature) {
    //       var marker = new google.maps.Marker({
    //         position: feature.position,
    //         icon: icons[feature.type].icon,
    //         map: map
    //       });
    //     }

    //  for (var i = 0, feature; feature = features[i]; i++) {
    //       addMarker(feature);
    //   }