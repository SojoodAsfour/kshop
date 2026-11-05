import React from 'react'
import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstace';

export default function useAddToCard() {
    
    const addToCard = async (productId) => {
        const response = await authAxiosInstance.post('/Carts', {productId: productId,Count:1}); 
        return response.data;
    }
    return (
        useMutation({
            mutationFn: addToCard,
        })
    )
}
