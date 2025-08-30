import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  // Background gradient based on weather code
  const getBackground = (code) => {
    if (code === 0) return "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"; // Sunny
    if (code >= 1 && code <= 3)
      return "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"; // Partly Cloudy
    if (code >= 45 && code <= 48)
      return "linear-gradient(135deg, #d3cce3 0%, #e9e4f0 100%)"; // Fog
    if (code >= 51 && code <= 67)
      return "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"; // Drizzle/Rain
    if (code >= 71 && code <= 77)
      return "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)"; // Snow
    if (code >= 80 && code <= 82)
      return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"; // Heavy Rain
    if (code >= 95) return "linear-gradient(135deg, #667db6 0%, #0082c8 100%)"; // Storm
    return "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)"; // Default
  };

  // Text color fix for sunny backgrounds
  const getTextColor = (code) => {
    if ([0, 1, 2].includes(code)) return "#000"; // Black text for light backgrounds
    return "#fff"; // White for others
  };

  // Weather icon logic
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️"; 
    if ([1, 2, 3].includes(code)) return "⛅"; 
    if (code >= 45 && code <= 48) return "🌫️"; 
    if (code >= 51 && code <= 67) return "🌦️"; 
    if (code >= 71 && code <= 77) return "❄️"; 
    if (code >= 80 && code <= 82) return "🌧️"; 
    if (code >= 95) return "⛈️"; 
    return "☁️";
  };

  // City + Country logic
  const displayLocation =
    weather.city &&
    weather.country &&
    weather.city.toLowerCase() !== weather.country.toLowerCase()
      ? `${weather.city}, ${weather.country}`
      : weather.country;

  return (
    <div
      className="weather-card"
      style={{
        background: getBackground(weather.weatherCode),
        color: getTextColor(weather.weatherCode),
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        maxWidth: "300px",
        margin: "20px auto",
      }}
    >
      <h2>{displayLocation}</h2>
      <h3 style={{ fontSize: "2rem", margin: "10px 0" }}>
        {weather.temp}°C {getWeatherIcon(weather.weatherCode)}
      </h3>
      <p>Wind: {weather.wind} km/h</p>
    </div>
  );
}

export default WeatherCard;
