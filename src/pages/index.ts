import { HomePage } from "./home/page";
import { WeatherPage } from "./weather/page";
import { CalculatorPage } from "./calculator/page";
import { GithubIssuesPage } from "./gtihub-issues/page";

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
    path: "/calculator",
    exact: true,
    component: CalculatorPage
  },
  {
    path: "/:owner/:repo/issues",
    exact: true,
    component: GithubIssuesPage
  }
];
