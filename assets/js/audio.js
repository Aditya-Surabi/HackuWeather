$(document).ready($.getJSON("https://api.spotify.com/v1/search?query=jazz&offset=30&limit=10&type=playlist", function(object){
	var link = object["playlists"].href;
	console.log(link);
	console.log("hi");
}));