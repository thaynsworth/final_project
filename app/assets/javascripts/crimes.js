// var map,
//     markers = [];

var map = function drawMap(){
  L.mapbox.accessToken = 'pk.eyJ1IjoidGhheW5zd29ydGgiLCJhIjoiWThsS0FVbyJ9.Ra30ahPRIVNTX9FBGK-hLg';
  map = L.mapbox.map('map', 'thaynsworth.kcl6gjeb', {
    zoomControl: false
  }).setView([40.738, -73.857], 12)
}
