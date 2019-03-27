import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import backgroundImage from '../assets/images/bg.jpg';
import stackshareLogo from '../assets/images/stackshare-logo.png';
import dwdlogo from '../assets/images/dwd-logo.png';

const HomePanel = styled.div`
  position: relative;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  max-width: 950px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 1rem;
  }
  font-weight: 300;
  margin: 20px;
  padding: 0;
  strong {
    color: white;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-display: auto;
  }`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <HomePanel>
        <Wrapper>
          <Text>
            <p>
              <img height="150" src={dwdlogo} alt="Devs with Disabilities" />
            </p>
            <p>
              Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities. We plan to meetup
              monthly, talk tech, enjoy some beers{' '}
              <span role="img" aria-label="beer">
                🍺
              </span>{' '}
              or soda{' '}
              <span role="img" aria-label="soda">
                🥤
              </span>{' '}
              if thats your thing? (food and drink are always supplied)
            </p>
            <p>
              P.S. You don't need to be disabled to come along and enjoy, we
              don't discriminate... just come along and show some support{' '}
              <span role="img" aria-label="Yew">
                🤙🏻
              </span>
              .
            </p>
            <p>
              Our Amazing Sponsor
              <p>
                <a
                  href="https://stackshare.io"
                  title="StackShare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img height="30px" src={stackshareLogo} alt="StackShare" />
                </a>
              </p>
            </p>
          </Text>
        </Wrapper>
      </HomePanel>
    </>
  );
};

export default Home;
