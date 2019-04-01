import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/speak/">Speak</Link>
        </li>
        <li>
          <Link to="/sponsor/">Sponsor</Link>
        </li>
        <li>
          <Link to="/contact/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
