import React from "react";
import PropTypes from "prop-types";
/* todo; Work on the styles */
const Counter = (props) => {
  return (
    <div
      style={{
        height: "140px",
        alignItems: "center",
        paddingLeft: "30px",
        paddingTop: "0px",
      }}
    >
      <br></br>
      <span style={{ fontSize: "48pt", color: "indigo" }}>{props.value}</span>
    </div>
  );
};

Counter.defaultProps = {
  value: "0",
};

Counter.propTypes = {
  value: PropTypes.string,
};

export default Counter;
