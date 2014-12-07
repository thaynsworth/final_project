var map,
    markers = [];

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
  }).setView([40.738, -73.857], 11)
}

function resetMap(){
	console.log('reseting map!!!!');
	// $('g').each(function(gTag){
	// 	map.removeLayer(gTag);
	// })

	// $.each(markers, function(marker){
	// 	map.removeLayer(marker);
	// })
  $(markers).each(function(idx, marker){
    map.removeLayer(marker);
  });
  markers = [];
}

function drawData(data){
	resetMap();
	$.each(data, function(idx, crime){
		if (crime.name == "ROBBERY"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "blue",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "GRAND LARCENY"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "green",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "MURDER"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "red",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "RAPE"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "purple",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "FELONY ASSAULT"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "yellow",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "BURGLARY"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "orange",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
		if (crime.name == "GRAND LARCENY OF MOTOR VEHICLE"){
			var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
				color: "lightgreen",
				radius: 4
			})
			.bindPopup(crime.name)
			.addTo(map);
			markers.push(marker);
		}
	});
}

function getData(options){
	var options   = options || crimeOptions()
  var name      = options.name || ""
	console.log('about to fetch data')
	$.ajax({
		url: '/crimes?name='+encodeURI(name), 
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

$(function(){
  drawMap();
  getData();
  setHandlers();
  map.on('click', onMapClick); 
})



console.log('yoooooooooooo')
