import { useEffect, useState } from "react";
import "./App.css";
import MostVisited from "./components/MostVisited/MostVisited";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Dolars from "./components/Dolars/Dolars";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/38.9697,-77.385?key=M7PT57DUDBLXBNYKJ35J85RY4

function App() {
  const [weather, setWeather] = useState();
  const [dolars, setDolars] = useState();
  useEffect(() => {
    // Fetch weather
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        if (latitude && longitude) {
          const fetchWeather = () => {
            fetch(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=M7PT57DUDBLXBNYKJ35J85RY4&unitGroup=metric`
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error");
                }
              })
              .then((data) => {
                setWeather(data.currentConditions);
                console.log("weather: ", data.currentConditions);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          fetchWeather();

          //fetch dolar
          const fetchDolar = () => {
            fetch("https://dolarapi.com/v1/dolares/")
              .then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Error");
                }
              })
              .then((data) => {
                setDolars(data);
                console.log("dolar: ", data);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          fetchDolar();
        }
      },
      function (error) {
        // Handle errors or if the user denies permission
        console.error("Error getting location: " + error.message);
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <MostVisited />
        {weather && <WeatherCard weather={weather} />}
        {dolars && <Dolars dolars={dolars} />}
      </header>
    </div>
  );
}

export default App;
