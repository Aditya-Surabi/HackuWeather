var deviceID    = "<< device id >>";
var accessToken = "<< access token >>";
var setFunc = "setpos";
var getFunc = "getpos";

window.setInterval(function() {
  requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + getFunc + "/?access_token=" + accessToken;
  $.getJSON(requestURL, function(json) {
           document.getElementById("light1").value = parseInt(json.result);
           });
}, 1000);

function setValue(obj) {
  var newValue = document.getElementById('light1').value;
  sparkSetPos(newValue);
}

function fineAdjust(value) {
  var setValue = value;
  sparkSetPos(setValue);
  document.getElementById("light1").value = setValue;
}

function sparkSetPos(newValue) {
var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";
  $.post( requestURL, { params: newValue, access_token: accessToken });
}

