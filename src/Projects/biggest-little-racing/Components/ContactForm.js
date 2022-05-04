import React, { useState, useRef, useEffect } from 'react';

import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Container,
  Paper,
} from '@material-ui/core';

import emailjs from '@emailjs/browser';

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(2),
  },
  paper: {
    marginBottom: '2.5vh',
  },
  form: {
    marginTop: theme.spacing(2),
    paddingLeft: 5,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[100],

    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const form = useRef();

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
      <Paper elevation={3} className={classes.paper}>
        <Grid container style={{ marginTop: '30px' }}>
          <Grid className={classes.contactInfo} item md={12} lg={4}>
            <Typography variant="h5"> Contact Information</Typography>
            <Typography>
              If you have any questions, or would like to let me know you're
              coming, just shoot me an email though this form 👍
            </Typography>
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
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.button}
                >
                  Send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ContactForm;
