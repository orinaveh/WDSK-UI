import '../styles/globals.css';
import { blue, red } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import type { AppProps } from 'next/app';
import {
  createTheme,
  CssBaseline,
  Drawer,
  ThemeProvider,
  responsiveFontSizes,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  PaletteMode,
  ThemeOptions,
  MenuItem
} from '@mui/material';
import { useMemo, useState } from 'react';
import routes from '../routes';
import Link from 'next/link';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              onClick={() => setIsMenuOpen((p) => !p)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setMode(theme.palette.mode === 'dark' ? 'light' : 'dark')}
              color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Drawer open={isMenuOpen}>
              <MenuItem>
                <IconButton
                  onClick={() => setIsMenuOpen(false)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </MenuItem>
              {routes.map((route) => (
                <MenuItem onClick={() => setIsMenuOpen(false)} key={route.label}>
                  <Link href={route.route}>{route.label}</Link>
                </MenuItem>
              ))}
            </Drawer>
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
