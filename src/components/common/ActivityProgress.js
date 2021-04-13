import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  LinearProgress,
} from "@material-ui/core";

//import ProgressBar from "./ProgressBar";

const ActivityProgress = (props) => {
  const { tasks, title } = props;

  return (
    <Card>
      <Box pt={0} px={0} pb={0}>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Typography
              className={"headLabel"}
              variant={"overline"}
              gutterBottom
            >
              {title}
            </Typography>
          </div>
        </Box>
      </Box>
      <CardContent>
        <Box mx={0.5} my={0.5} p={0}>
          {tasks.splice(0, 5).map((task) => (
            <div
              style={{ paddingLeft: "2px", display: "flex" }}
              key={task.Name}
              //className={classes.selectThemeBtn}
            >
              <Grid container directon="row">
                <Grid item xs={12}>
                  <div
                    style={{
                      height: "10px",
                      flex: 1,
                      padding: "1em",
                    }}
                  >
                    <span>{task.Name}</span>
                    <LinearProgress
                      variant="determinate"
                      value={task.Progress}
                    />
                  </div>
                  {/* <div style={{ height: "10px", flex: 1, padding: "1em" }}>
                    
                  </div> */}
                </Grid>
              </Grid>
            </div>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

ActivityProgress.defaultProps = {
  tasks: [
    { Name: "Task 1", Progress: 80 },
    { Name: "Task 2", Progress: 20 },
    { Name: "Task 3", Progress: 30 },
    { Name: "Task 4", Progress: 100 },
    { Name: "Task 5", Progress: 30 },
    { Name: "Task 6", Progress: 30 },
    { Name: "Task 7", Progress: 200 },
    { Name: "Task 8", Progress: 30 },
    { Name: "Task 9", Progress: 30 },
  ],
  title: "Tasks",
};

ActivityProgress.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string,
};

export default ActivityProgress;
