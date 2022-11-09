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
import TextField from '@mui/material/TextField';
import * as yup from 'yup';

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
        <Box display="flex" flexDirection={'column'}>
          
         
        
       
          
        </Box>
    </Box>
  );
};

const GridItemFormBlock = () => {
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
              sx={{ height: 170, maxHeight:200 }}
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
        <Grid item xs={12} md={7} style={{ position: 'relative' }}>
          <LeftBlock />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>

  );
};

export default Contact;
