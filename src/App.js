import React from 'react';
// import { Box, Container, Button } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import Main from './Pages/Main/Main.js';
import Education from './Pages/Education/Education.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';
import MacroCalculator from './Projects/MacroCalculator/MacroCalculator.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222',
    },
    secondary: {
      main: '#FAF9F6',
    },
    tertiary: {
      main: '#E33E7F',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/about-me">
              <Main />
            </Route>
            <Route exact path="/education">
              <Education />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/projects/macro-calculator">
              <MacroCalculator />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
