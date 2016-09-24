void setup(){
  Serial.begin(115200); //baud rate

  //subscribe to a webhook and lookout for new data
  Particle.subscribe("hook-response/get_weather", weatherHandler, MY_DEVICES);
}

void loop(){

    // hold up, wait a minute lemme get some json in it.
    for(int i=10; i >= 0; i--){
      Serial.print("Seconds until data request: ");
      Serial.print(i);
      Serial.println();
      delay(1000);
    }

    Serial.println("Requesting Accuweather Data..");
    Particle.publish("get_weather"); //publish webhook

    delay(3000); // pls wait

}

void weatherHandler(const char *name, const char *data) {

  String str = String(data);
  Serial.println(str);

}

void updateBrightness(String status){
  if (status >1 && status < 4){
    Serial.println("It's sunny");

  }

  if (status >12 && status < 29 || status >33 && status < 44){
    Serial.println("It's sucks outside");

  }

}
