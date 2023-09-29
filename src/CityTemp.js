import React, { useState } from "react";

export default function CityTemp(props) {
const [unit, setUnit] = useState("celsius");

function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function fahrenheit() {
  return(props.celsius * 9/5) + 32;
}

function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}


if (unit === "celsius") {
    return (
    <div className="col-5">
    <h3>{props.celsius}</h3>
    <h4>°C | <a href="/" onClick={displayFahrenheit}>°F</a></h4>
    </div>);
} else {
    
    return (
        <div className="col-5">
        <h3>{Math.round(fahrenheit())}</h3>
        <h4><a href="/" onClick={displayCelsius}>°C</a> | °F</h4>
        </div>);
}
}