import React, { useEffect, useState } from "react";
import "./API.css";

function API() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-24.79&longitude=-65.41&current_weather=true"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los datos");
        return res.json();
      })
      .then((data) => setData(data.current_weather))
      .catch((err) => setError(err.message));
  }, []);

  // Devuelve un emoji según el código de clima
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️"; // Despejado
    if (code >= 1 && code <= 3) return "⛅"; // Parcialmente nublado
    if (code >= 45 && code <= 48) return "🌫️"; // Niebla
    if (code >= 51 && code <= 67) return "🌦️"; // Llovizna
    if (code >= 71 && code <= 77) return "❄️"; // Nieve
    if (code >= 80 && code <= 82) return "🌧️"; // Lluvia
    if (code >= 95 && code <= 99) return "⛈️"; // Tormentas
    return "❔"; // Otro
  };

  return (
    <div className="api-container">
      <h2>🌤️ Clima actual en Salta</h2>

      {/* Mostrar error si ocurre */}
      {error && <p className="error">{error}</p>}

      {/* Si no hay datos, mostrar loading */}
      {!data ? (
        <p>Cargando datos del clima...</p>
      ) : (
        <div className="weather-card">
          <div className="weather-icon">{getWeatherIcon(data.weathercode)}</div>
          <div className="weather-info">
            <p>
              <strong>Temperatura:</strong> {data.temperature} °C
            </p>
            <p>
              <strong>Viento:</strong> {data.windspeed} km/h
            </p>
            <p>
              <strong>Dirección del viento:</strong> {data.winddirection}°
            </p>
            <p>
              <strong>Última actualización:</strong>{" "}
              {new Date(data.time).toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default API;
