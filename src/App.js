import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Moviedetails from './Components/Moviedetails';
import SearchDetails from './Components/SearchDetails';
import Seriesdetails from './Components/Seriesdetails';
import SearchBox from './Components/SearchBox';
import NotFound from './Components/NotFound';

function App() {
  return(
    <Router>
      <div className="App">
          <Switch>
              <Route path="/" exact component={Header} />
              <Route path={"/movie/:name"}  component={Moviedetails}/>
              <Route path={"/search"} exact component={SearchBox}/>
              <Route path={"/search/:name"}  component={SearchDetails}/>
              <Route path={"/series/:id"}  component={Seriesdetails}/>
              <Route path="*" component={NotFound} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
