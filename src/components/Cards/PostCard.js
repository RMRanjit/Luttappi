/* eslint-disable max-len,no-script-url */
import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const PostCard = (props) => {
  const { Headline, Highlight, Content, subContent, avatar, image } = props;
  return (
    <Card className={"MuiPostCard--01"}>
      <CardMedia className={"MuiCardMedia-root"} image={image}>
        <div className={"MuiTag--ribbon"}>
          <Typography color={"inherit"} className={"MuiTypography-root"}>
            {Highlight}
          </Typography>
        </div>
        <Avatar className={"MuiAvatar-root"} src={avatar} />
      </CardMedia>
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {Headline}
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          {Content}
        </Typography>
      </CardContent>
      <CardActions className={"MuiCardActions-root"}>
        <Typography variant={"caption"}>
          <Link underline={"none"}>{subContent}</Link>
        </Typography>
        <div>
          <IconButton>
            <Icon>share</Icon>
          </IconButton>
          <IconButton>
            <Icon>favorite_border_rounded</Icon>
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
};

PostCard.getTheme = (muiBaseTheme) => ({
  MuiCard: {
    root: {
      "&.MuiPostCard--01": {
        transition: "0.3s",
        maxWidth: 304,
        margin: "auto",
        boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
        },
        "& .MuiCardMedia-root": {
          paddingTop: "56.25%",
          position: "relative",
          "& .MuiTag--ribbon": {
            position: "absolute",
            top: muiBaseTheme.spacing(2),
            left: muiBaseTheme.spacing(2),
            backgroundColor: muiBaseTheme.palette.secondary.main,
            color: "#ffffff !important",
            padding: "2px 8px",
            boxShadow: "0 2px 12px 2px rgba(0,0,0,0.5)",
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            "&:before, &:after": {
              position: "absolute",
              right: -16,
              content: " ",
              borderLeft: `16px solid ${muiBaseTheme.palette.secondary.main}`,
            },
            "&:before": {
              top: 0,
              borderBottom: "12px solid transparent",
            },
            "&:after": {
              bottom: 0,
              borderTop: "12px solid transparent",
            },
            "& .MuiTypography-root": {
              fontWeight: "bold",
            },
          },
          "& .MuiAvatar-root": {
            position: "absolute",
            right: "12%",
            bottom: 0,
            transform: "translateY(20%)",
            width: 48,
            height: 48,
            zIndex: 1,
          },
          "&:after": {
            content: " ",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            borderBottom: "32px solid #ffffff",
            borderLeft: "400px solid transparent",
          },
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          padding: muiBaseTheme.spacing(3),
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
        },
        "& .MuiTypography--subheading": {
          lineHeight: 1.8,
        },
        "& .MuiCardActions-root": {
          padding: `0 ${muiBaseTheme.spacing(3)}px ${muiBaseTheme.spacing(
            3
          )}px`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
      },
    },
  },
});
PostCard.displayName = "Card";
PostCard.metadata = {
  name: "Post Card",
  description: "Personal Post",
};

PostCard.defaultProps = {
  Headline: "Headline",
  Highlight: "0.00",
  Content: "",
  subContent: "",
  avatar: "http://i.pravatar.cc/300?img=5",
  image:
    "https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80",
};

PostCard.propTypes = {
  Headline: PropTypes.string,
  Highlight: PropTypes.string,
  Content: PropTypes.string,
  subContent: PropTypes.string,
  avatar: PropTypes.string,
  image: PropTypes.string,
};

export default PostCard;
