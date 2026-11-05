import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
import authAxiosInstance from '../api/authAxiosInstace';
import { useQuery } from '@tanstack/react-query';

export default function useCart() {

    const token = useAuthStore((state) => state.token);
    const getCart = async() => {
        const response = await authAxiosInstance.get(`Carts`);
        return response.data;
    }
  return (
    useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
        enabled: !!token,
        staleTime: 1000 * 60 * 5,
    })
  )
}
