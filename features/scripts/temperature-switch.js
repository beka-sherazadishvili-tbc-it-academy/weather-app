const temperatureSwitch = document.querySelector(".header__switch");
let changeTo;
function switchTemperature() {
  temperatureSwitch.addEventListener("click", (event) => {
    changeTo = event.target.closest("span");
    if (changeTo.textContent === "F") {
      for (item of weatherData) {
        item.currentTemp = item.currentTemp * 1.8 + 32;
        console.log(item.hourlyTemp);
      }

      weatherData.forEach((item) => {
        for(temp of item.hourlyTemp){
            temp = temp * 1.8 + 32;
        }
      });

      console.log(`${currentWeatherData.hourlyTemp} _______________ SWITCH`);
      initializeTemperature();
    }
  });
}

switchTemperature();
