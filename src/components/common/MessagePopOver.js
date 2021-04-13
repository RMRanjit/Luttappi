import React from "react";
import PropTypes from "prop-types";
import formatDistance from "date-fns/formatDistance";

import {
  IconButton,
  Badge,
  Popover,
  Typography,
  AppBar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MessageIcon from "@material-ui/icons/Message";
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

class MessagePopOver extends React.Component {
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
          {this.renderMessagePopOver(classes)}
        </div>
        <div className={classes.sectionMobile}>
          {this.renderMessagePopOver(classes)}
        </div>
      </>
    );
  }

  renderMessagePopOver(classes) {
    const { notificationAnchorEl } = this.state;

    const isNotificationsOpen = Boolean(notificationAnchorEl);
    const notificationsID = isNotificationsOpen ? "notifications" : undefined;
    return (
      <IconButton
        aria-haspopup="true"
        color="inherit"
        onClick={this.handleNotificationOpen}
      >
        <Badge
          className={classes.margin}
          badgeContent={data.messages.length}
          color="secondary"
          aria-describedby={notificationsID}
        >
          <MessageIcon />

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
                <Typography variant="subtitle1">Messages</Typography>
              </Box>
              <Divider className={classes.divider} />
              <List dense className={classes.tabContainer}>
                {data.messages.length === 0 ? (
                  <ListItem>
                    <ListItemText>
                      You haven&apos; t received any messages yet.
                    </ListItemText>
                  </ListItem>
                ) : (
                  data.messages.map((message, index) => (
                  
                    <ListItem
                      key={index}
                      divider={index !== data.messages.length - 1}
                      inset="true"
                    >
                      <ListItemText
                        primary={<div>{message.text}</div>}
                        //secondary={<div>2 mins ago</div>}
                        secondary={`${formatDistance(
                          message.date,
                          new Date()
                        )} ago`}
                        onClick={this.handleNotificationClose}
                      />
                    </ListItem>
                  ))
                )}
              </List>
            </AppBar>
          </Popover>
        </Badge>
      </IconButton>
    );
  }
}

MessagePopOver.propTypes = {
  styles: PropTypes.object,
  classes: PropTypes.object,
};

export default withStyles(styles)(MessagePopOver);
/* eslint-disable no-unused-vars */
