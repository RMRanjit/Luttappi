/* eslint-disable max-len,no-script-url */
import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CardHeader from "@material-ui/core/CardHeader";

import purple from "@material-ui/core/colors/purple";

const ElevatedCardHeader01 = (props) => {
  const { title, subHeader, children } = props;

  return (
    <Card className={"MuiElevatedCard--01"}>
      <CardHeader
        className={"MuiCardHeader-root"}
        title={title}
        subheader={subHeader}
        classes={{
          title: "MuiCardHeader-title",
          subheader: "MuiCardHeader-subheader",
        }}
      />
      <CardContent className={"MuiCardContent-root"}>
        <div className={"MuiCardContent-inner"}>{children}</div>
      </CardContent>
    </Card>
  );
};

ElevatedCardHeader01.getTheme = (muiBaseTheme) => {
  const offset = 40;
  const cardShadow = "0px 14px 80px rgba(34, 35, 58, 0.2)";
  const headerShadow = "4px 4px 20px 1px rgba(0, 0, 0, 0.2)";
  return {
    MuiCard: {
      root: {
        "&.MuiElevatedCard--01": {
          marginTop: offset,
          borderRadius: muiBaseTheme.spacing.unit / 2,
          transition: "0.3s",
          boxShadow: cardShadow,
          position: "relative",
          width: "90%",
          overflow: "initial",
          background: "#ffffff",
          padding: `${muiBaseTheme.spacing(2)}px 0`,
          "& .MuiCardHeader-root": {
            flexShrink: 0,
            position: "absolute",
            top: -offset,
            right: 20,
            left: 20,
            borderRadius: muiBaseTheme.spacing.unit / 2,
            backgroundColor: purple[500],
            overflow: "hidden",
            boxShadow: headerShadow,
            textAlign: "left",
            "& .MuiCardHeader-title": {
              color: "#ffffff",
              fontWeight: 900,
              letterSpacing: 1,
            },
            "& .MuiCardHeader-subheader": {
              color: "#ffffff",
              opacity: 0.87,
              fontWeight: 200,
              letterSpacing: 0.4,
            },
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            "& .MuiCardContent-inner": {
              paddingTop: "38px",
              overflowX: "auto",
            },
          },
        },
      },
    },
  };
};

ElevatedCardHeader01.defaultProps = {
  title: "Header",
  subHeader: "Subtitle",
  children: <></>,
};

ElevatedCardHeader01.propTypes = {
  title: PropTypes.string,
  subHeader: PropTypes.string,
  children: PropTypes.node,
};

ElevatedCardHeader01.metadata = {
  name: "Elevated Card Header I",
  description: "Wonderful elevated card header",
};

export default ElevatedCardHeader01;
