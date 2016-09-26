$(document).ready(function(){

	console.log("Ayy console squad."); // Just saying hello.

	// global variables

	var weatherText;
	var mood;
	var song_link = null;

	// Use AJAX to grab AccuWeather API data, parse it, and store annything we need in variables.
	$.getJSON("http://apidev.accuweather.com/currentconditions/v1/55488.json?apikey=HackuWeather2016", function(weatherData){ //don't bother the apikey is expired
		var weatherIcon = weatherData[0].WeatherIcon;
		weatherText = weatherData[0].WeatherText;
		var isDay = weatherData[0].IsDayTime;
		var temperature = weatherData[0].Temperature.Metric.Value;
		var mobileLink = weatherData[0].MobileLink; // not used (yet)
		
		var night_or_day;
		if(isDay){
			night_or_day = "day";
		}else{
			night_or_day = "night";
		}

		mood = weather_to_mood(weatherIcon); // call the weather_to_mood function and grab keyword/tag that is appropriate for the weather
		
		// Use the Soundcloud API to grab an appropriate track.


		// I know this is bad practice, but soundcloud doesnt allow everyone to work with their api's
		// so I found this client_id on the internet, so no real need to hide it so long as it is already public.

		SC.initialize({client_id: '89ae6050d2fb321d2ac9be2e2d822596'});
		SC.get('/tracks', { tags: mood }).then(function(tracks) {
			var track_index = Math.floor(Math.random() * tracks.length) // select a random index from the array
			song_link = tracks[track_index].uri; // play random song after song
			console.log(song_link); // let me check
			// use some clever jquery to load this song in on the page
			$('#audio').prop('src',"https://w.soundcloud.com/player/?url="+song_link+"&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
		});



		// write weather data to html
		$("#weather-data").append("\
			<h2>It's " + temperature + " &deg;C. With " + weatherText + " " + night_or_day + "time conditions.</h2>\
			"); // end weather data html
				}); // close weatherdata function

// Ideally we could use real weather metrics to determine emotion, but that is a project in itself, so here we just grab 
// the weathers 'mood' based on the type of weather icon that accuweather would display to represent the weather.
// it's actually quite accurate


// this function grabs the weather icon #, then trys a switch to get an array of possible moods
// then it randomly selects a mood from the mood list, and returns it
function weather_to_mood(x) {
	switch(true){
		case ((x >= 15 && x <=18) || (x >= 38 && x<= 44)):
			mood = ['sad', 'slow', 'dark'];
			break;
		case (x < 5):
			mood = ['upbeat', 'happy', 'summer', 'chill'];
			break;
		case (x >= 5 && x <= 14 ):
			mood = ['slow', 'smooth', 'relax', 'jazz'];
			break;
		case (x >= 19 && x <= 24):
			mood = ["christmas", "jazz"];
			break;
		default:
			mood = [""];
	}
	var mood_index = Math.floor(Math.random() * mood.length); //randomly pick an emotional tag
	return mood[mood_index];
} // end weather to mood
});// end document ready

