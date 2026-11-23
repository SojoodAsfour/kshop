import {create} from 'zustand';

export const useLanguageStore = create((set, get) => ({
    language: localStorage.getItem('language') || 'en',

    toggleLanguage: () => {
        const currentLanguage = get().language;
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', newLanguage);
        set({ language: newLanguage });
    }
}));