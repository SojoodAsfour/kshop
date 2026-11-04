import React from 'react'
import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { useMutation } from '@tanstack/react-query';


export default function useAddToCard() {
    
    const token = useAuthStore((state) => state.token);
    const addToCard = async (productId) => {
        const response = await axios.post('https://knowledgeshop.runasp.net/api/Carts',
            { ProductId: productId, Count: 1 }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
    }
    return (
        useMutation({
            mutationFn: addToCard,
        })
    )
}
