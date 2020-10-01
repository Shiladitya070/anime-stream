import React, { useState } from "react";
import "./components/css/FirstPage.css";
import "./App.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import Search from "./components/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, InputBase } from "@material-ui/core";

function FirstPage() {
  const [darkmode, setDarkMode] = useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: 10,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Anime Stream
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              {"  Dark Mode "}
              <Switch
                checked={darkmode}
                onChange={() => setDarkMode(!darkmode)}
              />
              <Button color="inherit">Login</Button>
              <Avatar />
            </Toolbar>
          </AppBar>

          <div className="video__card">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>

          <Footer />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default FirstPage;
