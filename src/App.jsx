import React, { useEffect } from 'react'
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
import { useLanguageStore } from './store/languageStore.js';
import i18n from './i18n.js';

const queryClient = new QueryClient();

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const language = useLanguageStore((state) => state.language);
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const theme = getTheme(mode, dir);
  
  useEffect(() => {
    i18n.changeLanguage(language); 
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, dir]);

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
