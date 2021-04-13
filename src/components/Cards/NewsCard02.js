/* eslint-disable max-len,no-script-url */
import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const NewsCard02 = (props) => {
  const { Headline, Highlight, Content, image } = props;
  return (
    <Card className={"MuiNewsCard--02"}>
      <CardMedia
        component={"img"}
        className={"MuiCardMedia-root"}
        src={image}
      />
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--heading"}
          color={"inherit"}
          variant={"h3"}
          gutterBottom
        >
          {Headline}
        </Typography>
        <Typography className={"MuiTypography--subheading"} color={"inherit"}>
          {Content}
        </Typography>
        <Typography
          className={"MuiTypography--explore"}
          color={"inherit"}
          variant={"caption"}
        >
          <Link color={"inherit"} underline={"none"}>
            {Highlight}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

NewsCard02.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiNewsCard--02": {
        maxWidth: 304,
        margin: "auto",
        position: "relative",
        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
        boxShadow: "0 16px 40px -12.125px rgba(0,0,0,0.3)",
        borderRadius: 0,
        "&:hover": {
          "& .MuiTypography--explore": {
            transform: "scale(1.2)",
          },
        },
        "& button": {
          marginLeft: 0,
        },
        "& .MuiCardMedia-root": {
          height: "100%",
        },
        "& .MuiCardContent-root": {
          position: "absolute",
          bottom: 0,
          padding: muiBaseTheme.spacing(3),
          color: muiBaseTheme.palette.common.white,
          textAlign: "center",
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
            letterSpacing: 0.5,
            marginBottom: "40%",
          },
          "& .MuiTypography--explore": {
            marginBottom: 16,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            letterSpacing: 2,
          },
        },
      },
    },
  },
});

NewsCard02.defaultProps = {
  Headline: "Headline",
  Highlight: "0.00",
  Content: "",

  image:
    "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80",
};

NewsCard02.propTypes = {
  Headline: PropTypes.string,
  Highlight: PropTypes.string,
  Content: PropTypes.string,

  image: PropTypes.string,
};

NewsCard02.metadata = {
  name: "News Card II",
  description: "Best for Blog",
};

export default NewsCard02;
