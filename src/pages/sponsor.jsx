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

const Sponsor = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Sponsor or host at the DWD meetup</title>
        <link rel="canonical" href="https://dwd.dev/sponsor/" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <LayoutPage>
        <Heading title="Sponsor" trail="Want to sponsor us, or host an event?" />
        <ParagraphNormal>
          We are always looking for sponsors or companies to host our events. We generally hold our event of the last
          Thursday of every month but we are flexible if you need to choose a different date.
        </ParagraphNormal>
        <ParagraphNormal>
          Keep in mind if you are interested in hosting the event, it would be amazing if you could supply food
          (pizzas), beer and soda. I understand that this is not always possible but ideally we want to have some
          snacks. To ensure we are not leaving a bunch of people out our meetups are 20 members plus, so if you can't
          host more than 20 people it might be a bit hard for us to host there.
        </ParagraphNormal>
        <ParagraphNormal>
          If you are hosting you get the 7:00-7:30pm slot to present, feel free to present about whatever you like as
          long it has to do with tech.
        </ParagraphNormal>
        <ParagraphNormal>
          We are always on the lookout for companies to partner and sponsor us, if you'd like to get your logo on our
          homepage and a bunch of other benefits please let us know.
        </ParagraphNormal>
        <ParagraphNormal>So if you are interested in either hosting or sponsoring, get in touch below.</ParagraphNormal>
        <form name="Sponsor" method="POST" data-netlify="true">
          <FlexSpace>
            <TextInput placeholder="Your First Name" type="text" name="First Name" required={true} />
            <TextInput placeholder="Your Last Name" type="text" name="Last Name" required={true} />
          </FlexSpace>
          <FlexSpace>
            <TextInput placeholder="Your Email" type="email" name="Email Address" required={true} />
            <TextInput placeholder="Company Name" type="text" name="Company" required={true} />
          </FlexSpace>
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

export default Sponsor;
