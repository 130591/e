import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

import { IChildren } from "./types";

interface privateRouter {
  component: React.ReactNode;
  path: string;
  redirectUrl: string;
  childrens: IChildren[];
}

const privateRouter: React.FC = (props: privateRouter) => {
  const [acessToken, setAcessToken] = useState(false);

  const { component, childrens, path } = props;

  useEffect(() => {
    localStorage.getItem("acessToken")
      ? setAcessToken(true)
      : setAcessToken(false);
  }, []);

  function renderRouteChildren(child: IChildren) {
    if (acessToken) {
      return <Route component={child.children} path={child.url} />;
    } else {
      return <Redirect to={"/login"} />;
    }
  }

  return acessToken ? (
    <Route exact path={path} {...component}>
      {childrens.map(value => {
        return renderRouteChildren(value);
      })}
    </Route>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default privateRouter;
