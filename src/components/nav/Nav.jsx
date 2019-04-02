import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';

const Navigation = styled.nav`
  padding: 0;
  margin: 0;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
`;

const Nav = () => {
  return (
    <Navigation>
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
    </Navigation>
  );
};

export default Nav;
