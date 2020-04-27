import Charts from "./pages/charts";

const routes = [
  { children: Charts, url: "/charts", private: true, redirectUrl: "login" }
];

export default routes;
