import React from 'react';
import LayoutPage from '../components/layout/layout-page';
import Heading from '../library/headings/Heading';
import { Helmet } from 'react-helmet';
import TextInput from '../library/inputs/text';
import TextArea from '../library/inputs/textarea';
import Button from '../library/buttons/button';
import styled from 'styled-components/macro';
import ParagraphNormal from '../library/paragraph/paragraph';

const Flex = styled.div`
  display: flex;
  margin: 0 0 25px 0;
`;

const FlexSpace = styled.div`
  display: flex;
  margin: 0 0 25px 0;
  justify-content: space-between;
  div {
    margin-right: 15px;
    &:last-child {
      margin: 0;
    }
  }
`;

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
      <LayoutPage>
        <Heading title="Contact us" trail="We would love to hear from you (we don't bite)." />
        <ParagraphNormal>
          If you have any general questions you want to ask us, please feel free to use the form below to shoot us
          through a message
        </ParagraphNormal>
        <form name="contact-us" method="POST" data-netlify="true">
          <FlexSpace>
            <TextInput placeholder="Your First Name" type="text" name="First Name" required={true} />
            <TextInput placeholder="Your Last Name" type="text" name="Last Name" required={true} />
          </FlexSpace>
          <Flex>
            <TextInput placeholder="Your Email" type="email" name="Email Address" required={true} />
          </Flex>
          <Flex>
            <TextArea placeholder="Your Message" type="textarea" name="yYour comments" required={true} />
          </Flex>
          <Flex>
            <Button title="Send" type="submit" />
          </Flex>
        </form>
      </LayoutPage>
    </>
  );
};

export default Contact;
