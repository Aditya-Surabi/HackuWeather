
void setup(){
  Serial.begin(115200); //baud rate
  //subscribe to a webhook and lookout for new data
  Particle.subscribe("hook-response/get_weather", weatherHandler, MY_DEVICES);
}

void loop(){

    Serial.println("Requesting Accuweather Data..");
    Particle.publish("get_weather");

    delay(60000);

}

void weatherHandler(const char *name, const char *data) {

    String str = String(data);
    Serial.println(str);
    

}
