import React from "react";
import Button from "@material-ui/core/Button";

const Application = (props) => {
  console.log(props);

  return (
    <div>
      <Button variant="contained" color="primary">
      Application Details
      </Button>
    </div>
  );
};

export default Application;
