var map,
    markers = [];

typeData = {
	'MURDER': {color: '#d11141'},
	'RAPE': {color: '#00b159'},
	'ROBBERY': {color: '#00aedb'},
	'FELONY ASSAULT': {color: '#f37735'},
	'BURGLARY': {color: '#ffc425'},
	'GRAND LARCENY': {color: '#be29ec'},
	'GRAND LARCENY OF MOTOR VEHICLE': {color: '#ff66cc'}
};

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }  

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

function drawMap(){
  L.mapbox.accessToken = 'pk.eyJ1IjoidGhheW5zd29ydGgiLCJhIjoiWThsS0FVbyJ9.Ra30ahPRIVNTX9FBGK-hLg';
  map = L.mapbox.map('map', 'thaynsworth.kcl6gjeb', {
    zoomControl: false
  }).setView([40.7127, -74.0059], 10)
}

function resetMap(){
	console.log('reseting map!!!!');
  $(markers).each(function(idx, marker){
    map.removeLayer(marker);
  });
  markers = [];
}

function drawData(data){
	resetMap();
	$.each(data, function(idx, crime){
		var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: typeData[crime.name]['color'],
				radius: 5
		})	
		.bindPopup(crime.name)
		.addTo(map);
		markers.push(marker);

	});
}

function getData(options){
	var options   = options || crimeOptions()
  var name      = options.name || ""
	console.log('about to fetch data')
	$.ajax({
		url: '/crimes/search', 
		data: {
			name: name
		},
		dataType: 'JSON', 
		method: 'GET', 
		success: function(data){
			console.log('finished with data')
			drawData(data);
		}
	});
}

function crimeOptions(){
  var options = {};
  options.name = $('select#name').val();
  return options
}

function setHandlers(){
  $("select").on("change", function(e){
    getData();
  });
}





console.log('yoooooooooooo')
