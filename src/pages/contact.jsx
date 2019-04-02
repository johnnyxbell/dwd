import React from 'react';
import Layout from '../components/layout/Layout';
import Heading from '../library/headings/Heading';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Contact</title>
        <link rel="canonical" href="https://dwd.dev/contact/" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <Layout>
        <Heading title="Contact Us" />
      </Layout>
    </>
  );
};

export default Contact;
