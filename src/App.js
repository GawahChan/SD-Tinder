import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HOME_URL, RESULTS_URL } from "./Constants";

import { GlobalStyle } from "./App.styles";
import Menu from "./Components/Menu/Menu";
import Deck from "./Components/Deck/Deck";
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Menu />
        <Switch>
          <Route exact path={HOME_URL}>
            <Deck />
          </Route>
          <Route exact path={RESULTS_URL}>
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;