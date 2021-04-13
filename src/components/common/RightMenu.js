import React from "react";
import PropTypes from "prop-types";

import { Drawer, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

// import { availableThemes } from "../../theme";

import MessagePopOver from "./MessagePopOver";
import ProfilePopOver from "./Profile";
import Logout from "./Logout";

const style = () => ({
  BackdropRoot: {
    backgroundColor: "transparent",
  },
});

const RightMenu = ({
  rightDrawerOpen,
  handleChangeRightDrawer,
  //handleChangeTheme,
  classes,
}) => (
  <Drawer
    variant="temporary"
    anchor={"right"}
    open={rightDrawerOpen}
    onClose={handleChangeRightDrawer}
    // use transparent background
    ModalProps={{
      keepMounted: true,
      BackdropProps: {
        classes: { root: classes.BackdropRoot },
      },
    }}
  >
    <div style={{ width: 30, paddingRight: 30 }}>
      <MessagePopOver />
      <Divider></Divider>
      <ProfilePopOver />
      <Divider></Divider>
      <Logout />
    </div>
  </Drawer>
);

RightMenu.propTypes = {
  rightDrawerOpen: PropTypes.bool,
  handleChangeRightDrawer: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(style)(RightMenu);
