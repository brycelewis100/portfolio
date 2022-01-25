import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Main from './Pages/Main/Main.js';
import Contact from './Pages/Contact/Contact.js';
import MacroCalculator from './Projects/MacroCalculator/MacroCalculator.js';
import {
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
} from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
    tertiary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <h1>Bryce Lewis Portfolio</h1>
            </Route>
            <Route exact path="/about-me" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/projects/macro-calculator"
              component={MacroCalculator}
            />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
