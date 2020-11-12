import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Container>
      My resume 😜
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} style={{ backgroundColor: 'red' }}>
          zbc
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3} style={{ backgroundColor: 'blue' }}>
          cclk
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
