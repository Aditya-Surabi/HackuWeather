$(document).ready(function(){

	// get json object for accuweather api
	$.getJSON("http://apidev.accuweather.com/currentconditions/v1/55488.json?apikey=HackuWeather2016", function(weatherData){ //don't bother the apikey is expired
		var weatherIcon = weatherData[0].WeatherIcon;
		console.log(weatherIcon);
		console.log("");
			}); // close weatherdata function

	// write weather data to html	
	$("#weather-data").append("\
	<b>weather data</b>"
	);

// ------------------------------------------------------------------------------------------------------------------- //

	// get json object for audio api
	$.getJSON("https://api.spotify.com/v1/search?query=jazz&offset=30&limit=10&type=playlist", function(object){
		var link = object["playlists"].href;
		console.log(link);
		console.log("shout out to the homies in da console!");

		}); //close audio function

	// write audio data to html	
	$("#audio-player").append("\
	<iframe class='sticky-bottom' src='https://8tracks.com/mixes/672112/player_v3_universal/' width='300' height='250' style='border: 0 none;''></iframe>\
	");

}); //close function main


	







