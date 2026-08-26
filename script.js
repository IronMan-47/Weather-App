const input_box = document.getElementById("Search");
const button = document.getElementById("Submit");

if (input_box && button) {
  input_box.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      button.click()
    }
  })
  button.addEventListener("click", async () => {
    const city = input_box.value;
    if (city === "" || city === " ") {
      alert("Please enter a valid city name.");
      return;
    }
    window.location.href = `Details.html?city=${encodeURIComponent(city)}`
  })
};

const cityname = document.getElementById("city_name")
const maintemp = document.getElementById("main_temp")
const feels = document.getElementById("feels")
const maxtemp = document.getElementById("max_temp")
const mintemp = document.getElementById("min_temp")
const weather = document.getElementById("weather")
const visibility = document.getElementById("visibility")
const image = document.getElementById("image")

if (cityname) {
  loadweatherdata();
}

async function loadweatherdata() {
  try {
    const params = new URLSearchParams(window.location.search);
    const city = params.get("city")
    const url = `/api/weather?city=${encodeURIComponent(city)}`;
    const data = await fetch(url);
    if (!data.ok) {
      alert("Couldn't Find the City Details");
      window.location.href = 'index.html';
      return;
    } else {
      const data_response = await data.json();
      cityname.innerText = city
      maintemp.innerText = data_response.main.temp+" C";
      feels.innerText = data_response.main.feels_like+" C";
      maxtemp.innerText = data_response.main.temp_max+" C";
      mintemp.innerText = data_response.main.temp_min+" C";
      weather.innerText = data_response.weather[0].main;
      visibility.innerText = data_response.visibility / 1000;
      console.log("Sunrise time: ", data_response.sys.sunrise);
      console.log("Sunset time: ", data_response.sys.sunset);
      const images = {
        clear: 'clear.svg',
        rainy: 'rainy.svg',
        snowy: 'snowy.svg',
        thunderstorm: 'thunderstorm.svg',
        windy: 'windy.svg',
        cloud: 'Clouds.svg'
      };
      let selectedImage;
      switch (data_response.weather[0].main) {
        case 'Clear':
          selectedImage = images.clear;
          break;
        case 'Rain':
        case 'Drizzle':
          selectedImage = images.rainy;
          break;
        case 'Snow':
          selectedImage = images.snowy;
          break;
        case 'Thunderstorm':
          selectedImage = images.thunderstorm;
          break;
        case 'Squall':
        case 'Tornado':
        case 'Mist':
        case 'Haze':
        case 'Fog':
        case 'Smoke':
        case 'Dust':
        case 'Sand':
        case 'Ash':
          selectedImage = images.windy;
          break;
        case 'Clouds':
          selectedImage = images.cloud;
          break;
      }
      image.src = selectedImage;
    }
  } catch (error) {
    console.error("Error occured");
  }

}
