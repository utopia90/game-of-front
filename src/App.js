import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Chronology from "./Pages/Chronology/Chronology"

function App() {
  return (
    <Router>
        
          <Switch>
              <Route path="/Chronology">
                  <Chronology/>
              </Route>
          </Switch>
    </Router>
  );
}

export default App;
