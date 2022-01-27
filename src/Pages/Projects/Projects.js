import React from 'react';
import { Box, Typography } from '@material-ui/core';

import ProjectCard from './Components/ProjectCard';

const Projects = (props) => {
  return (
    <Box id="projects">
      <Typography variant="h2">Projects</Typography>

      <ProjectCard
        title="Portfolio Website"
        summary={[
          ' This project is designed to showcase my web development competence',
        ]}
        tech={['Javascript', 'React', 'Material UI']}
        gh="https://github.com/brycelewis100/portfolio"
        view={null}
      />

      <ProjectCard
        title="Javascript Compiler and Notebook"
        summary={[
          'This project is designed to allow a user to write and compile code in the browser. The information saves to a file on their local computer so that when they relaunch the application, all of their data is saved. Calls can be added, deleted, andreorganized.',
          'This required extensive use of Babel and other plugins to make things work smoothly. It can be installed from the terminal window using the command:',
        ]}
        tech={['Typescript', 'NodeJS', 'React', 'Babel', 'Webpack']}
        gh="https://github.com/brycelewis100/jsjournal"
        view={null}
      />

      <ProjectCard
        title="Speed Estimate"
        summary={[
          'This project allows a cyclist to enter their average power, height, and weight, and the program will calculate their approximate average speed if they were riding outdoors on a flat road with no wind.',
        ]}
        tech={['Javascript']}
        gh={null}
        view={null}
      />

      <ProjectCard
        title="Macro Calculator"
        summary={[
          'This project is designed to help a user calculate their basal metabolic rate (BMR) and determine their macro breakdown in order to meet their fitness goals.',
          'They will enter their weight, height, activity level, and weight loss goal, and the program will calculate exactly how many grams of Protien, Fat and carbohydrate they should intake per day.',
        ]}
        tech={['Javascript', 'React']}
        gh="https://github.com/brycelewis100/portfolio/tree/production/src/Projects/MacroCalculator"
        view="/projects/macro-calculator"
      />
    </Box>
  );
};

export default Projects;
