import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Landing from './components/Landing';
import Polls from './components/Polls';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/ask" component={Polls} />
      {/* <Route path="/poll" component={} />  */}
    </Switch>
  </BrowserRouter>
)

export default Router;