import { createTheme } from '@mui/material/styles';

import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B1538',
    },
    secondary: {
      main: '#EEDDDD',
    },
    natural:{
        main: '#6d6060',
    }
  },

  typography: {
    fontFamily: '"Playfair Display", serif',
  },
});

export default theme;