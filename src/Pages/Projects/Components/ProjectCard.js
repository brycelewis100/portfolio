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
  multiline: {
    whiteSpace: 'pre-wrap',
  },
}));

const ProjectCard = ({ title, summary, tech, gh, view }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.card} elevation={3}>
      <Box className={classes.textContent}>
        <Typography variant="h4" style={{ marginBottom: '0px' }}>
          {title}
        </Typography>
        <Grid container xs={12}>
          <Grid className={classes.grid} item xs={5}>
            <Box>
              <Typography variant="subtitle1">Summary</Typography>
              {summary.map((p) => {
                return <Typography variant="body2">{p}</Typography>;
              })}
            </Box>
          </Grid>
          <Grid className={classes.grid} item xs={4}>
            <Typography variant="subtitle1">Technologies</Typography>
            <Typography variant="body1">
              <ol>
                {tech.map((t) => {
                  return <li>{t}</li>;
                })}
              </ol>
            </Typography>
          </Grid>
          <Grid className={classes.buttons} item xs={3}>
            <Box className={classes.button}>
              {view && (
                <Button href={view} variant="contained" color="primary">
                  View
                </Button>
              )}
            </Box>
            <Box className={classes.button}>
              {gh && (
                <Button
                  onClick={() => window.open(gh)}
                  variant="contained"
                  color="primary"
                >
                  GitHub
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
