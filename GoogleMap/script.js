
(function(global, document, google){
 'use strict'
  var map, marker, location = {lat: -33.91722, lng: 151.23064};
  var map_el = document.getElementById('map');
  function initMap(){
    map = new google.maps.Map(map_el, {
      center: location,
      zoom: 17
    });
    marker = new google.maps.Marker({
      position : location,
      map : map
    });
  }

 initMap();
//  var features = [
//           {
//             position: {lat: -33.91721, lng: 151.22630},
//             type: 'info'
//           }, {
//             position: {lat: -33.91539, lng: 151.22820},
//             type: 'info'
//           }, {
//             position: {lat: -33.91747, lng: 151.22912},
//             type: 'info'
//           }, {
//             position: {lat: -33.91910, lng: 151.22907},
//             type: 'info'
//           }, {
//             position: {lat: -33.91725, lng: 151.23011},
//             type: 'info'
//           }, {
//             position: {lat: -33.91872, lng: 151.23089},
//             type: 'info'
//           }, {
//             position: {lat: -33.91784, lng: 151.23094},
//             type: 'info'
//           }, {
//             position: {lat: -33.91682, lng: 151.23149},
//             type: 'info'
//           }, {
//             position: {lat: -33.91790, lng: 151.23463},
//             type: 'info'
//           }, {
//             position: {lat: -33.91666, lng: 151.23468},
//             type: 'info'
//           }, {
//             position: {lat: -33.916988, lng: 151.233640},
//             type: 'info'
//           }, {
//             position:{ lat: -33.91662347903106, lng: 151.22879464019775},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.916365282092855,lng:  151.22937399734496},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.91665018901448, lng: 151.2282474695587},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.919543720969806,lng:  151.23112279762267},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.91608037421864, lng: 151.23288232673644},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.91851096391805, lng: 151.2344058214569},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.91818154739766, lng: 151.2346203981781},
//             type: 'parking'
//           }, {
//             position:{ lat: -33.91727341958453, lng: 151.23348314155578},
//             type: 'library'
//           }
//         ];

//       function addMarker(feature) {
//           var marker = new google.maps.Marker({
//             position: feature.position,
//             icon: icons[feature.type].icon,
//             map: map
//           });
//         }

//      for (var i = 0, feature; feature = features[i]; i++) {
//           addMarker(feature);
//       }
  

})(window, window.document, window.google);