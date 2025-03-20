async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'c263e4da3fee719f7d566297cc57356b'; // Your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById('loadingSpinner').style.display = 'block';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found, please try again.");
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    } finally {
        document.getElementById('loadingSpinner').style.display = 'none';
    }
}

function displayWeather(data) {
    const temp = data.main.temp.toFixed(1); // Temperature in Celsius
    const weather = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;
    const output = `
        <h2>${city}, ${country}</h2>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Weather:</strong> ${weather.charAt(0).toUpperCase() + weather.slice(1)}</p>
    `;
    document.getElementById('weatherOutput').innerHTML = output;
}
