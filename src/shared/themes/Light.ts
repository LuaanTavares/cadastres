import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[900],
      light: blue[800],
      contrastText: "#ffffff",
    },
    secondary: {
      main: red[900],
      light: red[800],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
