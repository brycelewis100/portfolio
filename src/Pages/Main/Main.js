import React from 'react';
import { makeStyles, Box, Container } from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: '5vh',
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
        main={true}
      />
      <Box style={{ padding: 0 }} className={classes.education}>
        <Container id="about-me" maxWidth="lg">
          <Box className={classes.section}>
            <AboutMe />
          </Box>
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
