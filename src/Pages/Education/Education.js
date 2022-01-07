import React from 'react';
import { Box, Container, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

// Javascript, React, CSS, Redux, HTML, Matlab, Autodesk Inventor, Solidworks, Microsoft Office, Github

import CSS from './Assets/CSS.png';
import Github from './Assets/Github.png';
import Labview from './Assets/Labview.png';
import Matlab from './Assets/Matlab.png';
import Autocad from './Assets/Autocad.png';
import Solidworks from './Assets/Solidworks.png';
import HTML from './Assets/HTML.png';
import Inventor from './Assets/Inventor.png';
import Javascript from './Assets/Javascript.png';
import Office from './Assets/Office.png';
import ReactLogo from './Assets/React.png';
import ReduxLogo from './Assets/Redux.png';

import N from './Assets/N.png';

const useStyles = makeStyles((theme) => ({
  textContent: {
    alignSelf: 'center',
    marginTop: '0px',
    paddingLeft: theme.spacing(5),
  },
  image: {
    textAlign: 'right',
    alignSelf: 'center',
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor: '#999',
    margin: '15px 15px 0px 15px',
  },
  logoCard: {
    margin: '15px 7.5px 0px 7.5px',
    padding: theme.spacing(1),
    textAlign: 'center',
    position: 'relative',
  },
  logo: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
  },
  logoBig: {
    width: '125px',
    height: '200px',
    objectFit: 'contain',
  },
}));

const Education = (props) => {
  const classes = useStyles();

  const heading = 'Education';
  const caption = 'ME turned Web Developer';
  const image =
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg';
  const btnLeft = 'About Me';
  const btnRight = 'Projects';
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
        <h1>Formal Education</h1>
        <Paper className={classes.card} elevation={3}>
          <Grid container xs={12}>
            <Grid item xs={9} className={classes.textContent}>
              <Box>
                <h3>University of Nevada Reno</h3>
                <p>Bachelors of Science: Mechanical Engineering</p>
                <p>3.95 GPA</p>
              </Box>
            </Grid>
            <Grid item xs={3} className={classes.image}>
              <Box>
                <img src={N} alt="N"></img>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <h1>Competencies</h1>

        <Grid container xs={12}>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button style={{ width: '200px', height: '212px' }}>
                <img
                  src={Javascript}
                  alt="Javascript"
                  className={classes.logoBig}
                ></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button style={{ width: '200px', height: '212px' }}>
                <img src={HTML} alt="HTML" className={classes.logoBig}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={CSS} alt="CSS" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={Github} alt="Github" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img
                  src={ReactLogo}
                  alt="ReactLogo"
                  className={classes.logo}
                ></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img
                  src={ReduxLogo}
                  alt="ReduxLogo"
                  className={classes.logo}
                ></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={Matlab} alt="Matlab" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={Labview} alt="Labview" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img
                  src={Solidworks}
                  alt="Solidworks"
                  className={classes.logo}
                ></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img
                  src={Inventor}
                  alt="Inventor"
                  className={classes.logo}
                ></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={Autocad} alt="Autocad" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.logoCard} elevation={3}>
              <Button>
                <img src={Office} alt="Office" className={classes.logo}></img>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Education;
