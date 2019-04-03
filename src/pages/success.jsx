import React from 'react';
import LayoutPage from '../components/layout/layout-page';
import Heading from '../library/headings/Heading';
import { Helmet } from 'react-helmet';
import ParagraphNormal from '../library/paragraph/paragraph';

const Success = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Success</title>
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <LayoutPage>
        <Heading title="Thank you" />
        <ParagraphNormal>Thanks for getting in touch, we'll get back to you shortly.</ParagraphNormal>
      </LayoutPage>
    </>
  );
};

export default Success;
