import React from "react";

export interface IChildren {
  children: object;
  url: string;
  private: boolean;
  redirectUrl: string;
}

export interface IRouteEstructure {
  path: string;
  component: React.ReactNode;
  childrens: IChildren[];
}

export interface IRoutes {
  routeProps: IRouteEstructure;
  name: string;
}

export interface routerProps {
  modules: IRoutes[];
  name: string;
}
