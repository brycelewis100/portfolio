import React from 'react';
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

import headshot from './Assets/Headshot.jpg';

import Education from '../Education/Education';
import Projects from '../Projects/Projects';

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
  section: {
    paddingTop: theme.spacing(15),
  },
  education: {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[900],
  },
}));

const Main = (props) => {
  const classes = useStyles();

  const heading = 'Bryce Lewis';
  const caption = 'Junior Front-End Developer';
  const image =
    'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lumn-167699.jpg&fm=jpg';

  return (
    <Box>
      <Hero
        heading={heading}
        caption={caption}
        image={image}
        style={{ padding: 0 }}
      />
      <Box style={{ padding: 0 }} className={classes.education}>
        <Container id="about-me" maxWidth="lg">
          <Grid container className={classes.section}>
            <Grid item xs={12} md={6} style={{ alignSelf: 'center' }}>
              <Box pr={5}>
                <Typography variant="h2">About me</Typography>
                <Typography variant="body1">
                  I'm a Mechanical Engineering graduate from the University of
                  Nevada Reno who is working to transition into Front-End Web
                  Development.
                </Typography>
                <Typography variant="body1">
                  In the Engineering World, I am skilled and experienced with
                  Drafting, Technical Documentation, Team Leadership, ERP
                  integration, and Software/ Hardware Troubleshooting.
                </Typography>
                <Typography variant="body1">
                  {' '}
                  On the Web-Development side, I have focused my attention on
                  JS, React, Redux, and Node JS, and I am continuing to expand
                  my skillset.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className={classes.centerContainer}>
              <img
                src={headshot}
                alt="headshot"
                className={classes.headshot}
              ></img>
            </Grid>
          </Grid>
          <Box className={classes.section}>
            <Education />
          </Box>
          <Box className={classes.section}>
            <Projects />
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
