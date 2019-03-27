import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { Home } from './Home';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-display: auto;
  }`;

export default () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
    </Helmet>
    <Home />
  </>
);
