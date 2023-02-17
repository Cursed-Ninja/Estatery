import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#7065EE",
      contrastText: "#ffffff",
    },
    accent: {
      main: "#E4D6F9",
      contrastText: "#7065EE",
    },
    text: {
      primary: "#000000",
      secondary: "#90919C",
      accent: "#7065EE",
    },
    primary: {
      main: "#E4D6F9",
      light: "#F5F2FF",
      dark: "#7065EE",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"],
    button: {
      textTransform: "none",
    },
    bodyL: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    bodyS: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    bodyXL: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiPickersToolbar: {
      root: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      root: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      root: {
        color: lightBlue.A700,
        "&$disabled": {
          color: lightBlue["100"],
        },
        "&$selected": {
          backgroundColor: lightBlue["400"],
        },
      },
      today: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModalDialog: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

export default theme;
