import React from 'react';
import styled  from 'styled-components/macro';

const Wrapper = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  iframe {
   width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

const Video = () => {
  return (
    <Wrapper>
      <iframe title="Home Page Video" src="https://player.vimeo.com/video/353267294?autoplay=1&loop=1&byline=0&title=0" />
    </Wrapper>
  );
};

export default Video;