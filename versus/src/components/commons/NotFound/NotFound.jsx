import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <p>There are no active polls currently.</p>
    <br />
    <Link to='/ask' className="btn-ask">Start a new Poll</Link>
  </div>
)

export default NotFound;