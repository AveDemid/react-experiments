import { HomePage } from "./home/page";
import { WeatherPage } from "./weather/page";
import { CalculatorPage } from "./calculator/page";

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
  },
  {
    calculator: "/calculator",
    exact: true,
    component: CalculatorPage
  }
];
