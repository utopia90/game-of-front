import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Houses from "./Pages/Houses/Houses.jsx";
import HouseDetail from "./Pages/HouseDetail/HouseDetail";
import CharDetail from "./Pages/CharDetail/CharDetail";
import Characters from "./Pages/Characters/Characters";
import HomePage from "./Pages/Homepage/Homepage";
import Menu from "./Pages/Components/Shared/Menu/Menu";
import Chronology from "./Pages/Chronology/Chronology.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/houses/:name">
          <HouseDetail />
        </Route>
        <Route path="/characters/:name">
          <CharDetail />
        </Route>
        <Route path="/houses">
          <Houses />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/chronology">
          <Chronology/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Menu />
    </Router>
  );
}

export default App;