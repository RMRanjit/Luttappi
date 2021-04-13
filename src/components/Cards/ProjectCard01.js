/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const ProjectCard01 = (props) => {
  const { Headline, Highlight, subHeader, Content, image } = props;
  return (
    <Card className={"MuiProjectCard--01"}>
      <div className={"MuiCard__head"}>
        <Avatar className={"MuiAvatar-root"} src={image} />
        <Typography
          className={"MuiTypography--headLabel"}
          variant={"overline"}
          gutterBottom
        >
          {Highlight}
        </Typography>
      </div>
      <Divider className={"MuiDivider-root"} light />
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--overline"}
          variant={"overline"}
          gutterBottom
        >
          {Headline}
        </Typography>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h5"}
          gutterBottom
        >
          {subHeader}
        </Typography>
        <Typography className={"MuiTypography--subheading"} gutterBottom>
          {Content}
        </Typography>
      </CardContent>
    </Card>
  );
};

ProjectCard01.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiProjectCard--01": {
        transition: "0.3s",
        maxWidth: 304,
        margin: "auto",
        borderRadius: 16,
        padding: muiBaseTheme.spacing(3),
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        },
        "& .MuiCard__head": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& .MuiAvatar-root": {
            width: 60,
            height: 60,
            backgroundColor: "#ffffff",
            transform: "translateY(50%)",
          },
          "& .MuiTypography--headLabel": {
            color: muiBaseTheme.palette.grey[500],
          },
        },
        "& .MuiDivider-root": {
          marginLeft: -muiBaseTheme.spacing(3),
          marginRight: -muiBaseTheme.spacing(3),
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: 0,
          paddingTop: muiBaseTheme.spacing(6),
          "& .MuiTypography--overline": {
            fontSize: 16,
            fontWeight: "bold",
            color: muiBaseTheme.palette.grey[500],
          },
          "& .MuiTypography--heading": {
            fontWeight: 900,
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
          },
        },
      },
    },
  },
});

ProjectCard01.defaultProps = {
  Headline: "Headline",
  Highlight: "0.00",
  Content: "content is displayed here",
  subHeader: " Subheader",
  image:
    "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png",
};

ProjectCard01.propTypes = {
  Headline: PropTypes.string,
  Highlight: PropTypes.string,
  Content: PropTypes.string,
  subHeader: PropTypes.string,
  image: PropTypes.string,
};

ProjectCard01.displayName = "Card";
ProjectCard01.metadata = {
  name: "Project Card",
  description: "Widely used in Dashboard UI",
};

export default ProjectCard01;
