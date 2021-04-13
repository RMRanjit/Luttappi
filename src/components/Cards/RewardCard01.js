/* eslint-disable max-len,no-script-url */
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const RewardCard01 = (props) => {
  const { Headline, Highlight, Content, image } = props;

  return (
    <Card className={"MuiRewardCard--01"}>
      <CardContent className={"MuiCardContent-root"}>
        <Typography className={"MuiTypography--overline"} variant={"overline"}>
          {Headline}
        </Typography>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {Content}
        </Typography>
        <Button className={"MuiButton--readMore"}>{Highlight}</Button>
      </CardContent>
      <CardMedia className={"MuiCardMedia-root"} image={image} />
    </Card>
  );
};

RewardCard01.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiRewardCard--01": {
        borderRadius: muiBaseTheme.spacing(2), // 16px
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        width: "95%",
        position: "relative",
        maxWidth: 800,
        marginLeft: "auto",
        overflow: "initial",
        display: "flex",
        alignItems: "center",
        paddingLeft: 8,
        paddingRight: 8,
        background:
          "linear-gradient(34deg, rgba(55,16,83,1) 0%, rgba(162,73,190,1) 29%, rgba(33,16,83,1) 92%)",
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          width: "30%",
          paddingTop: "30%",
          marginLeft: "auto",
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: muiBaseTheme.spacing(2),
        },
        "& .MuiTypography--overline": {
          lineHeight: 2,
          color: "#ffffff",
          fontWeight: "bold",
          opacity: 0.7,
        },
        "& .MuiTypography--heading": {
          fontWeight: "900",
          color: "#ffffff",
          letterSpacing: 0.5,
        },
        "& .MuiTypography--subheading": {
          marginBottom: muiBaseTheme.spacing(2),
          color: "#ffffff",
        },
        "& .MuiButton--readMore": {
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: 100,
          paddingLeft: 48,
          paddingRight: 48,
          color: "#ffffff",
          textTransform: "none",
        },
      },
    },
  },
});

RewardCard01.defaultProps = {
  Headline: "Headline",
  Highlight: "Action",
  Content: "Content goes here",
  image:
    "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80",
};

RewardCard01.propTypes = {
  Headline: PropTypes.string,
  Highlight: PropTypes.string,
  Content: PropTypes.string,

  image: PropTypes.string,
};

RewardCard01.metadata = {
  name: "Reward Card",
  description: "Commonly used in games.",
};

export default RewardCard01;
