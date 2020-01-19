import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import backgroundImage from './pattern.png'

import NavBar from './components/layout/NavBar'
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon'
import BerryList from './components/berry/BerryList';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App" style={{ background: `url(${backgroundImage})` }}>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/:pokemonIndex" component={Pokemon} />
                <Route exact path="/berries" component={BerryList} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default App;
