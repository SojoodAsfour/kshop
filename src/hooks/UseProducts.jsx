import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useProducts = ()=>{
    
    const getProducts = async () =>{
        const response = await axios.get('https://knowledgeshop.runasp.net/api/Products', {
            headers: {
                'Accept-Language': 'en'
            }
        });
        return response.data.response.data;
    }
    return useQuery({
        queryKey: ['Products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
    });
}