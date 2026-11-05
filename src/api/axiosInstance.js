import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    headers: {
        "Accept-Language": "en",
    }
    
});
console.log('BASE URL:', import.meta.env.VITE_BASEURL);

export default axiosInstance;
