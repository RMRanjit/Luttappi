/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */
import React from "react";

import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";

const AccessRequest = (...props) => {
  const location = useLocation();

  return (
    <div>
      Location is : {location.pathname}
      <br></br>
      <Button variant="contained" color="secondary">
        AccessRequest
      </Button>
    </div>
  );
};

export default AccessRequest;
