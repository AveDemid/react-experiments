import { HomePage } from "./home/page";
import { WeatherPage } from "./weather/page";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/weather",
    exact: true,
    component: WeatherPage
  }
];
