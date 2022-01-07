import React from 'react';
import { Box, Container, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  textContent: {
    alignSelf: 'center',
    marginTop: 'px',
    paddingLeft: theme.spacing(5),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'right',
    paddingRight: theme.spacing(5),
  },
  button: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5),
    textAlign: 'center',
    alignSelf: 'center',
  },
  grid: {
    padding: theme.spacing(2),
  },
  card: {
    backgroundColor: '#999',
    margin: '15px 15px 0px 15px',
  },
}));

const Projects = (props) => {
  const classes = useStyles();

  const heading = 'Projects';
  const caption = '';
  const image =
    'https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?cs=srgb&dl=pexels-pixabay-372787.jpg&fm=jpg';
  const btnLeft = 'Education';
  const btnRight = 'Contact';
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
        <Paper className={classes.card} elevation={3}>
          <Box className={classes.textContent}>
            <Typography>
              <h2 style={{ marginBottom: '0px' }}>
                Javascript Compiler and Notebook
              </h2>
            </Typography>
            <Grid container xs={12}>
              <Grid className={classes.grid} item xs={5}>
                <Box>
                  <Typography>
                    <h3>Summary</h3>
                    <p>
                      This project is designed to allow a user to write and
                      compile code in the browser. The information saves to a
                      file on their local computer so that when they relaunch
                      the application, all of their data is saved. Calls can be
                      added, deleted, and reorganized.
                    </p>
                    <p style={{ paddingTop: '10px' }}>
                      This required extensive use of Babel and other plugins to
                      make things work smoothly. It can be installed from the
                      terminal window using the command:
                    </p>
                    <ul>
                      <li>npx jsjournal serve</li>
                    </ul>
                  </Typography>
                </Box>
              </Grid>
              <Grid className={classes.grid} item xs={4}>
                <Typography>
                  <h3>Technologies</h3>
                  <ol>
                    <li>Typescript</li>
                    <li>Node JS</li>
                    <li>React</li>
                    <li>Babel</li>
                    <li>Webpack</li>
                  </ol>
                </Typography>
              </Grid>
              <Grid className={classes.buttons} item xs={3}>
                <Box className={classes.button}>
                  <Button
                    style={{ alignSelf: 'right' }}
                    onClick={() =>
                      window.open('https://github.com/brycelewis100/jsjournal')
                    }
                    variant="contained"
                  >
                    GitHub
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Paper className={classes.card} elevation={3}>
          <Box className={classes.textContent}>
            <Typography>
              <h2 style={{ marginBottom: '0px' }}>Macro Calculator</h2>
            </Typography>
            <Grid container xs={12}>
              <Grid className={classes.grid} item xs={5}>
                <Box>
                  <Typography>
                    <h3>Summary</h3>
                    <p>
                      This project is designed to help a user calculate their
                      basal metabolic rate (BMR) and determine their macro
                      breakdown in order to meet their fitness goals.
                    </p>
                    <p style={{ paddingTop: '10px' }}>
                      They will enter their weight, height, activity level, and
                      weight loss goal, and the program will calculate exactly
                      how many grams of Protien, Fat and carbohydrate they
                      should intake per day.
                    </p>
                  </Typography>
                </Box>
              </Grid>
              <Grid className={classes.grid} item xs={4}>
                <Typography>
                  <h3>Technologies</h3>
                  <ol>
                    <li>Javascript</li>
                    <li>React</li>
                  </ol>
                </Typography>
              </Grid>
              <Grid className={classes.buttons} item xs={3}>
                <Box className={classes.button}>
                  <Button href="/projects/macro-calculator" variant="contained">
                    View
                  </Button>
                </Box>
                <Box className={classes.button}>
                  <Button
                    onClick={() =>
                      window.open(
                        'https://github.com/brycelewis100/portfolio/tree/production/src/Projects/MacroCalculator'
                      )
                    }
                    variant="contained"
                  >
                    GitHub
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <Paper className={classes.card} elevation={3}>
          <Box className={classes.textContent}>
            <Typography>
              <h2 style={{ marginBottom: '0px' }}>Speed Estimate</h2>
            </Typography>
            <Grid container xs={12}>
              <Grid className={classes.grid} item xs={5}>
                <Box>
                  <Typography>
                    <h3>Summary</h3>
                    This project allows a cyclist to enter their average power,
                    height, and weight, and the program will calculate their
                    approximate average speed if they were riding outdoors on a
                    flat road with no wind.
                  </Typography>
                </Box>
              </Grid>
              <Grid className={classes.grid} item xs={4}>
                <Typography>
                  <h3>Technologies</h3>
                  <ol>
                    <li>Javascript</li>
                  </ol>
                </Typography>
              </Grid>
              <Grid className={classes.buttons} item xs={3}>
                <Box className={classes.button}>
                  <Button variant="contained">View</Button>
                </Box>
                <Box className={classes.button}>
                  <Button variant="contained">GitHub</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default Projects;
