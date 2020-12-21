import React from 'react';
import './App.css';
import { Grid, ThemeProvider, Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/navbar/navbar';
import Main from './components/common/main/main';
import { theme } from './theme';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} key='main-outer'>
          <Grid item sm={12} md={12} lg={12} xs={12} key='main-inner'>
            <Container>
              <Router>
                <Navbar />
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/' >
                    <Main />
                  </Route>
                </Switch>
              </Router>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
