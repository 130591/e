import * as React from "react";
import RouterBuilder from "./core/routerBuilder";

import Routes from "./modules";

export default function App() {
  return <RouterBuilder modules={Routes} />;
}
