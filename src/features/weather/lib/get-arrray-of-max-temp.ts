import { Weather as WeatherType } from "./../types";
import { getMaxTemp } from "./get-max-temp";

export const getArrayOfMaxTemp = (weatherByDay: {
  [key: string]: WeatherType[];
}) => {
  const arr = [];
  for (const day in weatherByDay) {
    arr.push(getMaxTemp(weatherByDay[day]));
  }
  return arr;
};
