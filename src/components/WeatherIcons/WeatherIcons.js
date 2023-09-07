import React from "react";

import ClearDay from "./clear-day";
import ClearNight from "./clear-night";
import Cloudy from "./cloudy";
import Fog from "./fog";
import PartlyCloudyDay from "./partly-cloudy-day";
import PartlyCloudyNight from "./partly-cloudy-night";
import Rain from "./rain";
import Snow from "./snow";
import Wind from "./wind";

// export const iconList = {
//   clearDay: <ClearDay />,
//   clearNight: <ClearNight />,
//   cloudy: <Cloudy />,
//   fog: <Fog />,
//   partlyCloudyDay: <PartlyCloudyDay />,
//   PartlyCloudyNight: <PartlyCloudyNight />,
//   rain: <Rain />,
//   snow: <Snow />,
//   wind: <Wind />,
// };

export const WeatherIcons = ({ name, width, height, fill }) => {
  const iconList = {
    clearDay: <ClearDay />,
    clearNight: <ClearNight />,
    cloudy: <Cloudy />,
    fog: <Fog />,
    partlyCloudyDay: <PartlyCloudyDay />,
    PartlyCloudyNight: <PartlyCloudyNight />,
    rain: <Rain />,
    snow: <Snow />,
    wind: <Wind />,
  };
  if (name === "partly-cloudy-day") {
    name = "partlyCloudyDay";
  } else if (name === "partly-cloudy-night") {
    name = "partlyCloudyNight";
  } else if (name === "clear-day") {
    name = "clearDay";
  } else if (name === "clear-night") {
    name = "clearNight";
  }
  const iconComponent = iconList[name];
  if (!iconComponent) {
    return null;
  } else {
    const selectedIcon = React.cloneElement(iconComponent, {
      width: width,
      height: height,
      fill: fill,
    });
    return selectedIcon;
  }
};
export default WeatherIcons;
