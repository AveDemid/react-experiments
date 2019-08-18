import { Weather as WeatherType, WeatherIconType } from "./../types";

export const getIconCode = (list: WeatherType[]) =>
  list[0].weather[0].icon as WeatherIconType;
