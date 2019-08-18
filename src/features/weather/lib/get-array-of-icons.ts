import { Weather as WeatherType, WeatherIconType } from "./../types";
import { getIconCode } from "./get-icon-code";

export const getArrayOfIcons = (weatherByDay: {
  [key: string]: WeatherType[];
}) => {
  const arr = [];
  for (const day in weatherByDay) {
    arr.push(getIconCode(weatherByDay[day]));
  }
  return arr as WeatherIconType[];
};
