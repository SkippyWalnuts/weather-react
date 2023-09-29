import React from "react";
import WeatherIcon from "./WeatherIcon";
import CityTemp from "./CityTemp";

export default function WeatherInfo(props) {
    return (<div className="weatherInfo">
    <div className="row weatherCity">
    <div className="col">
      <h2>{props.data.city}</h2>
      <div className="row">      
      <CityTemp celsius={props.data.temperature} />
       <div className="col">
       <WeatherIcon code={props.data.icon} size={63}/>
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