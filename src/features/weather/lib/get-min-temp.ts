import { Weather as WeatherType } from "./../types";

export const getMinTemp = (list: WeatherType[]) =>
  list
    .reduce(
      (prev, current) => {
        prev.push(current.main.temp_max);
        return prev;
      },
      [] as number[]
    )
    .reduce((a, b) => {
      return Math.min(a, b);
    });
