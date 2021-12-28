import {
  Box,
  Button,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Container,
} from '@material-ui/core';
import React from 'react';

import Navigation from '../Navigation/Navigation';

// import landscape from '../Assets/landscape.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#666',
    // height: '800px',
  },
  section: {
    height: '75vh',
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
    height: '75vh',
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

const Hero = ({ heading, caption, image, btnLeft, btnRight }) => {
  const classes = useStyles();

  const routeString = (btnString) => {
    const route = btnString.replace(/\s/g, '-').toLowerCase();
    console.log(route);

    return `/${route}`;
  };
  console.log(btnRight);

  return (
    <Paper
      className={classes.section}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={classes.overlay}></div>
      <Box className={classes.container}>
        <div className={classes.nav}>
          <Navigation color="white" />
        </div>
      </Box>

      <Grid container xs={12} className={classes.content}>
        <Grid item xs={2} className={classes.buttonContainer}>
          {btnLeft === '' ? (
            <Button>{btnLeft}</Button>
          ) : (
            <Button href={routeString(btnLeft)} className={classes.button}>
              {`< ${btnLeft}`}
            </Button>
          )}
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.heading}>
            <Typography variant="h1">{heading}</Typography>
          </Box>
          <Box className={classes.caption}>
            <Typography variant="h5">{caption}</Typography>
          </Box>
        </Grid>
        <Grid item xs={2} className={classes.buttonContainer}>
          {btnRight === '' ? (
            <Button>{btnRight}</Button>
          ) : (
            <Button href={routeString(btnRight)} className={classes.button}>
              {`${btnRight} >`}
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
