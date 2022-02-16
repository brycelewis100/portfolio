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
  IconButton,
  Link,
} from '@material-ui/core';

import emailjs from '@emailjs/browser';

import Hero from '../../Hero/Hero';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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

const useMatchMedia = (mediaQuery, initialValue) => {
  const [isMatching, setIsMatching] = useState(initialValue);
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches) => {
      setIsMatching(matches.matches);
    };
    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener);
    } else {
      watcher.addListener(listener);
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener);
      } else {
        return watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};

const Contact = (props) => {
  const classes = useStyles();

  const form = useRef();

  const heading = 'Contact';
  const caption = `Let's connect!`;
  const image =
    'https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?cs=srgb&dl=pexels-lukas-1419923.jpg&fm=jpg';

  const [subject, setSubject] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const isMobile = useMatchMedia('(max-width:600px)', true);

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
      <Hero heading={heading} caption={caption} image={image} main={false} />
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paper}>
          <Grid container style={{ marginTop: '30px' }}>
            <Grid className={classes.contactInfo} item md={12} lg={4}>
              <Typography variant="h5"> Contact Information</Typography>
              <Typography>
                Feel free to shoot me an email, give me a call, or connect with
                me on LinkedIn.
              </Typography>
              <Typography>
                If you'd rather leave a message, please share your information
                through the contact form and I'll be in touch within 24 hours.
              </Typography>

              <ul>
                <li>
                  <Typography>brycelewis100@gmail.com</Typography>
                </li>
                <li>
                  <Typography>916-742-8175</Typography>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/bryce-lewis-unr/">
                    <IconButton>
                      <LinkedInIcon />
                    </IconButton>
                  </Link>
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
                  {isMobile && (
                    <Button variant="contained" href="/about-me">
                      Back to Home
                    </Button>
                  )}
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
      </Container>
    </Box>
  );
};

export default Contact;
