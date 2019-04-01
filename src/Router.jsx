import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import Landing from './components/Landing';
import PollForm from './components/PollForm';
import Vote from './components/Vote';

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
    <Route path={process.env.PUBLIC_URL + '/ask'} component={PollForm} />
    <Route path={process.env.PUBLIC_URL + '/vote'} component={Vote} /> 
  </BrowserRouter>
)

export default Router;