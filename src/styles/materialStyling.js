import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    textTransform: "none",
    color: "#484848",
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#ff8e8c",
      main: "#484848",
      dark: "#c62035",
      contrastText: "#fff"
    },
    secondary: {
      light: "#4da9b7",
      main: "#ff5a5f",
      dark: "#004e5a",
      contrastText: "#000"
    }
  },
});
