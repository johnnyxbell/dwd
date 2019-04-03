import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import { WHITE, PICTON_BLUE_TRANSPARENT } from '../../styles/colors';
import { FONT_FAMILY } from '../../styles/typography';

const Navigation = styled.nav`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  height: 40px;
  width: 100%;
  background: ${PICTON_BLUE_TRANSPARENT};
  z-index: 1;
  font-family: ${FONT_FAMILY};
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: ${WHITE};
    text-decoration: none;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    color: white;
    margin-right: 20px;
    &:last-child {
      margin: 0;
    }
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/" aria-label="Home page for Devs with Disabilities">
            Home
          </Link>
        </li>
        <li>
          <Link to="/speak/" aria-label="Speak at the Devs with Disabilities meetup">
            Speak
          </Link>
        </li>
        <li>
          <Link to="/sponsor/" aria-label="Sponsor the Devs With Disabilities Meetup">
            Sponsor / Host
          </Link>
        </li>
        <li>
          <Link to="/contact/" aria-label="Contact Devs With Disabilities">
            Contact Us
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default Nav;
