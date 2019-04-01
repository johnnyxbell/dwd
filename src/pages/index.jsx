import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import Home from './Home';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import backgroundImage from '../assets/images/bg.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

const Speak = () => {
  return <h2>Speak</h2>;
};

const Sponsor = () => {
  return <h2>Sponsor</h2>;
};

const Contact = () => {
  return <h2>Contact</h2>;
};

const App = () => {
  useEffect(() => {
    ReactGA.initialize('UA-137174658-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <Router>
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
        <Container>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/speak/" component={Speak} />
          <Route path="/sponsor/" component={Sponsor} />
          <Route path="/contact/" component={Contact} />
        </Container>
      </>
    </Router>
  );
};

export default App;
