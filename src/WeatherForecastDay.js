import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`
}

function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`
}

function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day];
}


    return ( 
    <div className="WeatherForecastDay">
    <div className="ForecastDay">{day()}</div>  
        <WeatherIcon code={props.data.condition.icon} size={30} />
        <div className="ForecastTemps">
            <span className="ForecastTempMin">{minTemp()}° |{" "}</span>
            <span className="ForecastTempMax">{maxTemp()}°</span></div>
    </div>);
}