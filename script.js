function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value;
    const apiKey = "efbbf78c040ada9466373dc3911fb8b9"; // Replace with your API key
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log("Error fetching weather data:", error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
  
    const weatherHTML = `
      <h2>${cityName}</h2>
      <p>${temperature}°C</p>
      <p>${description}</p>
    `;
  
    weatherInfo.innerHTML = weatherHTML;
  }
  