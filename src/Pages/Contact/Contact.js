import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Container,
  Paper,
} from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'right',
    margin: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const heading = 'Contact';
  const caption = 'This is my Contact';
  const image =
    'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?cs=srgb&dl=pexels-ena-marinkovic-3640930.jpg&fm=jpg';

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <Box>
      <Hero heading={heading} caption={caption} image={image} />
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paper}>
          <Grid container style={{ marginTop: '30px' }}>
            <Grid className={classes.contactInfo} item md={12} lg={4}>
              <Typography variant="h5"> Contact Information</Typography>
              <Typography>
                Go ahead and fill out the form and I will get back to you within
                24 hours
              </Typography>

              <ul>
                <li>
                  <Typography>brycelewis100@gmail.com</Typography>
                </li>
                <li>
                  <Typography>916-742-8175</Typography>
                </li>
              </ul>
            </Grid>
            <Grid item md={12} lg={8} className={classes.form}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '95%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="first-name"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  id="last-name"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="phone"
                  label="Phone (optional)"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '95%' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="Message"
                  label="Message"
                  placeholder="Write your message"
                  multiline
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Box>
              <Box className={classes.buttonContainer}>
                <Button
                  className={classes.submitButton}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log(firstName, lastName, email, phone, message);
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
