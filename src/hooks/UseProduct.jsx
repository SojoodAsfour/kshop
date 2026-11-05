import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function UseProduct(id) {

    const getProductDetails = async () => {
        const response = await axiosInstance.get(`/Products/${id}`);
        return response.data.response;
    }
  return useQuery({
    queryKey: ['ProductDetails', id],
    queryFn: getProductDetails,
    staleTime: 1000 * 60 * 5,
  });
}

