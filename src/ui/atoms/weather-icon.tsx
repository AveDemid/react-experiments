import React from "react";

type WeatherIconTypes =
  | "01d"
  | "01n"
  | "02d"
  | "02n"
  | "03d"
  | "03n"
  | "04d"
  | "04n"
  | "09d"
  | "09n"
  | "10d"
  | "10n"
  | "11d"
  | "11n"
  | "13d"
  | "13n"
  | "50d"
  | "50n";

interface WeatherIconProps {
  icon: WeatherIconTypes;
}

export const WeatherIcon = ({ icon }: WeatherIconProps) => {
  return (
    <img
      style={{ width: "52px", height: "52px", userSelect: "none" }}
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
    ></img>
  );
};
