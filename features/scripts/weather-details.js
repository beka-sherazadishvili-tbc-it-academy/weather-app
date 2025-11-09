const weatherDetails = weatherData[1].weatherDetails;
const weatherList = document.querySelector('.weather__detail__item__list');

function insertWeatherDetails() {
    weatherList.innerHTML = '';
    for (let key in weatherDetails) {
        const weatherItem = `
        <div class="weather__detail__item">
            <div class="item__details">
                <span>${key}</span>
                <div>${weatherDetails[key]}</div>
            </div>
            <img src="./assets/icons/weather-icon-${key}.svg" alt="">
        </div>`;

        weatherList.insertAdjacentHTML('beforeend', weatherItem);
    }
}

insertWeatherDetails();