import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Moviedetails from './components/Moviedetails';
import SearchDetails from './components/SearchDetails';
import Seriesdetails from './components/Seriesdetails';
import SearchBox from './components/SearchBox';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/movie/:name" component={Moviedetails} />
        <Route path="/search" component={SearchBox} />
        <Route path="/search/:name" component={SearchDetails} />
        <Route path="/series/:id" component={Seriesdetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
