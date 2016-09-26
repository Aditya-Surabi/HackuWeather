
var deviceID    = "39001c000647343138333038";
var accessToken = "f984a60e89f0e5732ce7f5d3cad15a49a832918b"; // no time to make private srry
var setFunc = "setIntensity";
var getFunc = "getIntensity";

window.setInterval(function() {
  requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + getFunc + "/?access_token=" + accessToken;
  $.getJSON(requestURL, function(json) {
           document.getElementById("light1").value = parseInt(json.result);
         //  var toggle_lights = json[]
           console.log(json);
           });
}, 500);

function setValue(obj) {

	//if(toggle_lights){}
  var newValue = document.getElementById('light1').value;
  photonSetVal(newValue);
}

function photonSetVal(newValue) {
var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";
  $.post( requestURL, { params: newValue, access_token: accessToken });
}

