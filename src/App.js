import React from 'react';
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
            <Route exact path="/">
              <h1>Bryce Lewis Portfolio</h1>
            </Route>
            <Route exact path="/about-me" component={Main} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route
              exact
              path="/projects/macro-calculator"
              component={MacroCalculator}
            />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
