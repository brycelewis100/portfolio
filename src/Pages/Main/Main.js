import React from 'react';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

import headshot from './Assets/Headshot.jpg';

const useStyles = makeStyles((theme) => ({
  headshot: {
    width: '400px',
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
  const caption = 'This is a caption';
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
      <Grid container xs={12}>
        <Grid item xs={6} style={{ alignSelf: 'center', padding: '50px' }}>
          <h1>About me</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </Grid>
        <Grid item xs={6} className={classes.centerContainer}>
          <img src={headshot} alt="headshot" className={classes.headshot}></img>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Main;
