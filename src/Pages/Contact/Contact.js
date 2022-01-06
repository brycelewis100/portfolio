import React from 'react';
import { Box } from '@mui/material';

import Hero from '../../Hero/Hero';

const Contact = (props) => {
  const heading = 'Contact';
  const caption = 'This is my Contact';
  const image =
    'https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?cs=srgb&dl=pexels-ena-marinkovic-3640930.jpg&fm=jpg';
  const btnLeft = 'Projects';
  const btnRight = '';
  return (
    <Box>
      <Hero
        heading={heading}
        caption={caption}
        image={image}
        btnLeft={btnLeft}
        btnRight={btnRight}
      />
    </Box>
  );
};

export default Contact;
