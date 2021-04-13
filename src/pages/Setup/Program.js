import React from "react";
import { Button } from "@material-ui/core";

import HighLightedInformation from "../../components/common/HighlightedInformation";

const Program = (props) => {
  console.log(props);

  return (
    <div>
      <HighLightedInformation> To be implemented</HighLightedInformation>
      <Button variant="contained" color="primary" style={{ float: "right" }}>
        Program Details
      </Button>
    </div>
  );
};

export default Program;
