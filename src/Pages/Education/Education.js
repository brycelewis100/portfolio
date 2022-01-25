import React from 'react';
import {
  makeStyles,
  Box,
  Container,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import SelfTaught from './Components/SelfTaught';

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
import Typescript from './Assets/Typescript.png';
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
    margin: '15px 15px 0px 15px',
  },
  logoCard: {
    margin: '15px 7.5px 0px 7.5px',
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '75%',
    height: '75%',
    objectFit: 'contain',
  },
  logoBig: {
    width: '50%',
    height: '50%',
    objectFit: 'contain',
  },
  competencyButton: {
    width: '200px',
    height: '212px',
    backgroundColor: 'transparent',
  },
}));

const Education = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <h1>Education</h1>

      <h2>Self Study</h2>

      <SelfTaught
        title={`React and Typescript: Build a Portfolio Project`}
        course={'Instructor - Steven Grider'}
      />
      <SelfTaught
        title={`Typescript: The Complete Developer's Guide`}
        course={'Instructor - Steven Grider'}
      />
      <SelfTaught
        title={`Modern React with Redux`}
        course={'Instructor - Steven Grider'}
      />
      <SelfTaught
        title={`The Complete JavaScript Course 2022: From Zero to Expert!`}
        course={'Instructor - Jonas Schedtmann'}
      />
      <SelfTaught
        title={`Build Responsive Real-World Websites with HTML and CSS`}
        course={'Instructor - Jonas Schedtmann'}
      />

      <h2>Formal Education</h2>
      <Paper className={classes.card} elevation={3}>
        <Grid container xs={12}>
          <Grid item xs={9} className={classes.textContent}>
            <Box>
              <Typography variant="h6">University of Nevada Reno</Typography>
              <Typography variant="subtitle1">
                Bachelors of Science: Mechanical Engineering
              </Typography>
              <Typography variant="subtitle1">3.95 GPA</Typography>
            </Box>
          </Grid>
          <Grid item xs={3} className={classes.image}>
            <Box>
              <img src={N} alt="N"></img>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <h2>Competencies</h2>
      <Grid container xs={12}>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://www.javascript.com/')}
              className={classes.competencyButton}
            >
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
            <Button
              onClick={() => window.open('https://www.typescriptlang.org/')}
              className={classes.competencyButton}
            >
              <img
                src={Typescript}
                alt="typescript"
                className={classes.logoBig}
              ></img>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://en.wikipedia.org/wiki/HTML')}
              className={classes.competencyButton}
            >
              <img src={HTML} alt="HTML" className={classes.logoBig}></img>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://en.wikipedia.org/wiki/CSS')}
              className={classes.competencyButton}
            >
              <img src={CSS} alt="CSS" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://github.com/brycelewis100')}
              className={classes.competencyButton}
            >
              <img src={Github} alt="Github" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://reactjs.org/')}
              className={classes.competencyButton}
            >
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
            <Button
              onClick={() => window.open('https://redux.js.org/')}
              className={classes.competencyButton}
            >
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
            <Button
              onClick={() =>
                window.open('https://www.mathworks.com/products/matlab.html')
              }
              className={classes.competencyButton}
            >
              <img src={Matlab} alt="Matlab" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() => window.open('https://www.solidworks.com/')}
              className={classes.competencyButton}
            >
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
            <Button
              onClick={() =>
                window.open('https://www.autodesk.com/products/inventor')
              }
              className={classes.competencyButton}
            >
              <img src={Inventor} alt="Inventor" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() =>
                window.open('https://www.autodesk.com/products/autocad')
              }
              className={classes.competencyButton}
            >
              <img src={Autocad} alt="Autocad" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.logoCard} elevation={3}>
            <Button
              onClick={() =>
                window.open('https://www.microsoft.com/en-us/microsoft-365')
              }
              className={classes.competencyButton}
            >
              <img src={Office} alt="Office" className={classes.logo}></img>
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
