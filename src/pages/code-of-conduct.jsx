import React from 'react';
import LayoutPage from '../components/layout/layout-page';
import Heading from '../library/headings/Heading';
import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';
import ParagraphNormal from '../library/paragraph/paragraph';
import { SILVER } from '../styles/colors';
import { WEIGHT, FONT_FAMILY } from '../styles/typography';

const Title = styled.h2`
  font-size: 1.2rem;
  color: ${SILVER};
  font-weight: ${WEIGHT.THIN};
  font-family: ${FONT_FAMILY};
`;

const Link = styled.a`
  color: ${SILVER};
  text-decoration: underline;
`;
const CodeOfConduct = () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities | Code of Conduct</title>
        <link rel="canonical" href="https://dwd.dev/code-of-conduct/" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <LayoutPage>
        <Heading title="Code of Conduct" />
        <Title>The Quick Version</Title>
        <ParagraphNormal>
          Our Meetup is dedicated to providing a harassment-free meetup experience for everyone, regardless of gender,
          gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, or
          religion (or lack thereof). We do not tolerate harassment of meetup participants in any form. Sexual language
          and imagery is not appropriate for any meetup venue, including talks, workshops, parties, Twitter and other
          online media. Meetup participants violating these rules may be sanctioned or expelled from the meetup without
          a refund at the discretion of the meetup organisers.
        </ParagraphNormal>
        <Title>The Less Quick Version</Title>
        <ParagraphNormal>
          Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual
          orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces,
          deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of
          talks or other events, inappropriate physical contact, and unwelcome sexual attention.
        </ParagraphNormal>
        <ParagraphNormal>
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </ParagraphNormal>
        <ParagraphNormal>
          Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised
          images, activities, or other material. Booth staff (including volunteers) should not use sexualised
          clothing/uniforms/costumes, or otherwise create a sexualised environment.
        </ParagraphNormal>
        <ParagraphNormal>
          If a participant engages in harassing behavior, the meetup organisers may take any action they deem
          appropriate, including warning the offender or expulsion from the meetup with no refund.
        </ParagraphNormal>
        <ParagraphNormal>
          If you are being harassed, notice that someone else is being harassed, or have any other concerns, please
          contact a member of meetup staff immediately. meetup staff can be identified as they'll be wearing branded
          t-shirts.
        </ParagraphNormal>
        <ParagraphNormal>
          Meetup staff will be happy to help participants contact hotel/venue security or local law enforcement, provide
          escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the meetup. We
          value your attendance.
        </ParagraphNormal>
        <ParagraphNormal>
          We expect participants to follow these rules at meetup and workshop venues and meetup-related social events.
        </ParagraphNormal>
        <ParagraphNormal>
          This Code of Conduct is borrowed from{' '}
          <Link href="https://confcodeofconduct.com/" aria-label="Code of contact">
            Conference Code of Conduct
          </Link>
          .
        </ParagraphNormal>
      </LayoutPage>
    </>
  );
};

export default CodeOfConduct;
