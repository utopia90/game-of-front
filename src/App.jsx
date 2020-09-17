import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Characters from './Pages/Characters/Characters';
import Menu from './Pages/Components/Shared/Menu/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import CharactersGallery from './Pages/Components/CharactersGallery/CharactersGallery';
import Chronology from './Pages/Chronology/Chronology';
import Houses from './Pages/Houses/Houses';
import CharDetail from './Pages/CharDetail/CharDetail';


function App() {
    return (
        <body>
            <Router>
                <div className="App">

                    <Switch>
                        <Route path="/personajes/:name">
                            <CharDetail />
                        </Route>
                        <Route path="/personajes">
                            <Characters />
                        </Route>
                        <Route path="/casas">
                            <Houses />
                        </Route>
                        <Route path="/cronologia">
                            <Chronology />
                        </Route>
                        <Route path="/">
                            <HomePage />
                            
                        </Route>
                    </Switch> 
                </div>

                <Menu />
            </Router>
            
        </body>
    )
}

export default App;
