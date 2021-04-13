import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import defaultTheme from "../theme";

import Card01 from "../components/Cards/Card01";
import PostCard from "../components/Cards/PostCard";
import PostCard02 from "../components/Cards/PostCard02";
import EngagementCard01 from "../components/Cards/EngagementCard01";
import NewsCard02 from "../components/Cards/NewsCard02";
import ReviewCard01 from "../components/Cards/ReviewCard01";
import ProjectCard01 from "../components/Cards/ProjectCard01";
import RewardCard01 from "../components/Cards/RewardCard01";
import ElevatedCardHeader01 from "../components/Cards/ElevatedCardHeader01";

const muiBaseTheme = createMuiTheme();

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const TestPageFunction = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Card01" {...a11yProps(0)} />
          <Tab label="PostCard" {...a11yProps(1)} />
          <Tab label="Reward" {...a11yProps(2)} />
          <Tab label="Engagement" {...a11yProps(3)} />
          <Tab label="News" {...a11yProps(4)} />
          <Tab label="Review" {...a11yProps(5)} />
          <Tab label="Project" {...a11yProps(6)} />
          <Tab label="Postcard02" {...a11yProps(7)} />
          <Tab label="Elevated Header" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card01
          color={defaultTheme.palette.Secondary}
          height="140px"
          title="Third One with style"
          style={{
            background: "linear-gradient(45deg, #7cbcf7 50%, #7c8cf7 100%)",
          }}
        >
          <div style={{ fontSize: 48, alignItems: "center" }}>180</div>
        </Card01>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: PostCard.getTheme(muiBaseTheme),
          })}
        >
          <PostCard
            Headline="Tab Panel 2"
            Content="THis is content from hello and it can go on and on and on and on"
            subContent="there is something"
          />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: RewardCard01.getTheme(muiBaseTheme),
          })}
        >
          <RewardCard01 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: EngagementCard01.getTheme(muiBaseTheme),
          })}
        >
          <EngagementCard01 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: NewsCard02.getTheme(muiBaseTheme),
          })}
        >
          <NewsCard02 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: ReviewCard01.getTheme(muiBaseTheme),
          })}
        >
          <ReviewCard01 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: ProjectCard01.getTheme(muiBaseTheme),
          })}
        >
          <ProjectCard01 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: PostCard02.getTheme(muiBaseTheme),
          })}
        >
          <PostCard02 />
        </MuiThemeProvider>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true,
            },
            overrides: ElevatedCardHeader01.getTheme(muiBaseTheme),
          })}
        >
          <ElevatedCardHeader01 />
        </MuiThemeProvider>
      </TabPanel>
    </div>
  );
};

export default TestPageFunction;
