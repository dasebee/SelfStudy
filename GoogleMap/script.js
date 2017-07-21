
(function(global, document, google){
 'use strict'
  var map, markers, center_lat = 0, center_lng = 0, location = {lat: -33.91722, lng: 151.23064};
  var map_el = document.getElementById('map');
   var locations =[    
     {lat: -33.91721, lng: 151.22630},
     {lat: -33.91539, lng: 151.22820},
     {lat: -33.91747, lng: 151.22912},
     {lat: -33.91910, lng: 151.22907},
     {lat: -33.91725, lng: 151.23011},
     {lat: -33.91872, lng: 151.23089},
     {lat: -33.91784, lng: 151.23094},
     {lat: -33.91682, lng: 151.23149},
     {lat: -33.91790, lng: 151.23463},
     {lat: -33.91666, lng: 151.23468},
     {lat: -33.916988, lng: 151.233640},
     {lat: -33.91662347903106, lng: 151.22879464019775},
     {lat: -33.916365282092855,lng:  151.22937399734496},
     {lat: -33.91665018901448, lng: 151.2282474695587},
     {lat: -33.919543720969806,lng:  151.23112279762267},
     {lat: -33.91608037421864, lng: 151.23288232673644},
     {lat: -33.91851096391805, lng: 151.2344058214569},
     {lat: -33.91818154739766, lng: 151.2346203981781},
     {lat: -33.91727341958453, lng: 151.23348314155578}];
  
locations.forEach(function(location){
  center_lat+= location.lat;
  center_lng+= location.lng;
})
center_lat/=locations.length;
center_lng/=locations.length;

function initMap(){
  map = new google.maps.Map(map_el, {
    center: {lat: center_lat, lng: center_lng},
    zoom: 16
  });
}

  initMap();

 var markers = locations.map(function(location) {
          return new google.maps.Marker({
            position: location,
            map: map,
            icon: './image/conv50.png'
          });
        });
        
markers.forEach(function(marker){
    marker.addListener('click', function() {
         console.log('click');
        });
})

})(window, window.document, window.google);