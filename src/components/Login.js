/* eslint react/prop-types: 0 */
import { React, useRef, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import {
  Paper,
  isWidthUp,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";

import { grey } from "@material-ui/core/colors";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Help from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import theme from "../theme";

//import history from "../history";
import { authenticationService } from "../Services";

const Login = (props) => {
  const { onLogin, width } = props;

  const [validation, setValidation] = useState("");

  const styles = {
    loginContainer: {
      minWidth: 200,
      maxWidth: 350,
      height: "auto",
      position: "relative",
      top: "20%",
      left: 0,
      right: 0,
      margin: "auto",
    },
    paper: {
      padding: 5,
      overflow: "auto",
    },
    buttonsDiv: {
      textAlign: "center",
      padding: 2,
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
      fontSize: 12,
    },
    btnOkta: {
      background: "#4f81e9",
    },
    btnGoogle: {
      background: "#e14441",
    },
    btnSpan: {
      marginLeft: 1,
    },
  };

  const loginEmail = useRef();
  const loginPassword = useRef();

  const handleClick = (event) => {
    authenticationService
      .login(loginEmail.current.value, loginPassword.current.value)
      .then(
        (user) => {
          if (props != undefined) {
            onLogin(user);
          }
        },
        (error) => {
          console.log("Error Occured :" + error);
          setValidation(error);
        }
      );

    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div style={styles.loginContainer}>
          <Paper style={styles.paper}>
            <form>
              <TextField
                hinttext="User Name eg. admin , user1, planner, approver"
                label="User Name"
                fullWidth={true}
                inputRef={loginEmail}
                error={status === "invalidEmail"}
                required={true}
                autoFocus={true}
                autoComplete="off"
                type="text"
                // onChange={() => {
                //   if (validation === "invalidEmail") {
                //     setValidation(null);
                //   }
                // }}
                //helperText={validation}
                FormHelperTextProps={{ error: true }}
              />
              <div style={{ marginTop: 16 }}>
                <TextField
                  hinttext="Password"
                  label="Password"
                  fullWidth={true}
                  type="password"
                  inputRef={loginPassword}
                  autoComplete="off"
                  FormHelperTextProps={{ error: true }}
                  helperText={
                    validation !== "" ? (
                      <span>
                        Incorrect username/password. Try again, or click on{" "}
                        <b>&quot;Forgot Password?&quot;</b> to reset it.
                      </span>
                    ) : (
                      ""
                    )
                  }
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
              <span style={{ margin: 1 }}>Register</span>
            </Button>

            <Button href="/" style={styles.flatButton}>
              <Help />
              <span style={{ margin: 1 }}>Forgot Password?</span>
            </Button>
          </div>

          <div style={styles.buttonsDiv}>
            <Link to="/" style={{ ...styles.btn, ...styles.btnOkta }}>
              <i className="fa fa-sign-in alt fa-lg" />
              <span style={styles.btnSpan}>
                {isWidthUp("md", width) ? "Okta" : "Log in with Okta"}
              </span>
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
Login.defaultProps = {
  onLogin: () => {},
};

export default Login;
