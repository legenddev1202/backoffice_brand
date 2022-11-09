/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Description = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        Agent Back Office:
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        sx={{
          fontWeight: 500,
          color: 'common.white',
        }}
      >
        A team productivity & compensation management system, that recognizes an office built for results. Coach and reward with real-time data.
Organizational management that gives the Agent & Team members instant feedback throughout the day. Increasing awareness and productivity.
      </Typography>
    </Box>
  );
};

export default Description;
