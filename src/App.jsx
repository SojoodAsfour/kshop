import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>
          <CssBaseline />
           <RouterProvider router={router} />
           <ToastContainer />
         </ThemeProvider>
    </QueryClientProvider>
  );
}
