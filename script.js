const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);

    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        alert('Location not found');
    }
}

function displayWeather(data) {
    const weatherDataDiv = document.getElementById('weather-data');
    const { name, main, weather } = data;
    weatherDataDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}
