import React from 'react';
import styled from 'styled-components/macro';
import { SILVER } from '../../styles/colors';
import { WEIGHT, FONT_FAMILY } from '../../styles/typography';

const ParagraphNormal = styled.p`
  font-size: 1rem;
  color: ${SILVER};
  font-weight: ${WEIGHT.THIN};
  font-family: ${FONT_FAMILY};
`;

const Paragraph = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};

export default ParagraphNormal;
