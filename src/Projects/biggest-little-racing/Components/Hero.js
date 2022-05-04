import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Hero = ({ heading, caption, image }) => {
  return (
    <SectionDiv style={{ backgroundImage: `url(${image})` }}>
      <Overlay />
      <Content container>
        <Grid item xs={8}>
          <Heading>
            <Typography variant="h2">{heading}</Typography>
          </Heading>
          <Caption>
            <Typography variant="h4">{caption}</Typography>
          </Caption>
        </Grid>
      </Content>
    </SectionDiv>
  );
};

export default Hero;

const SectionDiv = styled.div`
  margin: 0;
  height: 50vh;
  width: 100%;
  background-size: cover;
`;

const Overlay = styled.div`
  background-color: rgba(33, 33, 33, 0.2);
  height: 50vh;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

const Content = styled(Grid)`
  height: 100%;
  justify-content: center;
  align-items: center;
  transform: translate(0, -15%);
  color: white;
  position: relative;
  z-index: 50;
`;

const Heading = styled(Box)`
  text-align: center;
  margin-bottom: 30px;
`;

const Caption = styled(Box)`
  text-align: center;
`;
