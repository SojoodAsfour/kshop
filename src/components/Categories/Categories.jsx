import React from 'react'
import Box from '@mui/material/Box';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { useCategories } from '../../hooks/UseCategories';
import CategoryItem from '../ui/CategoryItem';

export default function Categories() {
    
    const {data, isPending, isError} = useCategories();

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
                <Alert severity="error">Error fetching categories</Alert>
            </Box>
        )
    }

    return (
        <>
            <Box>
                <Typography variant='h5' component={'h2'} sx={{ mb: 2 }}>Categories</Typography>
                <Box sx={{ display: 'grid', gap: 2, gridAutoColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                } }}>
                    {data?.map((category) => (
                        <CategoryItem category={category} />
                    ))}
                </Box>
            </Box>
        </>
    )
}
