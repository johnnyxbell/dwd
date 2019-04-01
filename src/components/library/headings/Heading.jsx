import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { WHITE } from '../../../styles/colors';
import { WEIGHT, FONT_FAMILY } from '../../../styles/typography';

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${WHITE};
  font-weight: ${WEIGHT.THIN};
  font-family: ${FONT_FAMILY};
`;

const Heading = ({ title }) => {
  return <Title>{title}</Title>;
};

Heading.propTypes = {
  title: PropTypes.string
};

export default Heading;
