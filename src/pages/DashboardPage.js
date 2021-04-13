import React from "react";

import { withStyles } from "@material-ui/core";

//import defaultTheme from "../theme";
//import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import StatisticsArea from "../components/StatisticsArea";
import InformationArea from "../components/InformationArea";

const styles = () => ({});
//const muiBaseTheme = createMuiTheme();

const DashboardPage = () => {
  return (
    <>
      <StatisticsArea />
      <InformationArea />
    </>
  );
};

export default withStyles(styles, { withTheme: true })(DashboardPage);
