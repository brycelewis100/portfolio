import { Grid, IconButton, Link, makeStyles } from '@material-ui/core';

import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const socialItems = [
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/bryce-lewis-unr/' },
  {
    icon: GitHubIcon,
    url: 'https://github.com/brycelewis100/brycelewis100.github.io.git',
  },
];

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.grey[200],
  },
}));

const Social = ({ direction }) => {
  const classes = useStyles();
  return (
    <Grid container direction={direction || 'row'} spacing={3}>
      {socialItems.map((item) => (
        <Grid item key={item.url}>
          <Link href={item.url}>
            <IconButton className={classes.icon}>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Social;
