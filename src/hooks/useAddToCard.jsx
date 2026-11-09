import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstace';
import { useQueryClient } from '@tanstack/react-query';

export default function useAddToCard() {
    
    const queryClient = useQueryClient();
    const addToCard = async (productId) => {
        const response = await authAxiosInstance.post('/Carts', {productId: productId,Count:1}); 
        return response.data;
    }
    return (
        useMutation({
            mutationFn: addToCard,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['cart'] });
            }
        })
    )
}
