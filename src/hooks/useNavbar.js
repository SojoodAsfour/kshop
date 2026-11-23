import { useAuthStore } from '../store/useAuthStore';
import useCart from './useCart';
import { useThemeStore } from '../store/themeStore.js';
import { useLanguageStore } from '../store/languageStore.js';

export default function useNavbar() {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const toggleMode = useThemeStore((state) => state.toggleMode);
    const mode = useThemeStore((state) => state.mode);
    const language = useLanguageStore((state) => state.language);
    const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
    const { data } = useCart();

    const cartCount = token ? data?.items?.reduce((total, item) => total + item.count, 0) || 0: 0;

    return { token, logout, cartCount, toggleMode, mode, language, toggleLanguage };
}