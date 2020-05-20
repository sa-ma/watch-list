import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Moviedetails from './Components/Moviedetails';
import SearchDetails from './Components/SearchDetails';
import Seriesdetails from './Components/Seriesdetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route path="/" exact component={Header} />
              <Route path={"/movie/:name"}  component={Moviedetails}/>
              <Route path={"/search/:name"}  component={SearchDetails}/>
              <Route path={"/series/:id"}  component={Seriesdetails}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
