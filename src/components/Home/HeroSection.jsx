import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';
import { useProducts } from '../../hooks/UseProducts';
import { CircularProgress } from '@mui/material';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';


export default function HeroSection() {

    const { t } = useTranslation();
    const { data: products, isPending, isError } = useProducts();
    const heroProduct = products?.[0];

    return (
        <Box sx={{ bgcolor: 'background.soft', py: { xs: 4, md: 5 } }}>
            <Container maxWidth="lg">
                <Box sx={{
                    display: 'grid', gridTemplateColumns: {
                        xs: '1fr',
                        md: '1.2fr 0.8fr'
                    },
                    gap: { xs: 4, md: 6 }, alignItems: 'center'
                }}>

                    <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="overline" sx={{ color: 'primary.main' }}>
                            {t('hero.newCollection')}
                        </Typography>

                        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, maxWidth: '550px', lineHeight: 1, }}>
                            {t('hero.title')}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {t('hero.description')}
                        </Typography>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3, flexWrap: 'wrap' }} >
                            <CustomButton component={Link} to="/shop" fullWidth={false}
                                sx={{
                                    borderRadius: 1,
                                    textTransform: 'none',
                                    px: 3,
                                    py: 1
                                }}>
                                {t('hero.shopNow')}
                            </CustomButton>

                            <CustomButton component={Link} to="/categories" variant="text" color="inherit" fullWidth={false}
                                sx={{
                                    color: 'text.primary',
                                    textTransform: 'none',
                                    fontSize: '0.75rem'
                                }}>
                                {t('hero.viewCatalog')} →
                            </CustomButton>
                        </Box>

                    </Box>

                    <Box sx={{ bgcolor: 'background.paper', p: 2, border: 1, borderColor: 'divider', maxWidth: 420, width: '100%', mx: 'auto' }} component={motion.div} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                        {isPending ? (
                            <CircularProgress />
                        ) : isError ? (
                            <Typography color="error">
                                {t('home.errorLoadingProducts')}
                            </Typography>
                        ) : heroProduct ? (
                            <Box component="img" src={heroProduct.image} alt={heroProduct.name} sx={{ width: '100%', height: { xs: 220, md: 280 }, objectFit: 'contain', display: 'block' }} />
                        ) : (
                            <Typography>{t('home.noProducts')}</Typography>
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
