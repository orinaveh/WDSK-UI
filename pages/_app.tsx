import '../styles/globals.css';
import { blue, red } from '@mui/material/colors';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 12
  },
  palette: {
    primary: {
      main: blue[300]
    },
    secondary: {
      main: red[500]
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      }
    }
  }
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp;
