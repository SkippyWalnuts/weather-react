import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data);

}

    let apiKey = `6dt04340acdo33333a0be9731ef54b37`
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);


        return (
        <div className="WeatherForecast">
            <div className="row my-4">
                <div className="col">
                  <div className="ForecastDay">Thu</div>  
                    <WeatherIcon code="thunderstorm-day" size={30} />
                    <div className="ForecastTemps">
                        <span classaName="ForecastTempMin">10</span> |{" "} 
                        <span classaName="ForecastTempMin">19</span></div>
                </div>
            </div>
        </div>
    );
}