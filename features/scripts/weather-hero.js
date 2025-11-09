const temperatureCounts = document.querySelectorAll(".temperature__count");

function initializeTemperature() {
    if (currentWeatherData) {
        console.log(`${currentWeatherData.currentTemp} ______________WEATHER HERO`)
    for (let i = 0; i < temperatureCounts.length; i++) {
      if (i === 0) {
        temperatureCounts[i].innerText = `${currentWeatherData.currentTemp}°C`;
      } else {
        temperatureCounts[i].innerText = `${currentWeatherData.hourlyTemp[i - 1]}°C`;
      }
    }
  }
}

initializeTemperature()

