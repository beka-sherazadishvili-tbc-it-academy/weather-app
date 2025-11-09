const temperatureCounts = document.querySelectorAll(".temperature__count");

const currentTempItem = document.querySelector('.hero__section__left__current__temp');
const currentTempLocation = document.querySelector('.hero__section__left__location span');

function initializeTemperature() {
    if (currentWeatherData) {
    for (let i = 0; i < temperatureCounts.length; i++) {
      if (i === 0) {
        temperatureCounts[i].innerText = `${currentWeatherData.currentTemp}°C`;
      } else {
        temperatureCounts[i].innerText = `${currentWeatherData.hourlyTemp[i - 1]}°C`;
      }
    }
  }
}

function showCurrentTempt() {
  currentTempItem.innerText = `${currentWeatherData.currentTemp} °`;
}

function showCurrentLocation() {
  currentTempLocation.innerText = `${currentWeatherData.city}, ${currentWeatherData.country}`;
}

showCurrentTempt()
showCurrentLocation();
initializeTemperature();
