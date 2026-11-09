import React from 'react'
import authAxiosInstance from '../api/authAxiosInstace';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export default function useRemoveItemCart() {

    const queryClient = useQueryClient();

    const removeItemCart = async (productId) => {
        const response = await authAxiosInstance.delete(`Carts/${productId}`);
        return response.data;
    }
  return (
    useMutation({
        mutationFn: removeItemCart,
        onSuccess: () => { 
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        }
    })
  )
}
