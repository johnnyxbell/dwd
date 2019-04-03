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

const Speak = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Speak at the DWD meetup</title>
        <link rel="canonical" href="https://dwd.dev/speak/" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <LayoutPage>
        <Heading title="Speakers" trail="So you want to speak at the meetup?" />
        <ParagraphNormal>
          We are so glad that you're interested in presenting at our meetup! A little info about our speakers - No, you
          don't need to have a disability to talk at the meetup. As long as your topic has something to do with tech,
          and our audience would find it interesting you're in. We are always very interested in your topic has
          something to do with a11y though.
        </ParagraphNormal>

        <ParagraphNormal>Please fill out the form below and we will be in touch...</ParagraphNormal>
        <form name="speak" method="POST" data-netlify="true">
          <input type="hidden" name="speak" value="speak" />
          <FlexSpace>
            <TextInput placeholder="Your First Name" type="text" name="First Name" required={true} />
            <TextInput placeholder="Your Last Name" type="text" name="Last Name" required={true} />
          </FlexSpace>
          <Flex>
            <TextInput placeholder="Your Last Email" type="email" name="Email Address" required={true} />
          </Flex>
          <FlexSpace>
            <TextInput placeholder="Twitter Handle" type="text" name="Twitter" />
            <TextInput placeholder="GitHub Username" type="text" name="Github" />
          </FlexSpace>
          <Flex>
            <TextInput placeholder="Presentation Title" type="text" name="Presentation Name" required={true} />
          </Flex>
          <Flex>
            <TextArea
              placeholder="Whats your presntation about?"
              type="textarea"
              name="About your presntation"
              required={true}
            />
          </Flex>
          <Flex>
            <Button title="Send" type="submit" />
          </Flex>
        </form>
      </LayoutPage>
    </>
  );
};

export default Speak;
