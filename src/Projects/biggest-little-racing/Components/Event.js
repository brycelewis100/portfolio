import React from 'react';

import { Box, Card, Typography, Grid, Link, Button } from '@mui/material';
import GoogleMapReact from 'google-map-react';

import SimpleMap from './Map';

const Event = ({ title, date, description, img, links, rsvp, courseMap }) => {
  console.log(date);
  return (
    <Box>
      <Card style={{ padding: 40, marginTop: 20 }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 20,
          }}
        >
          <Typography variant="h4">{title}</Typography>
          {date && <Typography variant="h6">{date.toDateString()}</Typography>}
        </Box>
        <Grid container>
          <Grid item xs={6} style={{ paddingRight: 10 }}>
            <Box
              style={{
                // display: 'flex',
                // alignContent: 'center',
                height: '100%',
              }}
            >
              <img
                alt={img}
                src={img}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              ></img>
            </Box>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: 10 }}>
            {description.map((paragraph) => {
              return (
                <Typography style={{ paddingBottom: 10 }}>
                  {paragraph}
                </Typography>
              );
            })}

            <Grid
              container
              style={{
                display: 'flex',
                textAlign: 'left',
                alignItems: 'center',
              }}
            >
              <Grid
                item
                xs={6}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>

        <h2>Stages:</h2>
        <Grid container>
          <Grid item xs={12}>
            {links.map((link, i) => {
              return (
                <Typography>
                  <Link href={link.link}>{`Stage ${i + 1}: ${
                    link.stageName
                  }`}</Link>
                </Typography>
              );
            })}
          </Grid>
          <Grid item xs={12}>
            <h2>Course Map:</h2>
            <img
              alt={courseMap}
              src={courseMap}
              style={{ width: '100%', objectFit: 'contain' }}
            ></img>
          </Grid>
          <Grid item xs={12}>
            <h2>Camping</h2>
            <SimpleMap />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Event;
