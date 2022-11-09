/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const Description = () => {
    return (
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          align='center'
          sx={{
            fontWeight: 900,
            color: 'common.white',
            padding:'30px'
          }}
        >
          ABOUT US
        </Typography>
        
      </Box>
      </Container>
    );
  };

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Box marginBottom={2}>
        <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700 }}>
        The Agent Back Office System
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography component="p">
        - Customizable team productivity and compensation management system.
        </Typography>
        <Typography component="p">
        - Coach and reward with real-time data.
        </Typography>
        <Typography component="p">
        - Organizational management that gives the Agent & Team members instant feedback throughout the day.
        </Typography>
        <Typography component="p">
        - Increasing awareness and productivity.
        </Typography>
      </Box>
      
    </Box>
  );

  const RightSide = () => {
    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& img': {
            objectFit: 'cover',
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Box
          component={LazyLoadImage}
          effect="blur"
          src={'https://assets.maccarianagency.com/backgrounds/img19.jpg'}
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        />
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Box bgcolor={'primary.main'}>
        
      <Description/>

      </Box>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
      
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'column' }}
          position={'relative'}
        >
          <Box
          display={'flex'}
          flexDirection={{ xs: 'row', md: 'column' }}
          position={'relative'}
        >
<RightSide />
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'row', md: 'column' }}
          position={'relative'}
        >
                  <RightSide />

        </Box>

        </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default About;
