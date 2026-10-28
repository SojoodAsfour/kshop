import React from 'react'
import Box from '@mui/material/Box';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { useProducts } from '../../hooks/UseProducts';
import ProductCard from '../ui/ProductCard';

export default function Product() {

    const { data, isPending, isError } = useProducts();
    if(isPending){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress />
            </Box>
        )
    }

    if(isError){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Alert severity="error">Error fetching Products</Alert>
            </Box>
        )
    }
  return (
     <>
            <Box>
                <Typography variant='h5' component={'h2'} sx={{ mb: 2 }}>Products</Typography>
                <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                } }}>
                    {data?.map((product) => (
                        <ProductCard product={product} />
                    ))}
                </Box>
            </Box>
        </>
  )
}
