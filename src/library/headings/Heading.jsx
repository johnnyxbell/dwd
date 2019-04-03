import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { SILVER } from '../../styles/colors';
import { WEIGHT, FONT_FAMILY } from '../../styles/typography';

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${SILVER};
  font-weight: ${WEIGHT.THIN};
  font-family: ${FONT_FAMILY};
`;

const TrailingText = styled.p`
  font-size: 1rem;
  color: ${SILVER};
  font-weight: ${WEIGHT.THIN};
  font-family: ${FONT_FAMILY};
`;

const Heading = ({ title, trail }) => {
  return (
    <div>
      <Title>{title}</Title>
      {trail && <TrailingText>{trail}</TrailingText>}
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string
};

export default Heading;
