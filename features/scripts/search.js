const searchInput = document.querySelector(".header__search__input");
let currentWeatherData = null;

function search() {
  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();

    if (searchTerm === "") {
      currentWeatherData = undefined;
      return;
    }

    currentWeatherData = weatherData.find(
      (item) => item.city.toLowerCase() === searchTerm.toLowerCase()
    );

    if (currentWeatherData) {
      console.log(currentWeatherData)
    }
  });
}

search();
