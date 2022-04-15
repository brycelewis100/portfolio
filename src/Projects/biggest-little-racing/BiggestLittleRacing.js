import React from 'react';

import { Box, Container } from '@mui/material';

import EventList from './Components/EventList';
import Hero from './Components/Hero';

function App() {
  return (
    <Box>
      <Hero
        heading={'Biggest Little Race Series'}
        caption={''}
        image={
          'https://sunlightliving.com/wp-content/uploads/2021/05/reno-nevada-city-view-1.jpg'
        }
      />
      <Container maxWidth="lg">
        <EventList />
      </Container>
    </Box>
  );
}

export default App;

export const BiggestLittleRacing = () => {
  return (
    <Box>
      <Hero
        heading={'Biggest Little Race Series'}
        caption={''}
        image={
          'https://sunlightliving.com/wp-content/uploads/2021/05/reno-nevada-city-view-1.jpg'
        }
      />
      <Container maxWidth="lg">
        <EventList />
      </Container>
    </Box>
  );
};
