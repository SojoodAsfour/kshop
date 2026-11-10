
import { createTheme } from '@mui/material/styles';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
  spacing: 8,

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    mode: 'light',

    primary: {
      main: '#8B1538',
      light: '#A72D4D',
      dark: '#72102C',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#F6E5E2',
      contrastText: '#352D2B',
    },

    natural: {
      main: '#837275',
    },

    brand: {
      main: '#8B1538',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#FFF8F6',
      paper: '#FFFFFF',
      soft: '#FFF0ED',
      footer: '#E9D9D8',
    },

    text: {
      primary: '#352D2B',
      secondary: '#837275',
    },

    divider: '#EBDCDC',

    success: {
      main: '#4CAF50',
    },

    error: {
      main: '#F44336',
    },

    info: {
      main: '#2196F3',
    },
  },

  typography: {
  fontFamily: '"Montserrat", sans-serif',

  h1: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '3rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: 0,
  },

  h2: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '2rem',
    fontWeight: 500,
  },

  h3: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '1.75rem',
    fontWeight: 500,
  },

  h4: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 500,
  },

  h5: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 500,
  },

  h6: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 500,
  },

  body1: {
    fontSize: '1rem',
    fontWeight: 400,
  },

  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '22px',
    letterSpacing: '0.14px',
    textTransform: 'none',
  },
},

});

export default theme;
