import React from 'react';

import { makeStyles, Box, Grid, Paper, Typography } from '@material-ui/core';

import UdemyLogo from '../Assets/Udemy.png';
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  textContent: {
    alignSelf: 'center',
    marginTop: '0px',
    paddingLeft: theme.spacing(5),
  },
  card: {
    margin: '10px 10px 0px 10px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  udemy: {
    width: '75%',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    paddingRight: '10px',
    height: '100%',
  },
}));

//// https://stackoverflow.com/questions/37062176/mui-how-to-animate-card-depth-on-hover

const SelfTaught = ({ title, course }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card} elevation={3}>
      <Grid container xs={12}>
        <Grid item xs={9} className={classes.textContent}>
          <Box>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle1">{course}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className={classes.image}>
          <Box className={classes.imgContainer}>
            <img className={classes.udemy} src={UdemyLogo} alt="udemy"></img>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SelfTaught;
