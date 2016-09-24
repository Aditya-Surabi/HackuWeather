void setup(){
  Serial.begin(115200); //baud rate

  //subscribe to a webhook and lookout for new data
  Particle.subscribe("hook-response/get_weather", gotWeatherData, MY_DEVICES);


}

void loop(){

    Particle.publish("get_weather");
  
}
