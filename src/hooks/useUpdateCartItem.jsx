import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstace';
import { useQueryClient } from '@tanstack/react-query';

export default function useUpdateCartItem() {
    const queryClient = useQueryClient();
    const updateCartItem = async ({ productId, count }) => {
        const response = await authAxiosInstance.patch(`/Carts/${productId}`, { count });
        return response.data;
    }
    return (
        useMutation({
            mutationFn: updateCartItem,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            }

        })
    )
}
