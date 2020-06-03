import React from 'react';
import { Link } from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div>
      <h1>Cannot find this page</h1>
      <Link to='/'>Return Home</Link>
    </div>
  )
};

export default DefaultPage;
