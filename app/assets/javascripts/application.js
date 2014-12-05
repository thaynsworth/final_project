// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var map,
    markers = [];

function drawMap(){
  L.mapbox.accessToken = 'pk.eyJ1IjoidGhheW5zd29ydGgiLCJhIjoiWThsS0FVbyJ9.Ra30ahPRIVNTX9FBGK-hLg';
  map = L.mapbox.map('map', 'thaynsworth.kcl6gjeb', {
    zoomControl: false
  }).setView([40.738, -73.857], 12)
}

function getData(options){
	var options   = options || crimeOptions()
  var name      = options.name || ""
	console.log('about to fetch data')
	$.ajax({
		url: '/crimes?name='+name, 
		dataType: 'JSON', 
		method: 'GET', 
		success: function(data){
			console.log('finished with data')
			drawData(data);
		}
	});
}

function resetMap(){
	console.log('reseting map!!!!');
	$('g').each(function(gTag){
		map.removeLayer(gTag);
	})

	// $.each(markers, function(marker){
	// 	map.removeLayer(marker);
	// })
  // $(markers).each(function(idx, marker){
  //   map.removeLayer(marker);
  // });
  markers = [];
}

function drawData(data){
	resetMap();
	$.each(data, function(idx, crime){
		var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
			color: "red",
			radius: .5
		})
		.bindPopup(crime.name)
		.addTo(map);
		markers.push(marker);
	})
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
})



console.log('yoooooooooooo')



