requestUrl = [];
$(document).ready(function(){
	requestUrl.push("https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem");
	for (i=0; i<requestUrl.length; i++) {
		$.getJSON(requestUrl[i], function(data){
		    console.log(data["preview_url"]);
		});	
	}
});