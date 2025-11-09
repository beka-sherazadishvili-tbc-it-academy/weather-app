const temperatureCounts = document.querySelectorAll(".temperature__count");
function initializeTemperature() {
    if (currentWeatherData) {
    for (let i = 0; i < temperatureCounts.length; i++) {
      if (i === 0) {
        temperatureCounts[i].textContent = `${currentWeatherData.hourlyTemp[i]}°C`;
      } else {
        temperatureCounts[i].textContent = `${currentWeatherData.hourlyTemp[i - 1]}°C`;
      }
    }
  }
}

initializeTemperature()

