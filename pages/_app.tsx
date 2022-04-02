import '../styles/globals.css';
import { blue, red } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  responsiveFontSizes,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  PaletteMode,
  ThemeOptions
} from '@mui/material';
import { useMemo, useState } from 'react';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: 12
  },
  palette: {
    mode,
    primary: {
      main: red[400]
    },
    secondary: {
      main: blue[500]
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

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setMode(theme.palette.mode === 'dark' ? 'light' : 'dark')}
              color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WDSK
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp;
