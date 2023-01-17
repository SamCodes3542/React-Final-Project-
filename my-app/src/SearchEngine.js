import React from "react";
import WeatherDate from "./WeatherDate";
import Icon from  "./Icon";

export default function SearchEngine(props) {
  return (
    <div className="SearchEngine">
      <h1 className="city">{props.data.city}</h1>
      <div className="float-left">
        <Icon code={props.data.icon} alt={props.data.descriptiom} />
      </div>
      <img
        src={props.data.iconUrl}
        className="icon"
        alt={props.data.descriptiom}
      />
      <h2 className="temperature">
        {Math.round(props.data.temperature)}
        <span className="unit">C</span>
      </h2>
      <div className="text-capitalize">
        <ul className="currentWeatherConditions">
          <li className="date">
            <WeatherDate date={props.data.date} />
          </li>
          <li className="descrption">{props.data.description}</li>
        </ul>
      </div>
      <ul className="weatherConditions">
        <li>
          Feels Like: Math.round{props.data.feelsLike}
          <span className="float-left">c</span>{" "}
        </li>
        <li>Humidity: {props.data.humidity}% </li>
        <li>Wind: {Math.round(props.data.wind)}km/h</li>
      </ul>
    </div>
  );
}