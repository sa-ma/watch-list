import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Moviedetails from './Components/Moviedetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route path="/" exact component={Header} />
              <Route path={"/overview/:name"}  component={Moviedetails}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
