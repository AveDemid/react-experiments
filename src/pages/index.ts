import { HomePage } from "./home/page";
import { WeatherPage } from "./weather/page";
import { CalculatorPage } from "./calculator/page";
import { IssuesPage } from "./gtihub-issues/issues/page";
import { IssuePage } from "./gtihub-issues/issue/page";
import { UseMemoPage } from "./use-memo/page";

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
    component: IssuesPage
  },
  {
    path: "/:owner/:repo/issues/:number",
    exact: true,
    component: IssuePage
  },
  {
    path: "/use-memo",
    exact: true,
    component: UseMemoPage
  }
];
