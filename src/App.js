import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Context from "./context/context";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <Context>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div className="App">
            <Navbar />
            <Main />
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Context>
  );
}

export default App;
