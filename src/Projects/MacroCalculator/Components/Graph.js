import React from 'react';

import { Box } from '@mui/material';

import { XYPlot, ArcSeries } from 'react-vis';

const Graph = ({ macroBreakdown }) => {
  const PI = Math.PI;
  const myData = [
    {
      angle0: 0,
      angle: macroBreakdown.carbs * PI * 2,
      radius0: 100,
      radius: 150,
      color: '#FDCA40',
      label: 'carbs',
    },
    {
      angle0: macroBreakdown.carbs * PI * 2,
      angle: macroBreakdown.fat * PI * 2 + macroBreakdown.carbs * PI * 2,
      radius0: 100,
      radius: 150,
      color: '#3066BE',
      label: 'fat',
    },
    {
      angle0: macroBreakdown.fat * PI * 2 + macroBreakdown.carbs * PI * 2,
      angle: 2 * PI,
      radius0: 100,
      radius: 150,
      color: '#61210F',
      label: 'protien',
      subLabel: 'protien',
      labelsAboveChildren: true,
    },
  ];

  return (
    <Box>
      <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={500} height={500}>
        <ArcSeries
          animation
          showLabels
          radiusType={'literal'}
          center={{ x: 0, y: 0 }}
          data={myData}
          colorType={'literal'}
        />
      </XYPlot>
    </Box>
  );
};

export default Graph;
