import React, { useState, useRef, useEffect } from 'react';
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

import emailjs from '@emailjs/browser';

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
  const form = useRef();
  const classes = useStyles();
  const heading = 'Contact';
  const caption = 'This is my Contact';
  const image =
    'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?cs=srgb&dl=pexels-ena-marinkovic-3640930.jpg&fm=jpg';

  const [subject, setSubject] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t51n5ng',
        'template_89w1dia',
        form.current,
        'user_sEERdJEmH2Wp7tJ06QQlJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubject('');
    setUserName('');
    setUserEmail('');
    setMessage('');
  };

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
              <form ref={form} onSubmit={sendEmail}>
                <Box
                  sx={{
                    '& > :not(style)': { m: 1, width: '95%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="subject"
                    name="subject"
                    type="text"
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <TextField
                    id="user_name"
                    name="user_name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <TextField
                    id="user_email"
                    name="user_email"
                    type="text"
                    label="Email"
                    variant="outlined"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <TextField
                    id="message"
                    name="message"
                    type="text"
                    label="Message"
                    variant="outlined"
                    placeholder="Write your message"
                    multiline
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Box>
                <Box className={classes.buttonContainer}>
                  <Button variant="contained" type="submit">
                    Send
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;

// return (
//   <form ref={form} onSubmit={sendEmail}>
//     <TextField
//       id="subject"
//       name="subject"
//       type="text"
//       label="Subject"
//       variant="outlined"
//     />
//     <TextField
//       id="user_name"
//       name="user_name"
//       type="text"
//       label="Name"
//       variant="outlined"
//     />
//     <TextField
//       id="user_email"
//       name="user_email"
//       type="text"
//       label="Email"
//       variant="outlined"
//     />
//     <TextField
//       id="message"
//       name="message"
//       type="text"
//       label="Message"
//       variant="outlined"
//     />
//     <input type="submit" value="Send" />
//   </form>
