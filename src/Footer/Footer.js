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

import Social from './Social';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '100px',
    backgroundColor: 'rgb(33, 33, 33)',
    marginTop: theme.spacing(2),
  },
  container: {
    height: '100%',
  },
  content: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.section}>
      <Container className={classes.container} maxWidth="lg">
        <Grid container className={classes.content}>
          <Grid item xs={6}>
            <Button href="/contact" variant="outlined" color="secondary">
              Get in touch
            </Button>
          </Grid>
          <Grid item>
            <Social direction="row" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
