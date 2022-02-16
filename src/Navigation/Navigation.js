import { Button, makeStyles, Grid, Container } from '@material-ui/core';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  company: {
    color: 'white',
    fontSize: '24px',
  },
}));

const Navigation = ({ main }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={3} className={classes.buttonContainer}>
              <Button href="/about-me" className={classes.button}>
                About Me
              </Button>
            </Grid>

            <Grid item xs={3} className={classes.buttonContainer}>
              {main && (
                <Button className={classes.button}>
                  <AnchorLink
                    className={classes.button}
                    href="#education"
                    offset="100"
                  >
                    Education
                  </AnchorLink>
                </Button>
              )}
            </Grid>
            <Grid item xs={3} className={classes.buttonContainer}>
              {main && (
                <Button href="#projects" className={classes.button}>
                  <AnchorLink
                    className={classes.button}
                    href="#projects"
                    offset="100"
                  >
                    Projects
                  </AnchorLink>
                </Button>
              )}
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
