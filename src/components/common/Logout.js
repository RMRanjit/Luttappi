import React from "react";
import PropTypes from "prop-types";

import { IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { PowerSettingsNew } from "@material-ui/icons";

import { history } from "../helpers";
import { authenticationService } from "../../Services";

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
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350,
  },
});

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    authenticationService.logout();
    history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.sectionDesktop}>
          {this.renderMessagePopOver(classes)}
        </div>
        <div className={classes.sectionMobile}>
          {this.renderMessagePopOver(classes)}
        </div>
      </>
    );
  }

  renderMessagePopOver() {
    return (
      <IconButton aria-haspopup="false" color="inherit" onClick={this.logout}>
        <PowerSettingsNew />
      </IconButton>
    );
  }
}

Logout.propTypes = {
  styles: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(Logout);
/* eslint-disable no-unused-vars */
