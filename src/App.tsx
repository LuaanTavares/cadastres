import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import React from "react";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
