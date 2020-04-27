import Users from "./pages/user";
import routes from "./routes";

export default {
  routeProps: {
    path: "/user",
    component: Users,
    children: routes
  },
  name: "Users"
};
