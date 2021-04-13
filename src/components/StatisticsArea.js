import React from "react";

import { Grid } from "@material-ui/core";
import Card01 from "./Cards/Card01";
import PropTypes from "prop-types";
import UsageChart from "./Charts/UsageChart";
import BudgetUsage from "./Charts/BudgetUsage";
import Counter from "./Charts/Counter";

const StatisticsArea = (props) => {
  const { height } = props;
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        alignContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={3}>
          <Card01
            title="Usage"
            height={height}
            style={{
              background: "linear-gradient(45deg, #7cbcf7 50%, #7c8cf7 100%)",
            }}
          >
            <UsageChart />
          </Card01>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card01 title="Budget Usage" height={height}>
            <BudgetUsage />
          </Card01>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card01 title="INSTANCES" height={height}>
            <Counter value="99" />
          </Card01>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card01 title="4th Summary" height={height}>
            <UsageChart />
          </Card01>
        </Grid>
      </Grid>
    </>
  );
};

StatisticsArea.defaultProps = {
  height: "500 px",
};
StatisticsArea.propTypes = {
  height: PropTypes.string,
};

export default StatisticsArea;
