import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import DateFunction from "./DateFunction";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);


function displayResults(response) {
  setWeatherData({
  ready: true,
  city: response.data.city,
  date: new Date(response.data.time * 1000),
  temperature: Math.round(response.data.temperature.current),
  description: response.data.condition.description,
  humidity: Math.round(response.data.temperature.humidity),
  wind: Math.round(response.data.wind.speed),
  icon: response.data.condition.icon
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
              className="form-control shadow-sm search-field"
              id="word entry for search form"
              onChange={logCity}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="submit"
              value="Search"
              id="search button for search form"
              className="form-control btn shadow-sm search-button"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast city={weatherData.city}/>
         <h6>
            Last updated: <span className="date"><DateFunction date={weatherData.date}/></span>
          </h6>
 </div>
        
  );
} else {
  search();
  return "Loading";
}
}