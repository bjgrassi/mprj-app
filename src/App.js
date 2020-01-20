import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import backgroundImage from './pattern.png'

import Pokemon from './components/pokemon/Pokemon';
import NavBar from './components/layout/NavBar'
import Dashboard from './components/layout/Dashboard';
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
                <Route exact path="/pokemon/:index" component={Pokemon} />
                <Route exact path="/berry" component={BerryList} />
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
  }
  
  export default App;
