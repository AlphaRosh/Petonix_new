import React,{ useState }from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './Common/navbar/Navbar';
import Login from './Component/login/login';
import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FFDA8F"
        },
        secondary: {
            main: '#6D4166'
        },
    },
    typography: {
        color: 'secondary'
    },
});

function App() {
    const [logedIn, setLogedIn] = useState(false);;

    const changeLogedIn = ()=>{
        setLogedIn(!logedIn)
    }

    return (
        <MuiThemeProvider theme={theme}>    
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <TypoGraphy variant="h4"
                            color="textPrimary">
                            Logo here
                        </TypoGraphy>
                        {logedIn && <NavBar></NavBar>}
                    </Toolbar>
                </AppBar>
                <Login changeLogedIn={changeLogedIn}></Login>

            </div>
        </MuiThemeProvider>

    );
}

export default App;
