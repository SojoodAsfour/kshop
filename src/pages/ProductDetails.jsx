import React from 'react'
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/UseProduct';
import { Box, CircularProgress, Alert,Typography, Card,CardMedia } from '@mui/material';

export default function ProductDetails() {
    const { id } = useParams();
    const { data, isPending, isError } = useProduct(id);
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
    <Box>
        <Typography variant='h5' component={'h2'} sx={{ mb: 2 }}>{data?.name}</Typography>
        <Card>
            <CardMedia 
                component="img"
                image={data?.image}
                sx={{maxHeight: 500, objectFit: 'contain'}}
                alt={data?.name}
            />
        </Card>
    </Box>
  )
}
