import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
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
      <section id="contact">
      <Box bgcolor={'primary.main'}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 900,
              color: 'common.white',
              padding: '30px',
            }}
          >
            CONTACT US
          </Typography>
        </Box>
      </Container>
      </Box>


      <Container>
        <Contact />
      </Container>
      </section>
      <Box bgcolor={'primary.main'}>
        <Container paddingX={'0 !important'} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
    </Main>
  );
};

export default Expo;
