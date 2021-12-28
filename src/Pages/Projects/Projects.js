import React from 'react';
import { Box, Container, Button, Grid } from '@mui/material';

import Hero from '../../Hero/Hero';
import Footer from '../../Footer/Footer';

const Projects = (props) => {
  const heading = 'Projects';
  const caption = 'This is my Projects';
  const image =
    'https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?cs=srgb&dl=pexels-pixabay-372787.jpg&fm=jpg';
  const btnLeft = 'Education';
  const btnRight = 'Contact';
  return (
    <Box>
      <Hero
        heading={heading}
        caption={caption}
        image={image}
        btnLeft={btnLeft}
        btnRight={btnRight}
      />
      <Footer />
    </Box>
  );
};

export default Projects;
