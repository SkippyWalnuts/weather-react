import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecast] = useState(null);

    useEffect(() => {
setLoaded(false);
    }, [props.city]);


    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

    

    if (loaded) {
    console.log(forecastData);
    return (
    <div className="WeatherForecast">
    <div className="row my-4">
    {forecastData.map(function(dailyForecast, index) {
        if (index < 5) {
    return (
    <div className="col" key={index}>
    <WeatherForecastDay data={dailyForecast}/>
    </div>
    );
    }
    })}
        
    </div>
            </div>
        );
    }
    else {
        let apiKey = `6dt04340acdo33333a0be9731ef54b37`
        let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    return null;
      
}
}