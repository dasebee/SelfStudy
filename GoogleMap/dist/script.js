//To do 
/**
 * 초기 설정시의 zoom 값, 위치 범위가 넓으면 zoom을 작게 하도록. 
 * 숙소 포커스 되었을 때 지도의 마커의 색이 바뀌는 것(마우스 오버는 OK). 
 * infowindow의 스타일!!!!
 * infowindow가 표시될 때. 마커가 사라지고. 레이블도 사라지고. 
 * 표시된 info를 누르면 해당 방의 상세 페이지로 이동. 
 * 상세 페이지의 지도는 대략적인 범위만 알려주는 동그라미만 표시함. 
 * 레이블 오버랩 해결 필요.
 * 
 * 상세 페이지의 지도인지 숙소 리스트의 지도인지에 따라서 수행하는 것이 다름, 호스팅도 지도 있다. 
 * 
 * 숙소의 데이터와 지도의 데이터 연결. => db가 어떻게 되어있느냐아아아.
 * 
 **/



(function(global, document, google){
 'use strict'
  var map, markers, center_lat = 0, center_lng = 0, location = {lat: -33.91722, lng: 151.23064};
  var map_el = document.getElementById('map'); //마운트할 위치 찾기
  var rooms = document.querySelectorAll('li'); //숙소 리스트
  var locations =[    
    // {lat: -33.91721, lng: 151.22630, price: '293,844' },
    // {lat: -33.91539, lng: 151.22820, price: '99,327'},
    // {lat: -33.91747, lng: 151.22912, price: '317,4847'},
    // {lat: -33.91910, lng: 151.22907, price: '152,873'},
    // {lat: -33.91725, lng: 151.23011, price: '573,217'},
    // {lat: -33.91872, lng: 151.23089, price: '93,474'},
    // {lat: -33.91784, lng: 151.23094, price: '94,797'},
    // {lat: -33.91682, lng: 151.23149, price: '328,971'},
    // {lat: -33.91790, lng: 151.23463, price: '237,124'},
    // {lat: -33.91666, lng: 151.23468, price: '487,457'},
    // {lat: -33.916988, lng: 151.233640, price: '214,735'},
    {lat: -33.91662347903106, lng: 151.22879464019775, price: '387,574'},
    {lat: -33.916365282092855,lng:  151.22937399734496, price: '147,216'},
    {lat: -33.91665018901448, lng: 151.2282474695587, price: '138,754'},
    {lat: -33.919543720969806,lng:  151.23112279762267, price: '104,857'},
    {lat: -33.91608037421864, lng: 151.23288232673644, price: '931,874'},
    {lat: -33.91851096391805, lng: 151.2344058214569, price: '587,122'},
    {lat: -33.91818154739766, lng: 151.2346203981781, price: '957,265'},
    {lat: -33.91727341958453, lng: 151.23348314155578, price: '1,479,814'}];
  
//locations의 위치 데이터 값의 평균을 구해서 맵의 초기 센터위치로 지정.      
locations.forEach(function(location){
  center_lat+= location.lat;
  center_lng+= location.lng;
})
center_lat/=locations.length;
center_lng/=locations.length;

//맵 초기 설정. 
function initMap(){
  map = new google.maps.Map(map_el, {
    center: new google.maps.LatLng(center_lat, center_lng),
    zoom: 16
  });
}
initMap();

  
// locations 배열에서 값을 가져와서 마커 설정. 
 var markers = locations.map(function(location) {
    return new MarkerWithLabel({
      position: new google.maps.LatLng(location.lat, location.lng),
      draggable: false,
      raiseOnDrag: true,
      map: map,
      labelContent: location.price,
      labelAnchor: new google.maps.Point(20, 30),
      labelClass: "map-labels", // the CSS class for the label
      icon: ' '
    })
  });


//마커 클릭했을 때 윈도우에 표시될 콘텐츠
var infowindow = new google.maps.InfoWindow({
    content: '', //content는 marker 클릭시 추가
    maxWidth: 240 //정보 창의 최대 너비
 });
//각각의 마커에 정보창을 여는 이벤트 추가.         
markers.forEach(function(marker,index){
  marker.addListener('click', function() {
    infowindow.setContent(rooms[index].innerHTML);
    infowindow.open(map, marker); //정보창을 map의 marker 위치에서 연다. 
  });
})

//지도 클릭시 정보창 닫기
google.maps.event.addListener(map, 'click', function() {
  infowindow.close()
});



// 숙소 리스트에 접근하였을 때, 마커의 색변경
rooms.forEach(function(room, index){
  room.addEventListener('mouseover', setActiveColor.bind(null,index)) 
  room.addEventListener('mouseleave', setDeactiveColor.bind(null,index))
  room.addEventListener('focus', setActiveColor.bind(null,index))
  room.addEventListener('blur', setDeactiveColor.bind(null,index))
})
// 마커색 변경하는 함수 
function setActiveColor(index){
  markers[index].labelClass="label-color-change";
  markers[index].label.setStyles() // Force label to redraw (makes update visible)
}
function setDeactiveColor(index){
  markers[index].labelClass="map-labels";
  markers[index].label.setStyles()
}
})(window, window.document, window.google);