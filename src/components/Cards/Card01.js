import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

//import format from "date-fns/format";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  withStyles,
  Box,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = (theme) => ({
  cardContent: {
    marginTop: theme.spacing(-4),
    padding: 1,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
});

const itemHeight = 216;

function Card01(props) {
  const {
    color,
    title,
    classes,
    theme,
    height,
    style,
    options,
    optionSelected,
    children,
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const selectOption = useCallback(
    (selectedOption) => {
      setSelectedOption(selectedOption);
      handleClose();
      optionSelected();
    },
    [setSelectedOption, handleClose]
  );

  const isOpen = Boolean(anchorEl);
  return (
    <Card style={style}>
      <Box pt={0} px={0} pb={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          color={color}
          theme={theme}
        >
          <div>
            <Typography
              className={"headLabel"}
              variant={"overline"}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              className={"Heading"}
              variant={"body1"}
              color="textSecondary"
            >
              {selectedOption}
            </Typography>
          </div>
          {showMenu()}
        </Box>
      </Box>
      <CardContent className={classes.cardContent}>
        <Box height={height} mx={-0.5} my={-0.5}>
          {children}
        </Box>
      </CardContent>
    </Card>
  );

  //Determine if Options are provided, If provided show the menu icon and the menu under it...
  function showMenu() {
    if (options !== undefined && options.length > 0) {
      return (
        <div>
          <IconButton
            aria-label="More"
            aria-owns={isOpen ? "long-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: itemHeight,
                width: 200,
              },
            }}
            disableScrollLock
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === selectedOption}
                onClick={() => {
                  selectOption(option);
                }}
                name={option}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
    } else {
      return null;
    }
  }
}

Card01.defaultProps = {
  options: [],
  children: <></>,
  optionSelected: () => {},
};

Card01.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  height: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
  options: PropTypes.array,
  optionSelected: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(Card01);
