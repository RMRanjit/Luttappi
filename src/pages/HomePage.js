/* eslint-disable no-unused-vars */

import React from "react";
import PropTypes from "prop-types";

import {
  Grid,
  Typography,
  Card,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  ThemeProvider,
  TextField,
  Paper,
} from "@material-ui/core";
import classNames from "classnames";

import defaultTheme, { customTheme } from "../theme";
import Login from "../components/Login";

import WaveBorder from "../components/common/WaveBorder";

const styles = (theme) => ({
  card: {
    boxShadow: theme.shadows[1],
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(6),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: defaultTheme.palette.primary.main,
    paddingBottom: theme.spacing(1),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[0],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(2),
  },
});

const HomePage = (props) => {
  const { classes, theme, width } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <br />
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box
                  justifyContent="space-between"
                  className="row"
                  display="flex"
                  flexDirection="row"
                >
                  <Grid item xs={12} md={6}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={1} mt={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          Welcome to <br></br>
                          <span style={{ letterSpacing: ".5em" }}>
                            Cloud Marketplace
                          </span>
                        </Typography>
                      </Box>
                      <div>
                        <Box mb={16}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Accelerate time to market, drive revenue, and lower
                            development costs with Cloud Marketplace. Make it
                            easy for customers to find, buy, and use any
                            recurring digital service.
                          </Typography>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card
                      className={classes.card}
                      data-aos-delay="200"
                      data-aos="zoom-in"
                    >
                      <Login onLogin={props.onLogin} />
                    </Card>
                  </Grid>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={defaultTheme.palette.primary.main}
        lowerColor="#efefef"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </ThemeProvider>
  );
};

HomePage.defaultProps = {
  theme: defaultTheme,
};

HomePage.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
  onLogin: PropTypes.func,
};

export default withStyles(styles)(HomePage);

/* eslint-disable no-unused-vars */
