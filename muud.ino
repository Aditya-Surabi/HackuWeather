#define REDPIN D2
#define GREENPIN D1
#define BLUEPIN D0

int weatherIcon;
int intensity = NULL;
bool check = false;

int setIntensity(String intensityValue){
  intensity = intensityValue.toInt();
  int r = 255 * (intensity/10);
  int g = 255 * (intensity/10);
  int b = 255 * (intensity/10);
  setRGB(r,g,b);
}


void setup(){

  Serial.begin(115200); //baud rate
  pinMode(REDPIN, OUTPUT);
  pinMode(GREENPIN, OUTPUT);
  pinMode(BLUEPIN, OUTPUT);

  //subscribe to a webhook and lookout for new data
  //Particle.subscribe("hook-response/get_weather", weatherHandler, MY_DEVICES); // Toronto
  Particle.subscribe("hook-response/get_weather_india", weatherHandler, MY_DEVICES); // Mumbai
  Particle.function("setIntensity", setIntensity); //set
  Particle.variable("getintensity", &intensity, INT);
  //Particle.variable("getCheck", &check, bool);
}

void loop(){

    // hold up, wait a minute lemme get some json in it.
    for(int i=5; i >= 0; i--){
      Serial.print("Seconds until data request: ");
      Serial.print(i);
      Serial.println();
      delay(1000);
    }

    Serial.println("Requesting Accuweather Data..");
    // Particle.publish("get_weather"); //publish webhook
    Particle.publish("get_weather_india"); //publish webhook




    //if (intensity != NULL){
      //setIntensity(intensity.toInt());
    //}else {
      updateBrightness(weatherIcon);
    //}

    Serial.println(intensity);
   // pls wait

}

void weatherHandler(const char *name, const char *data) {

  String str = String(data);
  weatherIcon = atoi(tryExtractString(str,"<WeatherIcon>", "</WeatherIcon>"));
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


void updateBrightness(int status){
  if (status <=1 ){
    Serial.println("It's perfect outside!");
    setRGB(255,0,0); //No light
  }
  if (status > 1 && status < 4){
    Serial.println("It's sunny");
    setRGB(255,15,7); //some light
  }

  if (status >12 && status < 29 || status >33 && status < 44){
    Serial.println("It's sucks outside");
    setRGB(100,255,9); //Tangerine
  }
}

void weatherAlert(String status){
  if (status == "Fire"){
    Serial.println("Mixtape just dropped.");
    for(int i =0; i < 10; i++){
      setRGB(255,0,0);
      delay(1000);
      setRGB(0,0,0);
      delay(1000);
    }
  }

  if(status == "Flood"){
    setRGB(255,0,0);
  }
}

void setRGB(int r, int g, int b){
  analogWrite(REDPIN, r);
  analogWrite(GREENPIN, g);
  analogWrite(BLUEPIN, b);
}
