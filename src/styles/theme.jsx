import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(1, 214, 9)',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: 'white'
    },
    secondary: {
      main: '#fafafa',
      // light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#47008F',
    },
     
  },
});

export default theme