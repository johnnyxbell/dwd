import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import backgroundImage from '../assets/images/bg.jpg';
import stackshareLogo from '../assets/images/stackshare-logo.png';
import dwdlogo from '../assets/images/dwd-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faMeetup,
} from '@fortawesome/free-brands-svg-icons';

ReactGA.initialize('UA-137174658-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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

const Social = styled.div`
  a {
    color: #fff;
    font-size: 2rem;
    margin-right: 10px;
    &:last-child {
      margin: 0;
    }
    &:hover {
      color: #ccc;
    }
  }
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

const TextSmall = styled.p`
  font-size: 1.1rem;
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
        <title>Devs With Disabilities</title>
        <link rel="canonical" href="https://dwd.dev" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
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
              if thats your thing? (food and drink are always supplied).
            </p>
            <TextSmall>
              P.S. You don't need to be disabled to come along and enjoy, we
              don't discriminate... just come along and show some support{' '}
              <span role="img" aria-label="Yewwww">
                🤙🏻
              </span>
              .
            </TextSmall>
            <p>Find us online</p>
            <Social>
              <a
                href="https://twitter.com/dwddev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com/dwddev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://meetup.com/Devs-With-Disabilities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMeetup} />
              </a>
            </Social>
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
