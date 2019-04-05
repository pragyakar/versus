import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Landing from './components/Landing';
import Vote from './components/Vote';
import NewPoll from './components/NewPoll/NewPoll';
import Report from './components/Report/Report';

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path="/" component={Landing} />
    <Route path="/ask" component={NewPoll} />
    <Route path="/report" component={Report} />
    <Route path="/vote" component={Vote} /> 
  </BrowserRouter>
)

export default Router;