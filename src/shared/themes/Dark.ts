import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const DarkTheme = createTheme({
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
      default: "#202124",
      paper: "#303134",
    },
  },
});
