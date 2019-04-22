import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import ReactGA from 'react-ga';
import backgroundImage from '../../assets/images/bg.jpg';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

const Container = styled.div`
  position: relative;
  background: url(${backgroundImage}) repeat center center;
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  max-width: 750px;
  margin: auto;
  padding: 50px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }`;

const LayoutPage = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize('UA-137174658-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Container>
        <Main>{children}</Main>
      </Container>
      <Footer />
    </>
  );
};

export default LayoutPage;
