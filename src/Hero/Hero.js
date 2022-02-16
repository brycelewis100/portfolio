import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';

import Navigation from '../Navigation/Navigation';

// import landscape from '../Assets/landscape.jpeg';

const useStyles = makeStyles((theme) => ({
  section: {
    margin: 0,
    height: '65vh',
    width: '100%',
    // position: 'absolute',
    // zIndex: 1,
    // backgroundImage:
    //   ' url(https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lumn-167699.jpg&fm=jpg)',
    backgroundSize: 'cover',
  },
  container: {
    // height: '100%',
    paddingTop: '5vh',
  },
  content: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(0, -15%)',
    color: 'white',
    position: 'relative',
    zIndex: 50,
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  caption: {
    textAlign: 'center',
  },
  nav: {
    position: 'relative',
    zIndex: 100,
  },
  button: {
    color: 'white',
  },
  buttonContainer: {
    textAlign: 'center',
    color: 'white',
  },
  overlay: {
    backgroundColor: 'rgba(33, 33, 33, 0.2)',
    height: '65vh',
    width: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  cta: {
    marginTop: '100px',
    width: '400px',
    height: '50px',
  },
}));

const Hero = ({ heading, caption, image, main }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.section}
      style={{ backgroundImage: `url(${image})` }}
      sx={{ borderColor: 'primary.main' }}
    >
      <div className={classes.overlay}></div>

      <Box className={classes.container}>
        <div className={classes.nav}>
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Navigation color="white" main={main} />
          </Box>
        </div>
      </Box>

      <Grid container className={classes.content}>
        <Grid item xs={8}>
          <Box className={classes.heading}>
            <Typography variant="h1">{heading}</Typography>
          </Box>
          <Box className={classes.caption}>
            <Typography variant="h3">{caption}</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
