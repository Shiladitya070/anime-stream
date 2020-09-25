import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import Switch from "@material-ui/core/Switch";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function App() {
  const [darkmode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
    },
  });

  function themeSwitch() {}

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100%" }}>
        <div className="App">
          <Navbar />

          <Search />

          <div className="video__card">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
          <p>Toggle Dark/Light Mode</p>
          <Switch checked={darkmode} onChange={() => setDarkMode(!darkmode)} />

          <Footer />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
