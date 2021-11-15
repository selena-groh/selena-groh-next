import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7DE2D1",
    },
    secondary: {
      main: "#E53D00",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
