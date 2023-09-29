import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (<div className="weatherInfo">
    <div className="row weatherCity">
    <div className="col">
      <h2>{props.data.city}</h2>
      <div className="row">      
      <div className="col-5">
       <h3>{props.data.temperature}</h3>
       <h4>°C</h4>
       </div>
       <div className="col ps-0">
       <WeatherIcon code={props.data.icon} />
       </div>
       </div>
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