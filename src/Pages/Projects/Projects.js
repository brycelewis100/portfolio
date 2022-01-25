import React from 'react';
import {
  makeStyles,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

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
    margin: '15px 15px 0px 15px',
  },
}));

const Projects = (props) => {
  const classes = useStyles();

  return (
    <Box id="projects">
      <Typography variant="h1">Projects</Typography>
      <Paper className={classes.card} elevation={3}>
        <Box className={classes.textContent}>
          <Typography variant="h3" style={{ marginBottom: '0px' }}>
            Portfolio Website
          </Typography>
          <Grid container xs={12}>
            <Grid className={classes.grid} item xs={5}>
              <Box>
                <Typography>
                  <Typography variant="subtitle1">Summary</Typography>
                  <p>
                    This project is designed to showcase my web development
                    competence
                  </p>
                  <p style={{ paddingTop: '10px' }}></p>
                </Typography>
              </Box>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
              <Typography>
                <Typography variant="subtitle1">Technologies</Typography>
                <ol>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Material UI</li>
                </ol>
              </Typography>
            </Grid>
            <Grid className={classes.buttons} item xs={3}>
              <Box className={classes.button}>
                <Button
                  style={{ alignSelf: 'right' }}
                  onClick={() =>
                    window.open('https://github.com/brycelewis100/portfolio')
                  }
                  variant="contained"
                  color="primary"
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
          <Typography variant="h3" style={{ marginBottom: '0px' }}>
            Javascript Compiler and Notebook
          </Typography>
          <Grid container xs={12}>
            <Grid className={classes.grid} item xs={5}>
              <Box>
                <Typography variant="subtitle1">Summary</Typography>
                <Typography variant="body2">
                  This project is designed to allow a user to write and compile
                  code in the browser. The information saves to a file on their
                  local computer so that when they relaunch the application, all
                  of their data is saved. Calls can be added, deleted, and
                  reorganized.
                </Typography>
                <Typography variant="body2" style={{ paddingTop: '10px' }}>
                  This required extensive use of Babel and other plugins to make
                  things work smoothly. It can be installed from the terminal
                  window using the command:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">npx jsjournal serve</Typography>
                  </li>
                </ul>
              </Box>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
              <Typography variant="subtitle1">Technologies</Typography>
              <Typography variant="body1">
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
                  color="primary"
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
          <Typography variant="h3" style={{ marginBottom: '0px' }}>
            Macro Calculator
          </Typography>
          <Grid container xs={12}>
            <Grid className={classes.grid} item xs={5}>
              <Box>
                <Typography variant="subtitle1">Summary</Typography>
                <Typography variant="body2">
                  This project is designed to help a user calculate their basal
                  metabolic rate (BMR) and determine their macro breakdown in
                  order to meet their fitness goals.
                </Typography>
                <Typography variant="body2" style={{ paddingTop: '10px' }}>
                  They will enter their weight, height, activity level, and
                  weight loss goal, and the program will calculate exactly how
                  many grams of Protien, Fat and carbohydrate they should intake
                  per day.
                </Typography>
              </Box>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
              <Typography variant="subtitle1">Technologies</Typography>
              <Typography variant="body1">
                <ol>
                  <li>Javascript</li>
                  <li>React</li>
                </ol>
              </Typography>
            </Grid>
            <Grid className={classes.buttons} item xs={3}>
              <Box className={classes.button}>
                <Button
                  href="/projects/macro-calculator"
                  variant="contained"
                  color="primary"
                >
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
                  color="primary"
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
          <Typography variant="h3" style={{ marginBottom: '0px' }}>
            Speed Estimate
          </Typography>
          <Grid container xs={12}>
            <Grid className={classes.grid} item xs={5}>
              <Box>
                <Typography variant="subtitle1">Summary</Typography>
                <Typography variant="body2">
                  This project allows a cyclist to enter their average power,
                  height, and weight, and the program will calculate their
                  approximate average speed if they were riding outdoors on a
                  flat road with no wind.
                </Typography>
              </Box>
            </Grid>
            <Grid className={classes.grid} item xs={4}>
              <Typography variant="subtitle1">Technologies</Typography>
              <Typography variant="body1">
                <ol>
                  <li>Javascript</li>
                </ol>
              </Typography>
            </Grid>
            <Grid className={classes.buttons} item xs={3}>
              <Box className={classes.button}>
                <Button variant="contained" color="primary">
                  View
                </Button>
              </Box>
              <Box className={classes.button}>
                <Button variant="contained" color="primary">
                  GitHub
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Projects;
