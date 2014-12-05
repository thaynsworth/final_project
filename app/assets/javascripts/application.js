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

function getData(){
	$.ajax({
		url: '/crimes', 
		dataType: 'JSON', 
		method: 'GET', 
		success: function(data){
			drawData(data);
		}
	});
}

function drawData(data){
	$.each(data, function(idx, crime){
		var marker = new L.CircleMarker([crime.latitude, crime.longitude],{
			color: "red",
			radius: 10
		})
		.addTo(map);
		markers.push(marker);
	})
}

$(function(){
  drawMap();
  getData();
})



console.log('yoooooooooooo')



