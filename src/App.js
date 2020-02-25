import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HOME_URL, DECK_URL, ABOUT_URL } from "./Constants";

import { GlobalStyle } from "./App.styles";
import Menu from "./Components/Menu/Menu";
import Deck from "./Components/Deck/Deck";
import About from "./Components/About/About";
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Menu />
        <Switch>
          <Route exact path={HOME_URL}>
            <Results />
          </Route>
          <Route exact path={DECK_URL}>
            <Deck />
          </Route>
          <Route exact path={ABOUT_URL}>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
