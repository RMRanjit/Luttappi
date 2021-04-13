import { React, useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { grey } from "@material-ui/core/colors";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Help from "@material-ui/icons/Help";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import theme from "../../theme";
//import history from "../history";

const Login = (props) => {
  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: "auto",
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      margin: "auto",
    },
    paper: {
      padding: 20,
      overflow: "auto",
    },
    buttonsDiv: {
      textAlign: "center",
      padding: 10,
    },
    flatButton: {
      color: grey[500],
      margin: 5,
    },
    checkRemember: {
      style: {
        float: "left",
        maxWidth: 180,
        paddingTop: 5,
      },
      labelstyle: {
        color: grey[500],
      },
      iconStyle: {
        color: grey[500],
        borderColor: grey[500],
        fill: grey[500],
      },
    },
    loginBtn: {
      float: "right",
    },
    btn: {
      background: "#4f81e9",
      color: "white",
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13,
    },
    btnFacebook: {
      background: "#4f81e9",
    },
    btnGoogle: {
      background: "#e14441",
    },
    btnSpan: {
      marginLeft: 5,
    },
  };

  const loginEmail = useRef();
  const loginPassword = useRef();

  const handleClick = () => {
    const userObject = [
      {
        login: loginEmail.current.value,
        password: loginPassword.current.value,
      },
    ];
    //history.push("/");

    if (props != undefined) {
      props.onLogin(userObject);
    }

    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}>
            <form>
              <TextField
                hinttext="E-mail"
                label="E-mail"
                fullWidth={true}
                inputRef={loginEmail}
              />
              <div style={{ marginTop: 16 }}>
                <TextField
                  hinttext="Password"
                  label="Password"
                  fullWidth={true}
                  type="password"
                  inputRef={loginPassword}
                />
              </div>

              <div style={{ marginTop: 10 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      label="Remember me"
                      style={styles.checkRemember.style}
                      labelstyle={styles.checkRemember.labelStyle}
                      iconstyle={styles.checkRemember.iconStyle}
                    />
                  }
                  label="Remember me"
                />
                <Link to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    style={styles.loginBtn}
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </form>
          </Paper>

          <div style={styles.buttonsDiv}>
            <Button href="/" style={styles.flatButton}>
              <PersonAdd />
              <span style={{ margin: 5 }}>Register</span>
            </Button>

            <Button href="/" style={styles.flatButton}>
              <Help />
              <span style={{ margin: 5 }}>Forgot Password?</span>
            </Button>
          </div>

          <div style={styles.buttonsDiv}>
            <Link to="/" style={{ ...styles.btn, ...styles.btnFacebook }}>
              <i className="fa fa-sign-in alt fa-lg" />
              <span style={styles.btnSpan}>Log in with Okta</span>
            </Link>
            <Link to="/" style={{ ...styles.btn, ...styles.btnGoogle }}>
              <i className="fa fa-google-plus fa-lg" />
              <span style={styles.btnSpan}>Log in with Google</span>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
