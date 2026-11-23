import React from 'react'
import Box from '@mui/material/Box';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { useProducts } from '../../hooks/UseProducts';
import ProductCard from '../ui/ProductCard';
import PageContainer from '../ui/PageContainer';
import useDebounce from '../../hooks/useDebounce';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

export default function Product({ title = 'Products', limit, showSearch = false }) {

    const { data, isPending, isError } = useProducts();
    const [search, setSearch] = useState('');
    const { t } = useTranslation();
    const debouncedSearch = useDebounce(search, 500);
    const filteredProducts = data?.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
    ) || [];

    const visibleProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

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
                <Alert severity="error">{t('products.errorFetching')}</Alert>
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
                    {t('products.selectedWorks')}
                </Typography>}
                <Typography variant="h2" sx={{ mb: 2 }}>
                    {title === 'Products' ? t('products.title') : title === 'Explore All Products' ? t('products.exploreAll') : title}
                </Typography>
                {limit && <Typography variant='body2' color='text.secondary' sx={{ mb: 4 }}>
                    {t('products.description')}
                </Typography>}

                {showSearch && <TextField
                    fullWidth
                    placeholder={t('products.searchPlaceholder')}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ mb: 3 }}
                />}

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
