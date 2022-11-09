/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

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
    
      <Box
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '40%',
            height: '100%',
            zIndex: 1,
            top: 0,
            right: 0,
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={'relative'} zIndex={2}>
          <Box>
            {/* <Box marginBottom={1}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                CONTACT US
              </Typography>
            </Box> */}
            <Box>
              <Typography variant="h6" color={'text.secondary'}>
                We'd love to talk about how we can help you.
              </Typography>
            </Box>
          </Box>
          <Box marginY={3}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=1200 West 35th Street, Chicago, IL, USA&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                minHeight: 300,
                borderRadius: 8,
                filter:
                  theme.palette.mode === 'dark'
                    ? 'grayscale(0.5) opacity(0.7)'
                    : 'none',
              }}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={'body1'}
                gutterBottom
                sx={{ fontWeight: 'medium' }}
              >
                Address:
              </Typography>
              <Typography variant={'subtitle1'}>
                1200 W. 35th Mailbox 153 Chicago, IL 60609773-977-8872
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={'body1'}
                gutterBottom
                sx={{ fontWeight: 'medium' }}
              >
                Email us:
              </Typography>
              <Link
                component={'a'}
                href="mailto:info@agent-backoffice.com"
                color={'primary'}
              >
                info@agent-backoffice.com
              </Link>
              {/* <Typography variant={'subtitle1'}>
            info@agent-backoffice.com
            </Typography> */}
            </Grid>
            {/* <Grid item xs={12}>
            <Typography
              variant={'body1'}
              gutterBottom
              sx={{ fontWeight: 'medium' }}
            >
              Address:
            </Typography>
            <Typography variant={'subtitle1'}>
              Via E. Gola 4, Milan MI, Italy
            </Typography>
          </Grid> */}
          </Grid>
        </Box>
      </Box>

  );
};

export default Contact;
