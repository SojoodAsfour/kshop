import { createTheme } from '@mui/material/styles';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

const lightPalette = {
  mode: 'light',
  primary: {
    main: '#8B1538',
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
    main: '#956477',
  },
  error: {
    main: '#A83F56',
  },
  info: {
    main: '#796B80',
  },
};

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#C76A8B',
  },
  secondary: {
    main: '#49303F',
    contrastText: '#F5EAF0',
  },
  natural: {
    main: '#BDAEB9',
  },
  brand: {
    main: '#C76A8B',
    contrastText: '#191319',
  },
  background: {
    default: '#191319',
    paper: '#251C25',
    soft: '#302330',
    footer: '#211820',
  },
  text: {
    primary: '#F5EAF0',
    secondary: '#BDAEB9',
  },
  divider: '#453440',
  success: {
    main: '#B77D9B',
  },
  error: {
    main: '#E08091',
  },
  info: {
    main: '#A99AC8',
  },
};

export const getTheme = (mode, dir) => {
  return createTheme({
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

    palette: mode === 'light' ? lightPalette : darkPalette,

    typography: {
      fontFamily: dir === 'rtl'
        ? '"Cairo", sans-serif'
        : '"Montserrat", sans-serif',

      h1: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
        fontSize: '3rem',
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 0,
      },

      h2: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
        fontSize: '2rem',
        fontWeight: 500,
      },

      h3: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
        fontSize: '1.75rem',
        fontWeight: 500,
      },

      h4: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
        fontWeight: 500,
      },

      h5: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
        fontWeight: 500,
      },

      h6: {
        fontFamily: dir === 'rtl'
          ? '"Cairo", sans-serif'
          : '"Playfair Display", serif',
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
    shape: {
      borderRadius: 8,
    },

  });
};
