
(function(global, document, google){
 'use strict'
  var map, markers, center_lat = 0, center_lng = 0, location = {lat: -33.91722, lng: 151.23064};
  var map_el = document.getElementById('map');
   var locations =[    
     {lat: -33.91721, lng: 151.22630, price: '293,844' },
     {lat: -33.91539, lng: 151.22820, price: '99,327'},
     {lat: -33.91747, lng: 151.22912, price: '317,4847'},
     {lat: -33.91910, lng: 151.22907, price: '152,873'},
     {lat: -33.91725, lng: 151.23011, price: '573,217'},
     {lat: -33.91872, lng: 151.23089, price: '93,474'},
     {lat: -33.91784, lng: 151.23094, price: '94,797'},
     {lat: -33.91682, lng: 151.23149, price: '328,971'},
     {lat: -33.91790, lng: 151.23463, price: '237,124'},
     {lat: -33.91666, lng: 151.23468, price: '487,457'},
     {lat: -33.916988, lng: 151.233640, price: '214,735'},
     {lat: -33.91662347903106, lng: 151.22879464019775, price: '387,574'},
     {lat: -33.916365282092855,lng:  151.22937399734496, price: '147,216'},
     {lat: -33.91665018901448, lng: 151.2282474695587, price: '138,754'},
     {lat: -33.919543720969806,lng:  151.23112279762267, price: '104,857'},
     {lat: -33.91608037421864, lng: 151.23288232673644, price: '931,874'},
     {lat: -33.91851096391805, lng: 151.2344058214569, price: '587,122'},
     {lat: -33.91818154739766, lng: 151.2346203981781, price: '957,265'},
     {lat: -33.91727341958453, lng: 151.23348314155578, price: '479,814'}];
  
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
            position: {lat: location.lat, lng: location.lng },
            map: map,
            label: location.price,
            icon: './image/conv50.png'
          });
        });

markers.forEach(function(marker){
    marker.addListener('click', function() {
         console.log('click');
        });
})

})(window, window.document, window.google);