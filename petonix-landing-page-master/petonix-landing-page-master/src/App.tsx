import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core';
import Navbar from './Components/Common/navbar/navbar';
import Main from './Components/Common/main/main';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6D4166'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: [
      'Muli'
    ].join(','),
  }
});

function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} key='main-outer'>
          <Grid item sm={12} md={12} lg={12} xs={12} key='main-inner'>
            <Container>
              <Navbar></Navbar>
            </Container>
              <Main />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
