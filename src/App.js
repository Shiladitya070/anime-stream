import React from "react";
import About from "./components/About";
import FirstPage from "./FirstPage";
import Anime from "./components/Anime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={FirstPage} />
        <Route path="/anime" exact component={Anime} />
      </Switch>
    </Router>
  );
}

export default App;
