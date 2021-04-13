/* eslint react/prop-types: 0 */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

const styles = {
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "2vw",
    minHeight: "2vw",
  },
  "@keyframes moveForever": {
    from: { transform: "translate3d(-90px, 0, 0)" },
    to: { transform: "translate3d(85px, 0, 0)" },
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 25s cubic-bezier(.55, .5, .45, .5) infinite",
      animationDelay: (props) => `-${props.animationNegativeDelay}s`,
    },
    "& > use:nth-child(1)": {
      animationDelay: "-2s",
      animationDuration: "7s",
    },
    "& > use:nth-child(2)": {
      animationDelay: "-3s",
      animationDuration: "10s",
    },
    "& > use:nth-child(3)": {
      animationDelay: "-4s",
      animationDuration: "13s",
    },
    "& > use:nth-child(4)": {
      animationDelay: "-5s",
      animationDuration: "20s",
    },
  },
};

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
function WaveBorder(props) {
  const id = String(Math.random());
  const {
    className,
    lowerColor,
    upperColor,
    classes,
    animationNegativeDelay,
    ...rest
  } = props;
  return (
    <div className={className} style={{ background: upperColor }} {...rest}>
      <svg
        className={classes.waves}
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={id}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        {animationNegativeDelay}
        <g className={classes.parallax}>
          <use href={`#${id}`} x="48" y="0" fill={lowerColor} />
          {/* <use href={`#${id}`} x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use href={`#${id}`} x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use href={`#${id}`} x="48" y="7" fill="#fff" /> */}
        </g>
      </svg>
    </div>
  );
}

WaveBorder.propTypes = {
  lowerColor: PropTypes.string.isRequired,
  upperColor: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  animationNegativeDelay: PropTypes.number.isRequired,
};

export default withStyles(styles)(WaveBorder);
