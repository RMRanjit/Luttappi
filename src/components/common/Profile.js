import React from "react";
import PropTypes from "prop-types";

import {
  IconButton,
  Popover,
  Typography,
  AppBar,
  Box,
  Divider,
  Avatar,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { withStyles } from "@material-ui/core/styles";
import data from "../../dummy_data/data";

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

  avatarRootMini: {
    padding: "15px 0 10px 10px",
  },
  avatarIcon: {
    float: "center",
    display: "flex",
    alignContent: "center",
    boxShadow: "0px 0px 0px 3px rgba(0,0,0,0.2)",
  },
  avatarSpan: {
    paddingTop: 8,
    paddingLeft: 12,
    display: "block",
    color: theme.palette.primary.main,
    fontWeight: 300,
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
  popoverPaper: {
    width: "100%",
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 270,
    },
  },
  divider: {
    marginTop: -2,
  },
  noShadow: {
    boxShadow: "none !important",
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationAnchorEl: null,
    };
  }

  handleNotificationOpen = (event) => {
    if (this.state.notificationAnchorEl !== null) return; // Checking to avoid event propagation form handleNotificastionClose event
    this.setState({ notificationAnchorEl: event.currentTarget });
  };

  handleNotificationClose = (event) => {
    this.setState({ notificationAnchorEl: null });
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.sectionDesktop}>
          {this.renderProfilePopover(classes)}
        </div>
        <div className={classes.sectionMobile}>
          {this.renderProfilePopover(classes)}
        </div>
      </>
    );
  }

  renderProfilePopover(classes) {
    const { notificationAnchorEl } = this.state;

    const isNotificationsOpen = Boolean(notificationAnchorEl);
    const notificationsID = isNotificationsOpen ? "notifications" : undefined;
    return (
      <IconButton
        aria-haspopup="true"
        color="inherit"
        onClick={this.handleNotificationOpen}
      >
        <AccountCircle />

        <Popover
          disableScrollLock
          id={notificationsID}
          open={isNotificationsOpen}
          anchorEl={notificationAnchorEl}
          onClose={this.handleNotificationClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <AppBar
            position="static"
            color="inherit"
            className={classes.noShadow}
          >
            <Box pt={1} pl={2} pb={1} pr={1}>
              <Typography variant="subtitle1">Profile</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box pt={1} pl={2} pb={1} pr={1}>
              <Avatar
                src={data.user.avatar}
                size={60}
                classes={{ root: classes.avatarIcon }}
              />
            </Box>
            <Box pt={1} pl={2} pb={1} pr={1}>
              <span>{data.user.userName}</span>
            </Box>
          </AppBar>
        </Popover>
      </IconButton>
    );
  }
}

Profile.propTypes = {
  styles: PropTypes.object,
  classes: PropTypes.object,
  user: PropTypes.object,
};

export default withStyles(styles)(Profile);
/* eslint-disable no-unused-vars */
