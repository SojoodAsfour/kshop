import { useAuthStore } from '../store/useAuthStore';
import useCart from './useCart';

export default function useNavbar() {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const { data } = useCart();

    const cartCount = token ? data?.items?.reduce((total, item) => total + item.count, 0) || 0: 0;

    return { token, logout, cartCount };
}