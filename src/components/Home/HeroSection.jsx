import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { useProducts } from '../../hooks/UseProducts';
import { CircularProgress } from '@mui/material';
import { motion } from 'motion/react';


export default function HeroSection() {

    const { data: products, isPending, isError } = useProducts();

    const heroProduct = products?.[0];

    return (
        <Box sx={{ bgcolor: 'background.soft', py: { xs: 4, md: 5} }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'grid', gridTemplateColumns: {
                        xs: '1fr',
                        md: '1.2fr 0.8fr'
                    },
                    gap: { xs: 4, md: 6 }, alignItems: 'center'}}>

                    <Box component={motion.div}  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="overline" sx={{ color: 'primary.main' }}>
                            NEW COLLECTION
                        </Typography>

                        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, maxWidth: '550px',lineHeight: 1,}}>
                            Thoughtfully Curated Essentials for Modern Living
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Discover timeless craftsmanship, refined silhouettes, and enduring quality in every piece.
                        </Typography>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, flexWrap: 'wrap' }} >
                            <CustomButton component={Link} to="/shop" fullWidth={false}
                                sx={{
                                    borderRadius: 1,
                                    textTransform: 'none',
                                    px: 3,
                                    py: 1
                                }}>
                                Shop Now
                            </CustomButton>

                            <CustomButton component={Link} to="/categories" variant="text" color="inherit" fullWidth={false}
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontSize: '0.75rem'
                                }}>
                                View Catalog →
                            </CustomButton>
                        </Box>

                    </Box>

                    <Box sx={{ bgcolor: 'background.paper', p: 2, border: 1, borderColor: 'divider', maxWidth: 420, width: '100%', mx: 'auto' }} component={motion.div} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                        {isPending ? (
                            <CircularProgress />
                        ) : isError ? (
                            <Typography color="error">
                                Error loading product
                            </Typography>
                        ) : heroProduct ? (
                            <Box component="img" src={heroProduct.image} alt={heroProduct.name} sx={{ width: '100%', height: { xs: 220, md: 280 }, objectFit: 'contain', display: 'block' }} />
                        ) : (
                            <Typography>No products available</Typography>
                        )}

                        {heroProduct && (<Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
                            {heroProduct.name}
                        </Typography>
                        )}
                    </Box>


                </Box>
            </Container>
        </Box>
    )
}
