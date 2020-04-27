import Dashboard from "./pages/dashboard";
import routes from "./routes";

export default {
  routeProps: {
    path: "/dashboard",
    component: Dashboard,
    children: routes
  },
  name: "Dashboard"
};
