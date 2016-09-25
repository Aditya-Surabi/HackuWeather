$(document).ready(function(){
	var weatherText;
	// get json object for accuweather api
	$.getJSON("http://apidev.accuweather.com/currentconditions/v1/55488.json?apikey=HackuWeather2016", function(weatherData){ //don't bother the apikey is expired
		var weatherIcon = weatherData[0].WeatherIcon;
		weatherText = weatherData[0].WeatherText;
		var isDay = weatherData[0].IsDayTime;
		var temperature = weatherData[0].Temperature["Metric"]["Value"];
		var mobileLink = weatherData[0].MobileLink;

		if(isDay){
			var night_or_day = "day";
		}else{
			var night_or_day = "night";
		}

		console.log("Ayy console squad.");
		var mood = textToMood(weatherText);
		$('#aud').prop('src', mood);

	// write weather data to html	
	$("#weather-data").append("\
		<h2>It's " + temperature + " &deg;C. With " + weatherText + " " + night_or_day + "time conditions.</h2>\
		"); // end weather data html


			}); // close weatherdata function


// ------------------------------------------------------------------------------------------------------------------- //

	// get json object for audio api
	$.getJSON("https://api.spotify.com/v1/search?query=jazz&offset=30&limit=10&type=playlist", function(object){
		var link = object["playlists"].href;
		console.log(link);
		console.log("shout out to the homies in da console!");



		}); //close audio function


}); //close function main


	







