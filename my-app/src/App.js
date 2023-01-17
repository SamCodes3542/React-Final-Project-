import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine";
import WeatherDate from "./WeatherDate";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);
}
function showResponse(response) {
  console.log(response.data);
  setWeatherData({
    loaded: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    feelsLike: Math.round(response.data.main.feels_like),
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
  });
}

function search() {
  let city = "Paris";
  const apiKey = "094b50c9907d04014c22a077f5e1062a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showResponse);
}

function handleSubmit(event) {
  event.preventdefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

if (weatherData.loaded) {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <WeatherDate data={WeatherData} />
            <form onSubmit="handleSubmit">
              <input
                type="search"
                placeholder="Search a City"
                autofocu="on"
                className="input"
                onChange="{handleCityChange}"
              />
              <input type="button" value="Search" className="button" />
            </form>

            <div className="row">
              <div className="col-2">
                Mon
                <br />
                temp
                <br />☀
              </div>
              <div className="col-2">
                Tue
                <br />
                temp
                <br />☀
              </div>
              <div className="col-2">
                Wed
                <br />
                temp
                <br />☀
              </div>
              <div className="col-2">
                Thurs
                <br />
                temp
                <br />☀
              </div>
              <div className="col-2">
                Fri
                <br />
                temp
                <br />☀
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        Open-Source coded on {""}
        <a
          className="gitLink"
          href="https://github.com/SamCodes3542/VIRTUAL-GAMER-WEATHER-APP-PROJECT"
          target="_blank rel=noopener noreferrer"
        >
          Github
        </a>{" "}
        By{" "}
        <a
          className="linkedIn"
          href="https://github.com/SamCodes3542/My-React-Weather-App-Project"
          target="_blank rel=noopener noreferrer"
        >
          Samantha Montgomery
        </a>{" "}
        hosted on{" "}
        <a
          className="netlifyLink"
          href="https://63ab22773ba4ab37cc2bdb1b--playful-concha-c4eabc.netlify.app/"
          target="_blank rel=noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
} else {
  search();
  return "Loading...";
}

