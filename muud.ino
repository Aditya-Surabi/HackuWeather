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
  String weatherIcon = tryExtractString(str,"<WeatherIcon>", "</WeatherIcon>");
  String IsDayTime = tryExtractString(str,"<IsDayTime>", "</IsDayTime>");
  Serial.println(weatherIcon);
  Serial.println(IsDayTime);

}

String tryExtractString(String str, const char* start, const char* end){
  if (str == NULL){
    return NULL;
  }
  int idx = str.indexOf(start);
  if (idx < 0){
    return NULL;
  }
  int endIdx = str.indexOf(end);
  if (endIdx < 0){
    return NULL;
  }

  return str.substring(idx + strlen(start), endIdx);
}
