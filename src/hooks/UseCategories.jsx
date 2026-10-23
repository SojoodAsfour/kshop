import axios from 'axios'
import React from 'react'
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
    const getCategories = async () => {
        const response = await axios.get('https://knowledgeshop.runasp.net/api/Categories',
            {
                headers: {
                    'Accept-Language': 'en'
                }
            });
        return response.data.response.data;
    }
    return useQuery({
        queryKey: ['Categories'],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    });
}