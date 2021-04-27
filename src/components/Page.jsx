import React from 'react';
import NavBar from 'containers/Navbar';

export default ({ Component }) => (
  <div>
    <NavBar />
    <Component />
  </div>
);
