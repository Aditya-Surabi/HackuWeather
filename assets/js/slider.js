var deviceID    = "<< device id >>";
var accessToken = "<< access token >>";
var setFunc = "setpos";
var getFunc = "getpos";

window.setInterval(function() {
  requestURL = "https://api.spark.io/v1/devices/" + deviceID + "/" + getFunc + "/?access_token=" + accessToken;
  $.getJSON(requestURL, function(json) {
           document.getElementById("curPos").innerHTML = json.result + "&deg;";
           document.getElementById("curPos").style.fontSize = "28px";
           document.getElementById("degBoxId").value = parseInt(json.result);
           });
}, 1000);

function setValue(obj) {
  var newValue = document.getElementById('degBoxId').value;
  sparkSetPos(newValue);
}

function fineAdjust(value) {
  var currentValue = parseInt(document.getElementById('curPos').innerHTML);
  var setValue = value + currentValue;
  sparkSetPos(setValue);
  document.getElementById("degBoxId").value = setValue;
}

function sparkSetPos(newValue) {
var requestURL = "https://api.spark.io/v1/devices/" +deviceID + "/" + setFunc + "/";
  $.post( requestURL, { params: newValue, access_token: accessToken });
}

