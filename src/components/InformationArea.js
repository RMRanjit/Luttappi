import React from "react";

import { Grid } from "@material-ui/core";
import ActivityProgress from "./common/ActivityProgress";
//import PropTypes from "prop-types";

const InformationArea = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        alignContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={9}>
          Products
        </Grid>
        <Grid item xs={12} md={3}>
          <ActivityProgress />
        </Grid>
      </Grid>
    </>
  );
};

InformationArea.defaultProps = {};
InformationArea.propTypes = {};

export default InformationArea;
