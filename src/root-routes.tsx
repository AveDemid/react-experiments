import React from "react";
import { renderRoutes } from "react-router-config";

import { routes } from "./pages";

export const RootRoutes = () => <>{renderRoutes(routes())}</>;
