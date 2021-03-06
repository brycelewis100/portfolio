import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Main from './Pages/Main/Main.js';
import Contact from './Pages/Contact/Contact.js';
import MacroCalculator from './Projects/MacroCalculator/MacroCalculator.js';
import { BiggestLittleRacing } from './Projects/biggest-little-racing/BiggestLittleRacing.js';

let theme = createTheme({
  palette: {
    primary: {
      dark: '#0c2431',
      main: '#143B52',
      light: '#8CC5E3',
    },
    secondary: {
      dark: '#C16B49',
      main: '#d8a28c',
      light: '#FAF3F0',
      contrastText: '#0c2431',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Verdana',
    fontSize: 14,
    h1: {
      fontSize: '5rem',
      marginBottom: '20px',
      marginTop: '20px',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '2rem',
      marginBottom: '20px',
      marginTop: '20px',
    },
    h3: {
      fontSize: '1.5rem',
      marginBottom: '20px',
      marginTop: '20px',
    },
    h4: {
      fontSize: '1.25rem',
      marginBottom: '5px',
      marginTop: '10px',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '1rem',
      marginBottom: '20px',
      fontWeight: 700,
      letterSpacing: '.1em',
    },
    h6: {
      fontSize: '1rem',
      marginBottom: '20px',
    },
    subtitle1: {
      // fontWeight: 600,
      letterSpacing: '.05em',
      marginBottom: '5px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 2.0,
      marginBottom: '10px',
    },
    body2: {
      fontSize: '.95rem',
      lineHeight: 1.7,
      marginBottom: '10px',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

theme = responsiveFontSizes(theme, { factor: 3 });

function App() {
  return (
    <ThemeProvider theme={theme} style={{ padding: 0 }}>
      <Router>
        <div style={{ padding: 0 }}>
          <Switch>
            <Route exact path="/" component={Main}>
              {/* <h1>Bryce Lewis Portfolio</h1> */}
            </Route>
            <Route exact path="/about-me" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/projects/macro-calculator"
              component={MacroCalculator}
            />
            <Route
              exact
              path="/biggest-little-racing"
              component={BiggestLittleRacing}
            />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
