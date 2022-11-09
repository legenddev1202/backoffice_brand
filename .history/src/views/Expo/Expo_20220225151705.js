import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Advantages,
  Contact,
  Description,
  Hero,
  PromoNumbers,
  Partners,
  VideoSection,
} from './components';

const Expo = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={'primary.main'}>
        <Container>
          <Description />
        </Container>
      </Box>
      <Container>
        <PromoNumbers />
      </Container>
      <Divider />
      <About />

      {/* <Container>
        <Advantages />
      </Container> */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <VideoSection />
        </Container>
      </Box>
      {/* <Container>
        <Speakers />
      </Container> */}
      <Divider />
      
      <Container>
        <Contact />
      </Container>
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
    </Main>
  );
};

export default Expo;
