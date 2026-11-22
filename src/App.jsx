import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from '@mui/material/styles';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CustomToast from './components/ui/CustomToast';
import { CssBaseline } from '@mui/material';
import { useThemeStore } from './store/themeStore.js';
import { getTheme } from './theme.js';

const queryClient = new QueryClient();

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const theme = getTheme(mode);
  return (
    <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>
          <CssBaseline />
           <RouterProvider router={router} />
           <CustomToast />
         </ThemeProvider>
    </QueryClientProvider>
  );
}
