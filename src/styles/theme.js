import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  palette: {
    primary: {
      white: '#FFFFFF',
      steelBlue: "#1E2761", // Midnight blue
      main: "#408EC6", // Royal blue
      red: "#7A2048", // burgundy red
      yellow: "#FABD33",
    },
    secondary: {
      main: "#CFFAFA",
      turquioseDark: "#53C2C2",
      turquioseDark2: "#28B8B8",
      orangeRed: "#F76434",
      orangePastel: "#FFE6DC",
      teal: "#4AA088",
      yellowDark: "#FAAD00",
    },
  },
});

export default theme;
