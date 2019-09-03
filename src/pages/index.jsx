import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import stackshareLogo from "../assets/images/stackshare-logo.png";
import dwdLogo from "../assets/images/dwd-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faMeetup,
  faGithub,
  faSlack
} from "@fortawesome/free-brands-svg-icons";
import LayoutHome from "../components/layout/layout-home";
import { FONT_FAMILY } from "../styles/typography";
import { SILVER } from "../styles/colors";

const Wrapper = styled.div`
  max-width: 850px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto 0 auto;
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
  font-size: 1.2rem;
  font-family: ${FONT_FAMILY};
  h1 {
    font-size: 1.2rem;
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
  p {
    a {
      color: ${SILVER};
      :hover {
        color: white;
      }
    }
  }
`;

const SmallText = styled.div`
  font-size: 0.8rem;
  margin-top: -20px;
  a {
    color: ${SILVER};
    text-decoration: none;
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
      <LayoutHome>
        <main>
          <Wrapper>
            <Text>
              <p>
                <img
                  height="150"
                  src={dwdLogo}
                  alt="Devs with Disabilities Logo"
                />
              </p>
              <p>
                <h1>Devs With Disabilities</h1> (DwD) is a meetup in the Bay
                Area &amp; Salt Lake City. We plan to meetup monthly and talk
                about accessibility (a11y), tech and disabilities. The meetup is
                for all people that are interested in a11y and tech.
              </p>
              <p>
                DwD is also a Podcast hosted by{" "}
                <a
                  href="https://twitter.com/courtneyyen"
                  aria-label="Courtney Twitter"
                >
                  @courtneyyen
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://twitter.com/johnnyxbell"
                  aria-label="Johnny Twitter"
                >
                  @johnnyxbell
                </a>{" "}
                (coming September 2019)
              </p>
              <Social>
                <a
                  href="https://twitter.com/dwddev/"
                  aria-label="Follow Devs With Disabilities on Twitter"
                >
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faTwitter}
                    role="img"
                    aria-label="Follow Devs With Disabilities on Twitter"
                  />
                </a>
                <a
                  href="https://dwd-slack.herokuapp.com/"
                  aria-label="Join the DwD slack"
                >
                  <FontAwesomeIcon
                    size="lg"
                    width="30px"
                    height="30px"
                    icon={faSlack}
                    role="img"
                    aria-label="Join the DWD Slack"
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
                <a
                  href="https://github.com/johnnyxbell/dwd"
                  aria-label="View the Devs With Disabilities GitHub Repo"
                >
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
              <p>Sponsors</p>
              <p>
                {" "}
                <a
                  href="https://stackshare.io"
                  title="StackShare"
                  aria-label="StackShare, Dev With Disabilities Sponsor"
                >
                  <img
                    height="30px"
                    src={stackshareLogo}
                    alt="StackShare our sponsor"
                  />
                </a>
              </p>
              <SmallText>
                <Link to="/sponsor/">(Your logo here?)</Link>
              </SmallText>
            </Text>
          </Wrapper>
        </main>
      </LayoutHome>
    </>
  );
};
