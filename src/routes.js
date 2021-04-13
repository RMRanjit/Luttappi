import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import HomePage from "./pages/HomePage";
import defaultTheme from "./theme";
//import history from "./history";
//import Login from "./components/common/Login";

//import NotFound from "./pages/NotFoundPage";

//import Dashboard from "./pages/DashboardPage";
// import {
//   CostDetails,
//   AppDetails,
//   InstanceDetails,
// } from "./pages/Monitor/index";
// import { CatalogList, Blueprint } from "./pages/Build/index";
// import { Design, Deploy } from "./pages/Plan/index";
// import AccessRequest from "./pages/AccessRequest";
// import {
//   Organization,
//   BusinessUnit,
//   Program,
//   Project,
//   Application,
// } from "./pages/Setup/index";
/********************************************************** */
//  <Router history={history}> - if you plan to use history
/********************************************************** */

export default (
  <Router>
    <Switch>
      <Route exact path="/login">
        {/* <Login /> */}
        <HomePage classes={defaultTheme} />
      </Route>
      <Route exact path="/HomePage">
        <HomePage classes={defaultTheme} />
      </Route>
      <Route path="/">
        <App />
      </Route>

      {/* <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/Monitor/AppDetails">
        <AppDetails />
      </Route>
      <Route path="/Monitor/InstanceDetails">
        <InstanceDetails />
      </Route>
      <Route path="/Monitor/CostDetails">
        <CostDetails />
      </Route>
      <Route path="/Setup/Organization">
        <Organization />
      </Route>
      <Route path="/Setup/BusinessUnit">
        <BusinessUnit />
      </Route>
      <Route path="/Setup/Program">
        <Program />
      </Route>
      <Route path="/Setup/Project">
        <Project />
      </Route>
      <Route path="/Setup/Application">
        <Application />
      </Route>
      <Route path="/Build/CatalogList">
        <CatalogList />
      </Route>
      <Route path="/Build/Blueprint">
        <Blueprint />
      </Route>
      <Route path="/Plan/Design">
        <Design />
      </Route>
      <Route path="/Plan/Deploy">
        <Deploy />
      </Route>
      <Route path="/AccessRequest">
        <AccessRequest />
      </Route>
      <Route>
        <NotFound />
      </Route> */}
    </Switch>
  </Router>
);
