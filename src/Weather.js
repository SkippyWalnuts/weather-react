import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);


function displayResults(response) {
  console.log(response.data)
 setWeatherData({
  ready: true,
  city: response.data.city,
  temperature: Math.round(response.data.temperature.current),
  description: response.data.condition.description,
  humidity: Math.round(response.data.temperature.humidity),
  wind: Math.round(response.data.wind.speed),
  icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
});
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function logCity(event) {
setCity(event.target.value);
}

function search() {
  const apiKey = `6dt04340acdo33333a0be9731ef54b37`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
  axios.get(apiUrl).then(displayResults);
}


if (weatherData.ready) {
  return (
    <div className="Weather">

      
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
    
<div className="weatherText">
      <div className="row weatherCity">
      <h2>{weatherData.city}</h2>
      </div>  
         <div className="row weatherInfo">
          <div className="col">
         <h3>{weatherData.temperature}</h3>
         <h4>°C</h4>
         <img src={weatherData.icon} className="weather-icon img-fluid" alt={weatherData.description}></img>
         </div>
         <div className="col">
         <h5>{weatherData.description}</h5>
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
         </div>
        </div>
        </div>
        <h6>
            Last updated: <span className="date">Wednesday 11:00</span>
          </h6>
    </div>
        
  );
} else {
  search();
  return "Loading";
}
}