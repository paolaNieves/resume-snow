import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Profile from './Components/Profile';
import Resume from './Containers/Resume';
import Portfolio from './Containers/Portfolio';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} style={{ backgroundColor: 'red' }}>
          zbc
          <Profile />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} style={{ backgroundColor: 'blue' }}>
          cclk
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
