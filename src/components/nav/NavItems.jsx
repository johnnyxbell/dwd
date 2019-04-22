import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import { WHITE } from '../../styles/colors';
import { FONT_FAMILY } from '../../styles/typography';

const Items = styled.nav`
  a {
    color: ${WHITE};
    text-decoration: none;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    @media (max-width: 769px) and (min-width: 320px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
    }
  }
  li {
    list-style-type: none;
    color: white;
    @media (max-width: 769px) and (min-width: 320px) {
      font-family: ${FONT_FAMILY};
      font-size: 20px;
      padding: 10px 0;
    }
  }
`;

const NavItems = () => {
  return (
    <Items>
      <ul>
        <li>
          <Link to="/" aria-label="Home page for Devs with Disabilities">
            Home
          </Link>
        </li>
        <li>
          <Link to="/speak/" aria-label="Speak at the Devs with Disabilities meetup">
            CFP
          </Link>
        </li>
        <li>
          <Link to="/sponsor/" aria-label="Sponsor the Devs With Disabilities Meetup">
            Sponsor / Host
          </Link>
        </li>
        <li>
          <Link to="/swag/" aria-label=" Devs With Disabilities Meetup Swag">
            Swag
          </Link>
        </li>
        <li>
          <Link to="/code-of-conduct/" aria-label=" Devs With Disabilities Meetup Code of Conduct">
            Conduct
          </Link>
        </li>
        <li>
          <Link to="/contact/" aria-label="Contact Devs With Disabilities">
            Contact
          </Link>
        </li>
      </ul>
    </Items>
  );
};

export default NavItems;
