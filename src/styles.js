import { grey } from "@material-ui/core/colors";

const styles = (theme) => ({
  navigation: {
    fontSize: 15,
    fontWeight: 300,
    color: grey[600],
    paddingBottom: 15,
    display: "block",
  },
  title: {
    fontSize: 24,
    fontWeight: 300,
    marginBottom: 20,
  },
  paper: {
    padding: 30,
  },
  clear: {
    clear: "both",
  },
  ".row": {
    display: "flex",
    flexWrap: "wrap",
    marginRight: -theme.spacing(2),
    marginLeft: -theme.spacing(2),
  },
  ".container-fluid": {
    width: "100%",
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: 1370,
  },
  ".lg-mg-top": {
    marginTop: `${theme.spacing(20)}px !important`,
    [theme.breakpoints.down("md")]: {
      marginTop: `${theme.spacing(18)}px !important`,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: `${theme.spacing(16)}px !important`,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: `${theme.spacing(14)}px !important`,
    },
  },
  ".lg-mg-bottom": {
    marginBottom: `${theme.spacing(20)}px !important`,
    [theme.breakpoints.down("md")]: {
      marginBottom: `${theme.spacing(18)}px !important`,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: `${theme.spacing(16)}px !important`,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: `${theme.spacing(14)}px !important`,
    },
  },
  ".lg-p-top": {
    paddingTop: `${theme.spacing(20)}px !important`,
    [theme.breakpoints.down("md")]: {
      paddingTop: `${theme.spacing(18)}px !important`,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: `${theme.spacing(16)}px !important`,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: `${theme.spacing(14)}px !important`,
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

export default styles;
