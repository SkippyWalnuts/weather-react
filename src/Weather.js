import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 17,
    description: "Partly Cloudy",
    humidity: 94,
    wind: 15,
    date: "Wednesday 11:20"
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col weatherText">
          <h1 className="city">{weatherData.city}</h1>
          <h2>{weatherData.temperature}</h2>
          <h3>°C</h3>
          <h4>{weatherData.description}</h4>
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
          <h5>
            Last updated: <span className="date">{weatherData.date}</span>
          </h5>
        </div>
        <div className="col">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/883/original/undraw_Weather.png?1694609650"
            className="weather-img img-fluid"
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
}
