import React from 'react';

import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Container,
  Button,
} from '@material-ui/core';

import headshot from './Assets/Headshot.jpg';

const useStyles = makeStyles((theme) => ({
  headshot: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    // justifySelf: 'center',
  },
  centerContainer: {
    textAlign: 'center',
  },

  education: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[900],
  },

  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[100],
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 20,
    marginBottom: 20,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.dark,
    },
  },
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.section}>
      <Grid item xs={12} md={6} style={{ alignSelf: 'center' }}>
        <Box pr={5}>
          <Typography variant="h2">About me</Typography>
          <Typography variant="body1">
            I'm a Mechanical Engineering graduate from the University of Nevada
            Reno who is working to transition into Front-End Web Development.
          </Typography>
          <Typography variant="body1">
            In the Engineering World, I am skilled and experienced with
            Drafting, Technical Documentation, Team Leadership, ERP integration,
            and Software/ Hardware Troubleshooting.
          </Typography>
          <Typography variant="body1">
            {' '}
            On the Web-Development side, I have focused my attention on JS,
            React, Redux, and Node JS, and I am continuing to expand my
            skillset.
          </Typography>
          <Button
            className={classes.button}
            href="/contact"
            variant="contained"
          >
            Get in touch
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={classes.centerContainer}>
        <img src={headshot} alt="headshot" className={classes.headshot}></img>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
