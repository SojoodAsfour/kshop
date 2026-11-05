import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useProducts = ()=>{
    
    const getProducts = async () =>{
        const response = await axiosInstance.get('/Products');
        return response.data.response.data;
    }
    return useQuery({
        queryKey: ['Products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
    });
}