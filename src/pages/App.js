/* eslint react/prop-types: 0 */
import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

import Header from "../components/common/Header";
import LeftDrawer from "../components/common/LeftDrawer";
import RightDrawer from "../components/common/RightDrawer";
import RightMenu from "../components/common/RightMenu";
import PushNotificationBar from "../components/common/PushNotificationBar";
import menuItems from "../config/menuItems";

import defaultTheme, { customTheme } from "../theme";
//import history from "../history";

import Dashboard from "./DashboardPage";
import NotFound from "./NotFoundPage";
import TestpageComponent from "./TestPageComponent";
import TestpageFunction from "./TestPageFunction";
import HomePage from "./HomePage";

import { history, Role } from "../components/helpers";
import { authenticationService } from "../Services";

import { CostDetails, AppDetails, InstanceDetails } from "./Monitor/index";
import { CatalogList, Blueprint } from "./Build/index";
import { Design, Deploy } from "./Plan/index";
import AccessRequest from "./AccessRequest";
import {
  Organization,
  BusinessUnit,
  Program,
  Project,
  Application,
} from "./Setup/index";

const styles = () => ({
  container: {
    margin: "80px 20px 20px 15px",
    paddingLeft: defaultTheme.drawer.width,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
    width: `calc(100% - ${defaultTheme.drawer.width}px)`,
  },
  containerFull: {
    paddingLeft: defaultTheme.drawer.miniWidth,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  settingBtn: {
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    width: 48,
    right: 0,
    height: 48,
    opacity: 0.9,
    padding: 0,
    zIndex: 999,
    position: "fixed",
    minWidth: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // nav bar default open in desktop screen, and default closed in mobile screen
    this.state = {
      theme: defaultTheme,
      rightDrawerOpen: false,
      rightMenuOpen:
        window &&
        window.innerWidth &&
        window.innerWidth >= defaultTheme.breakpoints.values.md
          ? false
          : true,
      navDrawerOpen:
        window &&
        window.innerWidth &&
        window.innerWidth >= defaultTheme.breakpoints.values.md
          ? true
          : false,
      loggedIn: false,
      notificationOpen: false,
      message: "",
      currentUser: null,
      isAdmin: false,
    };

    this.handleChangeRightDrawer = this.handleChangeRightDrawer.bind(this);
    this.handleChangeRightMenu = this.handleChangeRightMenu.bind(this);
    this.handleChangeNavDrawer = this.handleChangeNavDrawer.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleNotifications = this.handleNotifications.bind(this);
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin,
      })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  handleChangeNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  }

  handleChangeRightDrawer() {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen,
    });
  }
  handleChangeRightMenu() {
    this.setState({
      rightMenuOpen: !this.state.rightMenuOpen,
    });
  }

  handleChangeTheme(colorOption) {
    const theme = customTheme({
      palette: colorOption,
    });
    this.setState({
      theme,
    });
  }

  handleUserLogin(userParams) {
    if (userParams.length > 0 || userParams.userName !== "") {
      this.setState({
        loggedIn: true,
      });
    }
  }

  handleNotifications(message) {
    this.setState({ message: message });
  }

  render() {
    const { classes } = this.props;

    const {
      navDrawerOpen,
      rightDrawerOpen,
      rightMenuOpen,
      currentUser,
    } = this.state;

    if (!currentUser) {
      return <HomePage onLogin={this.handleUserLogin} />;
    } else {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Header
            handleChangeNavDrawer={this.handleChangeNavDrawer}
            navDrawerOpen={navDrawerOpen}
            handleChangeRightMenu={this.handleChangeRightMenu}
          />

          <LeftDrawer
            navDrawerOpen={navDrawerOpen}
            handleChangeNavDrawer={this.handleChangeNavDrawer}
            menus={menuItems.menus.filter(
              (item) =>
                item.Authorization == currentUser.role ||
                item.Authorization == Role.All
            )}
            // menus={menuItems.menus}
          />
          <ButtonBase
            color="inherit"
            classes={{ root: classes.settingBtn }}
            onClick={this.handleChangeRightDrawer}
          >
            <i className="fa fa-cog fa-3x" />
          </ButtonBase>
          <RightDrawer
            rightDrawerOpen={rightDrawerOpen}
            handleChangeRightDrawer={this.handleChangeRightDrawer}
            handleChangeTheme={this.handleChangeTheme}
          />
          <RightMenu
            rightDrawerOpen={rightMenuOpen}
            handleChangeRightDrawer={this.handleChangeRightMenu}
          />
          <PushNotificationBar
            message={this.state.message}
            NotificationEvent={this.handleNotifications}
          />
          <div
            className={classNames(
              classes.container,
              !navDrawerOpen && classes.containerFull
            )}
          >
            {/* TO DO: READ FROM Config/MenuItems and build this based on role. Do we need to use the private routes for additional authoriozation */}
            <Switch>
              {/* <PrivateRoute path="/admin" roles={[Role.Admin]}><AdminPage /></PrivateRoute> */}
              <Route exact path="/">
                <Dashboard NotificationEvent={this.handleNotifications} />
              </Route>
              <Route path="/dashboard">
                <Dashboard NotificationEvent={this.handleNotifications} />
              </Route>
              <Route path="/Monitor/AppDetails">
                <AppDetails NotificationEvent={this.handleNotifications} />
              </Route>
              <Route path="/Monitor/InstanceDetails">
                <InstanceDetails NotificationEvent={this.handleNotifications} />
              </Route>
              <Route path="/Monitor/CostDetails">
                <CostDetails />
              </Route>
              <Route path="/Setup/Organization">
                <Organization NotificationEvent={this.handleNotifications} />
              </Route>
              <Route path="/Setup/BusinessUnit">
                <BusinessUnit NotificationEvent={this.handleNotifications} />
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
              <Route path="/TestpageComponent">
                <TestpageComponent />
              </Route>
              <Route path="/TestpageFunction">
                <TestpageFunction />
              </Route>
              <Route path="/AccessRequest">
                <AccessRequest />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      );
    }
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object,
  loggedIn: PropTypes.bool,
};

export default withStyles(styles)(App);
