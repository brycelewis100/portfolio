import {
  Box,
  Button,
  makeStyles,
  Typography,
  Grid,
  Paper,
  Container,
  IconButton,
  Link,
} from '@material-ui/core';

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

const Social = ({ direction }) => {
  return (
    <Grid container direction={direction || 'row'} spacing={3}>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={item.url}>
            <IconButton style={{ color: 'white' }}>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Social;
