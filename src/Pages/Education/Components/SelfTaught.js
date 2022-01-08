import { KeyboardReturnRounded } from '@material-ui/icons';
import React from 'react';

import { Box, Container, Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import UdemyLogo from '../Assets/Udemy.png';

const useStyles = makeStyles((theme) => ({
  textContent: {
    alignSelf: 'center',
    marginTop: '0px',
    paddingLeft: theme.spacing(5),
  },
  card: {
    backgroundColor: '#999',
    margin: '15px 15px 0px 15px',
    paddingTop: '20px',
    paddingBottom: '20px',
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
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle1">{course}</Typography>
          </Box>
        </Grid>
        <Grid item xs={3} className={classes.image}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'right',
              paddingRight: '10px',
            }}
          >
            <img
              style={{ height: '100px', objectFit: 'scale-down' }}
              src={UdemyLogo}
              alt="udemy"
            ></img>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SelfTaught;
