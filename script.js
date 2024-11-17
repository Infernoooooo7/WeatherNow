function getWeather() {
    const apiKey = 'f823be7a367d09b63ec4322a0ef7d7b8';
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => updateWeatherUI(data))
        .catch(error => alert('City not found! Please try again.'));
}


function updateWeatherUI(data) {
    if (data.cod !== 200) {
        alert('City not found! Please try again.');
        return;
    }

    const emojiMap = {
        Clear: '☀️',
        Clouds: '☁️',
        Rain: '🌧️',
        Drizzle: '🌦️',
        Thunderstorm: '⛈️',
        Snow: '❄️',
        Mist: '🌫️',
        Smoke: '💨',
        Haze: '🌁',
        Dust: '🌪️',
        Fog: '🌫️',
        Sand: '🏜️',
        Ash: '🌋',
        Squall: '🌬️',
        Tornado: '🌪️'
    };

    const weatherEmoji = emojiMap[data.weather[0].main] || '🌍'; 

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-emoji').textContent = weatherEmoji;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weather-result').style.display = 'block';
}
