import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  main: {
    backgroundColor: theme.palette.warning.light,
    //border: `${theme.border.borderWidth}px solid ${theme.palette.warning.main}`,
    border: "1px solid red",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
});

function HighlightedInformation(props) {
  const { className, children, classes } = props;
  return (
    <div className={classNames(classes.main, className ? className : null)}>
      <Typography variant="body2">{children}</Typography>
    </div>
  );
}

HighlightedInformation.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(HighlightedInformation);
