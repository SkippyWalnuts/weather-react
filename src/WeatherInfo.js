import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (<div className="weatherInfo">
    <div className="row weatherCity">
    <div className="col">
      <h2>{props.data.city}</h2>           
       <h3>{props.data.temperature}</h3>
       <h4>°C</h4>
       <WeatherIcon code={props.data.icon} className="weather-icon"/>
       </div>
       <div className="col">
       <h5>{props.data.description}</h5>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
       </div>
      </div>
      </div>);
}