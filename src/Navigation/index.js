import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CartIncrement from "../pages/CartIncrement";
import LogInPage from "../pages/LogInPage";
import RegisterPage from "../pages/RegisterPage";

export function Navigation() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartIncrement} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}
