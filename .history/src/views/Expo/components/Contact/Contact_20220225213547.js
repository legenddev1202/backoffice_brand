/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as yup from 'yup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = yup.object({
  content: yup
    .string()
    .trim()
    .required('Please enter how can we help.'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

const LeftBlock = () => {
  const initialValues = {
    content: '',
    email: '',
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
    <Box padding={{ xs: 3, sm: 6 }} width={1} component={Card} boxShadow={0.5}>
      <Grid alignItems={'center'}>
        <Box marginBottom={2}>
          <Typography
            color={'primary'}
            component={'span'}
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            CALL US
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography component={'span'} variant="h6" sx={{ fontWeight: 700 }}>
            +1 773-123-4567
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography
            color={'primary'}
            component={'span'}
            variant="h5"
            align="center"
            sx={{ fontWeight: 700 }}
          >
            LOCATION
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography component={'span'} variant="h6" sx={{ fontWeight: 700 }}>
            1200 W. 35th Mailbox 153 Chicago, IL 60609
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography
            color={'primary'}
            component={'span'}
            variant="h5"
            align="center"
            sx={{ fontWeight: 700 }}
          >
            BUSINESS HOURS
          </Typography>
        </Box>
        <Box marginBottom={2}>
          <Typography component={'span'} variant="h6" sx={{ fontWeight: 700 }}>
            Mon - Fri: 9 - 5 pm
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

const GridItemFormBlock = () => {
  const initialValues = {
    content: '',
    email: '',
  };

  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  const onSubmit = async (values) => {
    console.log(values);
    var form = {
      email: 'info@agent-backoffice.com',
      // email: 'ocean.kurakin@gmail.com',
      subject: `Received a message from ${values.email}`,
      emailBody: `
        <p> ${values.content}</p>
      `,
    };

    const response = await axios.post(
      'https://us-central1-insurancewebapptest.cloudfunctions.net/sendMailOverHTTP',
      form,
    );
    console.log(response.data.includes('Error'));
    if (response.data.includes('Error')) {
      setOpenError(true);
    } else {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box padding={{ xs: 3, sm: 4 }} width={1} component={Card} boxShadow={0.5}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Sent Email Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          Failed Sending Email.
        </Alert>
      </Snackbar>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <Box display="flex" flexDirection={'column'}>
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
              sx={{ height: 140, maxHeight: 200 }}
              label="How Can We Help?"
              multiline
              maxRows={5}
              rows={5}
              variant="outlined"
              color="primary"
              size="medium"
              name="content"
              fullWidth
              value={formik.values.content}
              onChange={formik.handleChange}
              error={formik.touched.content && Boolean(formik.errors.content)}
              helperText={formik.touched.content && formik.errors.content}
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
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

const Contact = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} style={{ position: 'relative' }}>
        <LeftBlock />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box width={1} height="100%" display="flex" alignItems="center">
          <GridItemFormBlock />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
