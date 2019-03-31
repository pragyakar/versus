import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../commons/Header/Header';

const Landing = () => (
  <div className="main-container">
    <Header />        
    <div className="landing-container">
      <Link to='/ask' className="btn-ask">
        Start new poll
      </Link>
    </div>
  </div>
)

export default Landing;