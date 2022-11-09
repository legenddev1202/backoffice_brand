/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
      padding={{ xs: 3, sm: 6 }}
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

const Contact = () => {
  const theme = useTheme();

  
  return (

        <Container zIndex={2} sx={{ top:200, right:0}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} style={{position:'relative'}}>
            {/* <Box width={1} height="100%" display="flex" alignItems="center"> */}
            
              <div style={{ position:"absolute", bottom:'100px', maxWidth:'500px'}}>
              <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 900,
          color: 'common.white',
        }}
      >
        A Productivity and Compensation Management System all on one platform.
      </Typography>
              </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box width={1} height="100%" display="flex" alignItems="center">
              <GridItemFormBlock />
            </Box>
          </Grid>
        </Grid>
      </Container>


  );
};

export default Contact;
