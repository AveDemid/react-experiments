import { Weather as WeatherType } from "./../types";

export const getMaxTemp = (list: WeatherType[]) =>
  list
    .reduce(
      (prev, current) => {
        prev.push(current.main.temp_max);
        return prev;
      },
      [] as number[]
    )
    .reduce((a, b) => {
      return Math.max(a, b);
    });
