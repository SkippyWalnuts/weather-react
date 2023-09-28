import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);


function displayResults(response) {
setWeatherData({
  ready: true,
  temperature: Math.round(response.data.temperature.current),
  description: response.data.condition.description,
  humidity: Math.round(response.data.temperature.humidity),
  wind: Math.round(response.data.wind.speed)
});
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function search() {
  const apiKey = `6dt04340acdo33333a0be9731ef54b37`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
  axios.get(apiUrl).then(displayResults);
}

function logCity(event) {
event.preventDefault();
setCity(event.target.value);
}

let form = (
  <div className="Search">
      <form className="search-form" onSubmit={handleSubmit} id="Search form">
        <div className="row">
          <div className="col-sm-9">
            <input
              type="search"
              placeholder="Where to next?"
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
              id="search form entry"
              onChange={logCity}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm search-button"
            />
          </div>
        </div>
      </form>
    </div>
);

if (weatherData.ready) {
  return (
    <div className="Weather">
          {form}

      <div className="row">
        <div className="col weatherText">
          <h2 className="city">{city}</h2>
          <h3>{weatherData.temperature}</h3>
          <h4>°C</h4>
          <h5>{weatherData.description}</h5>
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
          <h6>
            Last updated: <span className="date">Wednesday 11:00</span>
          </h6>
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
} else {
  search();
  return "Loading";
}
}