import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  AppBar,
  IconButton,
  //Menu,
  //MenuItem,
  InputBase,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
//import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { Toolbar } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
//import { bool } from "prop-types";
import MessagePopOver from "./MessagePopOver";
import ProfilePopOver from "./Profile";
import Logout from "./Logout";

const styles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: theme.drawer.width,
    width: `calc(100% - ${theme.drawer.width}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      notificationAnchorEl: null,
    };
  }

  handleProfileMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
    alert("Profile clicked");
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
    //alert("MenuClose invoked");
  };

  handleMobileMenuOpen = (event) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });

    // alert(
    //   "Mobile MenuClose Open invoked and state Set to " +
    //     this.state.mobileMoreAnchorEl
    // );
    this.props.handleChangeRightMenu(event);
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
    alert(
      "Mobile MenuClose invoked and state set to" +
        this.state.mobileMoreAnchorEl
    );

    this.props.handleChangeRightMenu();
  };

  render() {
    const { handleChangeNavDrawer, classes, navDrawerOpen } = this.props;

    //const { anchorEl } = this.state;
    //const { mobileMoreAnchorEl } = this.state;
    //const isMenuOpen = Boolean(anchorEl);
    //const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const renderMenu = (
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //     transformOrigin={{ vertical: "top", horizontal: "right" }}
    //     open={isMenuOpen}
    //     onClose={this.handleMenuClose}
    //   >
    //     <MenuItem onClick={this.handleClose}>Profile</MenuItem>
    //     <MenuItem onClick={this.handleClose}>My account</MenuItem>
    //   </Menu>
    // );

    // const renderMobileMenu = () => {
    //   return (
    //     <Menu
    //       anchorEl={this.state.mobileMoreAnchorEl}
    //       anchorOrigin={{ vertical: "top", horizontal: "right" }}
    //       transformOrigin={{ vertical: "top", horizontal: "right" }}
    //       open={isMobileMenuOpen}
    //       onClose={this.handleMobileMenuClose}
    //     >
    //       <MenuItem>
    //         <MessagePopOver />
    //         {/* <IconButton color="inherit">
    //           <Badge
    //             className={classes.margin}
    //             badgeContent={0}
    //             color="secondary"
    //           >
    //             <NotificationsIcon />
    //           </Badge>
    //         </IconButton>
    //         <p>Notifications</p> */}
    //       </MenuItem>
    //       <MenuItem onClick={this.handleProfileMenuOpen}>
    //         <IconButton color="inherit">
    //           <AccountCircle />
    //         </IconButton>
    //         <p>Profile</p>
    //       </MenuItem>
    //     </Menu>
    //   );
    // };

    return (
      <div>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: navDrawerOpen,
          })}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={handleChangeNavDrawer}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MessagePopOver />
              <ProfilePopOver />
              <Logout />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeNavDrawer: PropTypes.func,
  classes: PropTypes.object,
  navDrawerOpen: PropTypes.bool,
  handleChangeRightMenu: PropTypes.func,
};

export default withStyles(styles)(Header);

/* eslint-disable no-unused-vars */
