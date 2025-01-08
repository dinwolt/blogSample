import React from 'react';
import {Link} from 'gatsby'

const Navbar = () => {
  return (
    <nav>
      <h1></h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;