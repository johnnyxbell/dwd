import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import dwdLogo from '../../assets/images/dwd-logo-small.png';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WHITE, SILVER, PICTON_BLUE_TRANSPARENT } from '../../styles/colors';
import { FONT_FAMILY } from '../../styles/typography';
import NavItems from './NavItems';

const Navigation = styled.nav`
  @media (max-width: 769px) and (min-width: 320px) {
    display: none;
  }
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  height: 50px;
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

const Hamburger = styled.div`
  font-size: 20px;
`;

const MobileNav = styled.nav`
  @media (max-width: 769px) and (min-width: 320px) {
    display: flex;
  }
  @media (min-width: 769px) {
    display: none;
  }
  padding: 0 10px;
  box-sizing: border-box;
  margin: 0;
  position: absolute;
  top: 0;
  height: 50px;
  width: 100%;
  background: ${PICTON_BLUE_TRANSPARENT};
  z-index: 1;
  font-family: ${FONT_FAMILY};
  justify-content: ${props => (props.showHamburger ? 'flex-end' : 'space-between')};
  align-items: center;
`;

const MobileItems = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  background: black;
  height: 100vh;
  top: 50px;
`;

const Nav = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <>
      <Navigation>
        <Link to="/" aria-label="Home page for Devs with Disabilities">
          <img height={40} src={dwdLogo} alt="Devs with Disabilities Logo" />
        </Link>
        <NavItems />
      </Navigation>
      <MobileNav showHamburger={showHamburger}>
        {!showHamburger && (
          <Link to="/" aria-label="Home page for Devs with Disabilities">
            <img height={30} src={dwdLogo} alt="Devs with Disabilities Logo" />
          </Link>
        )}
        <Hamburger onClick={() => setShowHamburger(!showHamburger)}>
          {showHamburger ? (
            <FontAwesomeIcon
              size="lg"
              width="30px"
              height="30px"
              icon={faTimesCircle}
              role="img"
              aria-label="Open Mobile Menu"
              color={SILVER}
            />
          ) : (
            <FontAwesomeIcon
              size="lg"
              width="30px"
              height="30px"
              icon={faBars}
              role="img"
              aria-label="Close Mobile Menu"
              color={SILVER}
            />
          )}
        </Hamburger>
      </MobileNav>
      {showHamburger && (
        <MobileItems>
          <NavItems />
        </MobileItems>
      )}
    </>
  );
};

export default Nav;
