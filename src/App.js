import React from "react";
import About from "./components/About";
import FirstPage from "./FirstPage";
import Anime from "./components/Anime";
import Watch from "./components/Watch";
import NoMatchPage from "./components/NoMatchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/watch/:anime/:episode" exact component={Watch} />
        <Route path="/anime/:anime" exact component={Anime} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={FirstPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
}

export default App;
