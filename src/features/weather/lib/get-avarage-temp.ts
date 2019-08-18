import { Weather as WeatherType } from "./../types";

export const getAverageTemp = (list: WeatherType[]) =>
  list
    .reduce(
      (prev, current) => {
        prev.push(current.main.temp_max);
        return prev;
      },
      [] as number[]
    )
    .reduce((a, b) => a + b) / list.length;
