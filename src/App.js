import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />

      <div className="video__card">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
