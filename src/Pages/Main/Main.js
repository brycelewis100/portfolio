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
    // justifySelf: 'center',
  },
  centerContainer: {
    textAlign: 'center',
  },
}));

const Main = (props) => {
  const classes = useStyles();

  const heading = 'Bryce Lewis';
  const caption = 'Junior Front-End Developer';
  const image =
    'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lumn-167699.jpg&fm=jpg';
  const btnLeft = '';
  const btnRight = 'Education';
  return (
    <Box>
      <Hero
        heading={heading}
        caption={caption}
        image={image}
        btnLeft={btnLeft}
        btnRight={btnRight}
      />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} style={{ alignSelf: 'center' }}>
            <Typography variant="h4">About me</Typography>
            <p>
              I'm a Mechanical Engineering graduate from the University of
              Nevada Reno who is working to transition into Front-End Web
              Development.
            </p>
            <p>
              In the Engineering World, I am skilled and experienced with
              Drafting, Technical Documentation, Team Leadership, ERP
              integration, and Software/ Hardware Troubleshooting.
            </p>
            <p>
              {' '}
              On the Web-Development side, I have focused my attention on JS,
              React, Redux, and Node JS, and I am continuing to expand my
              skillset.
            </p>
          </Grid>
          <Grid item xs={6} className={classes.centerContainer}>
            <img
              src={headshot}
              alt="headshot"
              className={classes.headshot}
            ></img>
          </Grid>
        </Grid>
        <Education />
        <Projects />
      </Container>
      <Footer />
    </Box>
  );
};

export default Main;
