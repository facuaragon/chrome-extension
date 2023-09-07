import WeatherIcons from "../WeatherIcons/WeatherIcons";

export default function WeatherCard({ weather }) {
  return (
    <>
      <div>
        <div>{weather.temp}°C</div>
        <div>
          <WeatherIcons
            height={20}
            width={20}
            fill={"#000"}
            name={weather.icon}
          />
        </div>
      </div>
    </>
  );
}
