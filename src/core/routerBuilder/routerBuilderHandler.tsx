import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routerProps } from "./types";
import PrivateRoute from "./privateRouter";

const routerBuilder: React.FC = (props: routerProps) => {
  const [acessToken, setAcessToken] = useState(false);

  useEffect(() => {
    localStorage.getItem("acessToken")
      ? setAcessToken(true)
      : setAcessToken(false);
  }, [acessToken]);

  const { modules } = props;

  return (
    <Router>
      <Switch>
        {modules.map(route => {
          return <PrivateRoute {...route.routeProps} />;
        })}
      </Switch>
    </Router>
  );
};

export default routerBuilder;
