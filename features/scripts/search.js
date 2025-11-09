const searchInput = document.querySelector(".header__search__input");
let currentWeatherData = weatherData[0];
let searchTerm = "";

function search() {

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();

    if (searchTerm) {
      currentWeatherData = weatherData.find(
        (item) => item.city.toLowerCase() === searchTerm.toLowerCase()
      );
      console.log(currentWeatherData)
    } else {
      currentWeatherData = weatherData[0];
    }
    invisible(currentWeatherData);
    initializeTemperature();
    showCurrentTempt()
    insertWeatherDetails();
    showCurrentLocation();
  });
}
search();
