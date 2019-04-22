import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import { WHITE, SILVER, PICTON_BLUE } from '../../styles/colors';
import { FONT_FAMILY } from '../../styles/typography';

const Heart = styled.span`
  color: ${PICTON_BLUE};
`;

const Navigation = styled.footer`
  padding: 0;
  margin: 0;
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  bottom: 0;
  width: 100%;
  background: black;
  z-index: 1;
  font-family: ${FONT_FAMILY};
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    color: ${SILVER};
    font-size: 0.8rem;
  }
  a {
    color: ${WHITE};
    text-decoration: none;
  }
`;

const Divider = styled.div`
  padding: 0 5px;
  @media (max-width: 769px) and (min-width: 320px) {
    display: none;
  }
`;

const ExtraDetails = styled.span`
  @media (max-width: 769px) and (min-width: 320px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <Navigation>
      <div>
        Made with <Heart>❤</Heart> by{' '}
        <a href="https://www.johnnybell.io" aria-label="Johnny Bells portfolio">
          johnnyxbell
        </a>
      </div>
      <Divider>|</Divider>
      <div>
        <ExtraDetails>
          <Link to="/code-of-conduct" aria-label="Devs with Disabilities Code of Conduct">
            Conduct
          </Link>
        </ExtraDetails>
      </div>
      <Divider>|</Divider>
      <div>
        <ExtraDetails>
          Hosted by{' '}
          <a href="https://www.netlify.com/" aria-label="Netlify website">
            Netlify
          </a>{' '}
          &amp; Built with{' '}
          <a href="https://www.gatsbyjs.org/" aria-label="GatsbyJS Website">
            Gatsby
          </a>
        </ExtraDetails>
      </div>
    </Navigation>
  );
};

export default Footer;
