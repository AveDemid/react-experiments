import { request } from "@features/common";

export const getWeather = <T>() =>
  request<T>(
    "GET",
    "http://api.openweathermap.org/data/2.5/forecast?id=498817&appid=72cb7ff3b40b35b37c1021f04abb9321"
  );
