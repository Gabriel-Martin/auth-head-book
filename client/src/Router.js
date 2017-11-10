import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from "./views/Profile";
import EditProfile from "./views/EditProfile";
import AuthenticatedRoute from "./containers/AuthenticatedRoute";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={Signup} />
          <AuthenticatedRoute exact path={"/profile"} component={Profile} />
          <AuthenticatedRoute
            exact
            path={"/profile/edit"}
            component={EditProfile}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
