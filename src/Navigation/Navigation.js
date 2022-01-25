import { Button, makeStyles, Grid, Container } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: 'white',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  company: {
    color: 'white',
    fontSize: '24px',
  },
}));

const Navigation = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} className={classes.buttonContainer}>
              <Button href="/about-me" className={classes.button}>
                About me
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.buttonContainer}>
              <Button href="#education" className={classes.button}>
                Education
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.buttonContainer}>
              <Button href="#projects" className={classes.button}>
                Projects
              </Button>
            </Grid>
            <Grid item xs={3} className={classes.buttonContainer}>
              <Button href="/contact" className={classes.button}>
                Contact
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navigation;
