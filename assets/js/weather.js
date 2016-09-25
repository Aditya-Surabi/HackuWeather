$(document).ready($.getJSON("http://apidev.accuweather.com/currentconditions/v1/55488.json?apikey=HackuWeather2016", function(weatherData){ //don't bother the apikey is expired
	var weatherIcon = weatherData[0].WeatherIcon;
	console.log(weatherIcon);
	$("#weather-data").append("\
		<b>hi</b>"
		);
}));



