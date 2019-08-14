import { HomePage } from "./home/page";
import { SocialCardsPage } from "./social-cards/page";

export const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/social-cards",
    exact: true,
    component: SocialCardsPage
  }
];
