$(document).ready($.getJSON("http://apidev.accuweather.com/currentconditions/v1/55488.json?apikey=HackuWeather2016", function(weatherData){ //don't bother the apikey is expired
	var weatherIcon = weatherData[0].WeatherIcon;
	console.log(weatherIcon);
	$("#weather-data").append("\
		<b>hi</b>"
		);
});

$.getJSON("https://api.spotify.com/v1/search?query=jazz&offset=30&limit=10&type=playlist", function(object){
	var link = object["playlists"].href;
	console.log(link);
	console.log("hi");

);



