import React from 'react'
import Box from '@mui/material/Box';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { useProducts } from '../../hooks/UseProducts';
import ProductCard from '../ui/ProductCard';
import PageContainer from '../ui/PageContainer';

export default function Product({ title = 'Products', limit }) {

    const { data, isPending, isError } = useProducts();
    const visibleProducts = limit ? data?.slice(0, limit) : data;
    if (isPending) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Alert severity="error">Error fetching Products</Alert>
            </Box>
        )
    }
    return (
        <PageContainer>
            <Box sx={{
                pt: { xs: 4, md: 5 },
                pb: { xs: 5, md: 8 },
            }}>
                {limit && <Typography variant='overline' color='primary'>
                    SELECTED WORKS
                </Typography>}
                <Typography variant="h2" sx={{ mb: 2 }}>
                    {title}
                </Typography>
                {limit && <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
                    Every object reflects precision finish and natural materiality.
                </Typography>}
                <Box sx={{
                    display: 'grid', gap: 2, gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(4, 1fr)",
                    }
                }}>
                    {visibleProducts?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Box>
            </Box>
        </PageContainer>
    )
}
