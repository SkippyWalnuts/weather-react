import React from "react";

export default function WeatherInfo(props) {
    return (<div className="weatherInfo">
    <div className="row weatherCity">
    <div className="col">
      <h2>{props.data.city}</h2>           
       <h3>{props.data.temperature}</h3>
       <h4>°C</h4>
       <img src={props.data.icon} className="weather-icon img-fluid" alt={props.data.description}></img>
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