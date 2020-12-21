import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
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
})