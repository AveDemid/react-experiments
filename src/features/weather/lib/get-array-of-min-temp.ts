import { Weather as WeatherType } from "./../types";
import { getMinTemp } from "./get-min-temp";

export const getArrayOfMinTemp = (weatherByDay: {
  [key: string]: WeatherType[];
}) => {
  const arr = [];
  for (const day in weatherByDay) {
    arr.push(getMinTemp(weatherByDay[day]));
  }
  return arr;
};
