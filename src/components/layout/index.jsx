import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import backgroundImage from '../../assets/images/bg.jpg';
import Nav from '../nav/Nav';

const Container = styled.div`
  position: relative;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-display: auto;
  }`;

const Layout = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize('UA-137174658-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
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
      <Nav />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
