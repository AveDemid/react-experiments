import { Weather as WeatherType } from "./../types";

export const getWeatherByDay = (list: WeatherType[]) => {
  const byDate = list.reduce(
    (previousValue, currentValue) => {
      const date = new Date(currentValue.dt * 1000).getDate();
      if (previousValue[date]) {
        previousValue[date].push(currentValue);
      } else {
        previousValue[date] = [currentValue];
      }
      return previousValue;
    },
    {} as { [key: string]: WeatherType[] }
  );

  const byOrdinalNumber: { [key: string]: WeatherType[] } = {};
  let i = 0;
  for (const key in byDate) {
    byOrdinalNumber[i] = byDate[key];
    i++;
  }

  return byOrdinalNumber;
};
