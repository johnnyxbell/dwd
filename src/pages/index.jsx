import React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet';
import stackshareLogo from '../assets/images/stackshare-logo.png';
import dwdLogo from '../assets/images/dwd-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faMeetup, faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout/Layout';
import { FONT_FAMILY } from '../styles/typography';

const Wrapper = styled.div`
  max-width: 950px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 40px auto 0 auto;
  text-align: center;
`;

const Social = styled.div`
  a {
    color: #ccc;
    margin-right: 10px;
    &:last-child {
      margin: 0;
    }
    &:hover {
      color: #fff;
    }
  }
`;

const Text = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-family: ${FONT_FAMILY};
  h1 {
    font-size: 1.5rem;
    @media (max-width: 769px) and (min-width: 320px) {
      font-size: 1rem;
    }
    display: inline;
    font-weight: normal;
  }
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 1rem;
  }
  font-weight: 300;
  margin: 20px;
  padding: 0;
  strong {
    color: white;
  }
`;

const TextSmall = styled.p`
  font-size: 1.1rem;
  font-family: ${FONT_FAMILY};
  @media (max-width: 769px) and (min-width: 320px) {
    font-size: 0.8rem;
  }
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Devs With Disabilities</title>
        <link rel="canonical" href="https://dwd.dev" />
        <meta
          name="description"
          content="Devs With Disabilities (DWD) is a group for all the people out
              there that work in tech and have disabilities"
        />
      </Helmet>
      <Layout>
        <main>
          <Wrapper>
            <Text>
              <p>
                <img height="150" src={dwdLogo} alt="Devs with Disabilities Logo" />
              </p>
              <p>
                <h1>Devs With Disabilities</h1> (DWD) is a group for all the people out there that work in tech and have
                disabilities. We plan to meetup monthly, talk tech, enjoy some beers{' '}
                <span role="img" aria-label="Single Beer Emoji">
                  🍺
                </span>{' '}
                or soda{' '}
                <span role="img" aria-label="Soda Emoji">
                  🥤
                </span>{' '}
                if thats your thing? (food and drink are always supplied).
              </p>
              <TextSmall>
                P.S. You don't need to be disabled to come along and enjoy, we don't discriminate... just come along and
                show some support{' '}
                <span role="img" aria-label="Yewwww Emoji">
                  🤙🏻
                </span>
                .
              </TextSmall>
              <p>Find us online</p>
              <Social>
                <a href="https://twitter.com/dwddev/" aria-label="Follow Devs With Disabilities on Twitter">
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faTwitter}
                    role="img"
                    aria-label="Follow Devs With Disabilities on Twitter"
                  />
                </a>
                <a href="https://instagram.com/dwddev/" aria-label="Follow Devs With Disabilities on Instagram">
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faInstagram}
                    role="img"
                    aria-label="Follow Devs With Disabilities on Instagram"
                  />
                </a>
                <a
                  href="https://meetup.com/Devs-With-Disabilities/"
                  aria-label="Join Devs With Disabilities for their Meetup"
                >
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faMeetup}
                    role="img"
                    aria-label="Join Devs With Disabilities for their Meetup"
                  />
                </a>
                <a href="https://github.com/johnnyxbell/dwd" aria-label="View the Devs With Disabilities GitHub Repo">
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faGithub}
                    role="img"
                    aria-label="View the Devs With Disabilities GitHub Repo"
                  />
                </a>
              </Social>
              <p>Our Amazing Sponsor</p>
              <p>
                {' '}
                <a
                  href="https://stackshare.io"
                  title="StackShare"
                  aria-label="StackShare, Dev With Disabilities Sponsor"
                >
                  <img height="30px" src={stackshareLogo} alt="StackShare our sponsor" />
                </a>
              </p>
            </Text>
          </Wrapper>
        </main>
      </Layout>
    </>
  );
};
