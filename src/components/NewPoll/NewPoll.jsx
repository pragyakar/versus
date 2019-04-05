import React from 'react';
import Header from '../commons/Header/Header';  
import PollForm from './Form';

const NewPoll = () => (   
  <div className="main-container">
    <Header />  
    <div className="polls-container">
      <br />
      <PollForm />
    </div>
  </div>
)

export default (NewPoll);
