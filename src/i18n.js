import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import { useLanguageStore } from './store/languageStore.js';

// the translations (the next section moves them into files)
const resources = {
  en: {
    translation: en
  },
  ar: {
    translation: ar
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: useLanguageStore.getState().language, // default language
    fallbackLng: 'en', // use en if detected lng is not available
  });

export default i18n;