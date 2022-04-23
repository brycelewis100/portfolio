import React from 'react';

import { Box, Card, Typography, Grid, Link, Button } from '@mui/material';

import CampingMap from './CampingMap';
import ContactForm from './ContactForm';

const Event = ({
  title,
  date,
  description,
  img,
  links,
  rsvp,
  courseMap,
  camping,
}) => {
  console.log(date);
  return (
    <Box>
      <Card style={{ padding: '2.5vw', marginTop: 20 }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 20,
          }}
        >
          <Typography variant="h2">{title}</Typography>
          {date && <Typography variant="h4">{date.toDateString()}</Typography>}
        </Box>
        <Grid container>
          <Grid item xs={12} style={{ paddingBottom: 30 }}>
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
          <Grid item xs={12}>
            {description.map((paragraph) => {
              return (
                <Typography style={{ paddingBottom: 10 }}>
                  {paragraph}
                </Typography>
              );
            })}
          </Grid>
          <h2>Stages: (Final Stage Order TBD)</h2>
          <Grid item xs={12}>
            {links.map((link, i) => {
              return (
                <Typography>
                  <Link href={link.link} target="_blank">{`Stage ${i + 1}: ${
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
            <h2>Camping: (Final Details TBD)</h2>
            <div style={{ marginBottom: 20 }}>
              <Typography>
                <Link href={camping.link}>Directions</Link>
              </Typography>
            </div>
            <CampingMap camping={camping} />
            <ContactForm />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Event;
