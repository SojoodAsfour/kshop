import React from 'react'
import authAxiosInstance from '../api/authAxiosInstace';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useClearCart() {

    const queryClient = useQueryClient();
    const clearCart = async () => {
        const response = await authAxiosInstance.delete(`/Carts/clear`);
        return response.data;
    }
  return (
    useMutation({
        mutationFn: clearCart,
        onSuccess: () => { 
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        }
    })
  )
}
