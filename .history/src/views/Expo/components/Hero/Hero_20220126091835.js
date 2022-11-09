/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  password: yup
    .string()
    .required('Please specify your password')
    .min(8, 'The password should have at minimum length of 8'),
});

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box data-aos="fade-up" >
      <video autoPlay="autoplay" muted loop="true" style={{transform:'scale(1.0)',
      transformOrigin:'0% 0%',
      width: "100%",
      height: "100%",}}>
        <source
          src={
            'https://firebasestorage.googleapis.com/v0/b/insurancewebapptest.appspot.com/o/production%20ID%204480978.mp4?alt=media&token=21a2e8d3-6e63-4b52-b069-51edf2ea315b'
          }
          type="video/mp4"
          id="vid"
        />
      </video>
    </Box>
  );

  const GridItemFormBlock = () => {
    const initialValues = {
      fullName: '',
      email: '',
      password: '',
    };

    const onSubmit = (values) => {
      return values;
    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    return (
      <Box
        padding={{ xs: 3, sm: 6, posision:'absolute' }}
        width={1}
        component={Card}
        boxShadow={1}
      >
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection={'column'}>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                name="fullName"
                fullWidth
                value={formik.values.fullName}
                onChange={formik.handleChange}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Box>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box marginBottom={4}>
              <TextField
                sx={{ height: 54 }}
                label="Password"
                type="password"
                variant="outlined"
                color="primary"
                size="medium"
                name="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Box>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type="submit"
              >
                Create an account
              </Button>
            </Box>
            <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box>
            <Box>
              <Typography component="p" variant="body2" align="left">
                By creating you account you agree to our{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Privacy Policy
                </Box>
                ,{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Data Policy
                </Box>{' '}
                and{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Cookie Policy
                </Box>
                .
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    );
  };

  return (
    <Box
      minHeight={300}
      height={'auto'}
      position={'relative'}
      sx={{
        marginTop: -13,
        paddingTop: 13,
        backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 80%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          backgroundColor: theme.palette.primary.main,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, #000000 80%)`,
          opacity: '0.5',
          zIndex: 1,
        }}
      />
      
      <GridItemHeadlineBlock />
      <Container position={'absolute'} zIndex={2} sx={{ top:200, right:0}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Box width={1} height="100%" display="flex" alignItems="center">
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemFormBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
