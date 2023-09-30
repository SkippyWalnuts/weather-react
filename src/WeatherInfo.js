import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return (<div className="weatherInfo m-4">
    <div className="row">
    <div className="col">
      <h2>{props.data.city}</h2>
      <div className="row">      
      <WeatherTemp celsius={props.data.temperature} />
       <div className="col weatherIcon">
       <WeatherIcon code={props.data.icon} size={65}/>
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