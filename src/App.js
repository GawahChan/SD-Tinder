import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path="/">
            <Deck />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
