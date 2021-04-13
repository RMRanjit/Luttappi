/* eslint react/prop-types: 0 */
import { React, useEffect, useState, Fragment } from "react";
import propTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const PushNotificationBar = (props) => {
  const [open, setOpen] = useState(false);
  //console.log(`PushNotificationBar is called with message : ${props.message}`);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.message != "");
  }, [props.message]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={props.message}
        action={
          <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </div>
  );
};

PushNotificationBar.propTypes = {
  NotificationEvent: propTypes.func,
  message: propTypes.string,
};

PushNotificationBar.defaultProps = {
  message: "Sample",
  NotificationEvent: null,
};

export default PushNotificationBar;
