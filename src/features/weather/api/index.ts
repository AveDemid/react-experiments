export const getWeather = () =>
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?id=498817&appid=72cb7ff3b40b35b37c1021f04abb9321"
  ).then(response => response.json());
