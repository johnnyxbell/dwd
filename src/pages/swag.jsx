import React from 'react';
import LayoutPage from '../components/layout/layout-page';
import Heading from '../library/headings/Heading';
import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';
import ParagraphNormal from '../library/paragraph/paragraph';
import { SILVER } from '../styles/colors';
import Stickers from '../assets/images/stickers.jpeg';

const Link = styled.a`
  color: ${SILVER};
  text-decoration: underline;
`;
const Swag = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Swag</title>
        <link rel="canonical" href="https://dwd.dev/swag/" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <LayoutPage>
        <Heading title="Want some DWD swag?" />
        <ParagraphNormal>
          So right now we only have stickers... We plan on making shirts too once the meetup kicks off a bit more.
        </ParagraphNormal>
        <ParagraphNormal>
          To get your hands on these stickers, you can either come to a meetup we have in San Francisco, or catch me at
          a tech conference. I tend to go to 3 or 4 a year.
        </ParagraphNormal>
        <ParagraphNormal>
          If you are unable to get to either of these, please send through an{' '}
          <Link href="mailto:hi@johnnybell.io">email</Link> and I'll get some posted out for you.
        </ParagraphNormal>
        <img src={Stickers} width="100%" alt="Devs with Disabilities Stickers" />
      </LayoutPage>
    </>
  );
};

export default Swag;
