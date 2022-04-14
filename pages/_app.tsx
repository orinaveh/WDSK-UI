import '../styles/globals.css';
import { useMemo, useState } from 'react';
import { blue, red } from '@mui/material/colors';
import { SnackbarProvider } from 'notistack';
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
import routes from '../routes';

import styles from './app.module.scss';
import { useRouter } from 'next/router';

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontSize: 18
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
    MuiTextField: {
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          padding: '1rem'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 4
      }
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const onLinkClick = (route: string, external?: boolean) => {
    if (external) {
      window.open(route);
    } else {
      router.push(route);
      setIsMenuOpen(false);
    }
  };

  const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
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
              <Drawer className={styles.drawer} open={isMenuOpen}>
                <Box sx={{ width: 250 }} role="presentation">
                  <MenuItem className={styles.drawer__first}>
                    <IconButton
                      onClick={() => setIsMenuOpen(false)}
                      edge="start"
                      color="inherit"
                      aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => setMode(theme.palette.mode === 'dark' ? 'light' : 'dark')}
                      color="inherit">
                      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                  </MenuItem>
                  {routes.map((route) => (
                    <MenuItem
                      onClick={() => onLinkClick(route.route, route.external)}
                      key={route.label}>
                      {route.label}
                    </MenuItem>
                  ))}
                </Box>
              </Drawer>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                WDSK
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Component {...pageProps} />
        <CssBaseline />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
