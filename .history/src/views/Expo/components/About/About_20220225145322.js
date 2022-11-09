/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const mock = [
  {
    title: 'Our Customer Obsession',
    subtitle:
      "We are committed to creating a positive and memorable user experience.",

  },
  {
    title: 'Innovation',
    subtitle:
      'Updating and creating processes, services and/or products that beat the times we are in.',
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    title: 'Operational Excellence',
    subtitle:
      'The utmost professionalism streamlined through the customer experience.',
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Long Term Thinking',
    subtitle:
      'What can we do to put ourselves out of business. I rather create it myself than my competition.',
    icon: (
      <svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

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
            align="center"
            sx={{
              fontWeight: 900,
              color: 'common.white',
              padding: '30px',
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
          - Organizational management that gives the Agent & Team members
          instant feedback throughout the day.
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
        {/* <Box
          component={LazyLoadImage}
          effect="blur"
          src={'https://assets.maccarianagency.com/backgrounds/img19.jpg'}
          height={{ xs: 'auto', md: 1 }}
          maxHeight={{ xs: 300, md: 1 }}
          width={1}
          maxWidth={1}
        /> */}
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
        <Description />
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
              flexDirection={{ xs: 'column', md: 'row' }}
                sx={{                  
                  width: '100%',
                  height: '100%',
                }}
              >
                <Container>
                <Grid container spacing={5}>
                    {mock.map((item, i) => (
                      <Grid key={i} item xs={3} md={5}>
                        <ListItem
                          component="div"
                          disableGutters
                          data-aos={'fade-up'}
                          data-aos-delay={i * 100}
                          data-aos-offset={100}
                          data-aos-duration={600}
                          sx={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: 0,
                          }}
                        >
                          
                          <ListItemText
                            primary={item.title}
                            secondary={item.subtitle}
                            primaryTypographyProps={{
                              variant: 'h6',
                              gutterBottom: true,
                              align: 'left',
                            }}
                            secondaryTypographyProps={{ align: 'left' }}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontWeight: 700,
                              },
                              margin: 0,
                            }}
                          />
                        </ListItem>
                      </Grid>
                    ))}
                    </Grid>
                    </Container>
                
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
