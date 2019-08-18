import { createStore, createEffect } from "effector";
import { WeatherForecast } from "./../types";
import { getWeather } from "./../api";

export const $weather = createStore<WeatherForecast | null>(null);

export const loadWeather = createEffect<void, WeatherForecast>().use(() =>
  getWeather<WeatherForecast>()
);

$weather.on(loadWeather.done, (state, { result }) => result);
