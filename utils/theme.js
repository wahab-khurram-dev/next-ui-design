import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        bg: {
            // Primary
            1: "#3a3940",
            2: "#09090d",
            // Secondary
            3: "#523fd7",
            // Popup,popover box background color
            4: "#1e1d25",
            // Parent container bg
            5: "#12111A",
            6: "#12111a"
        },
        borders: {
            1: "#3a3940"
        },
        gradient: {
            primary: "linear-gradient(to right, #523fd7, #ff7dff)"
        },
        cSecondary: "#523fd7",
        mode: 'light',
        white: "white",
        textColors: {
            primary: "white",
            secondary: "#ff7dff"
        }
    },
    breakpoints: {
        values: {
            zero: 0,
            mobile: 520,
            tablet: 745,
            mdLarge: 1200,
            largeScreen: 1728,
            default: 1440,
        },
    },

});

export default theme;