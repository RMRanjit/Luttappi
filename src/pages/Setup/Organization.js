/* eslint react/prop-types: 0 */
import { React, useState } from "react";
import propTypes from "prop-types";
import { Button } from "@material-ui/core";

import PageBase from "../../components/PageBase";
import HighLightedInformation from "../../components/common/HighlightedInformation";

//const styles = (theme) => ({});

const Organization = (props) => {
  const [counter, setCounter] = useState(0);

  const onClick = (event) => {
    props.NotificationEvent("Message from Organization" + counter);

    event.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div>
      <HighLightedInformation> To be implemented</HighLightedInformation>
      <PageBase title="Organization" navigation="Setup/Organizaion">
        <Button variant="contained" color="primary" onClick={onClick}>
          Organization Details
        </Button>
      </PageBase>
    </div>
  );
};

Organization.propTypes = {
  NotificationEvent: propTypes.func,
  message: propTypes.string,
};

Organization.defaultProps = {
  message: "Sample",
  NotificationEvent: null,
};

export default Organization;
