import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Landing from './components/Landing';
import PollForm from './components/PollForm';
import Vote from './components/Vote';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route path="/ask" component={PollForm} />
    <Route path="/vote" component={Vote} /> 
  </BrowserRouter>
)

export default Router;