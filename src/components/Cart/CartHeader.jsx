import React from 'react'
import { Box, Typography, Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTranslation } from 'react-i18next';

export default function CartHeader({ count }) {
    const { t } = useTranslation();

    return (
        <Box sx={{ mb: { xs: 2, md: 3 } }}>

            <Breadcrumbs separator="/" sx={{ mb: { xs: 1, md: 2 }, fontSize: '0.75rem' }}>
                <Box component={Link} to="/home" sx={{
                    display: 'flex', alignItems: 'center', gap: 0.5,
                    color: 'text.secondary', textDecoration: 'none',
                    '&:hover': { color: 'primary.main' }
                }}>
                    <HomeOutlinedIcon sx={{ fontSize: 15 }} />
                    {t('nav.home')}
                </Box>

                <Typography sx={{ fontSize: '0.75rem', color: 'text.primary' }}>
                    {t('cart.breadcrumb')}
                </Typography>
            </Breadcrumbs>

            <Typography variant='overline' color='primary' sx={{ letterSpacing: '1px', fontWeight: 600, fontSize: { xs: '0.65rem', md: '0.75rem' } }}>
                {t('cart.overline')}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: { xs: 0.5, md: 1 }, flexWrap: 'wrap' }}>
                <Typography variant='h1' sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
                    {t('cart.shoppingBag')}
                </Typography>

                <Typography variant='caption' color='text.secondary'>
                    ({t('cart.itemCount', { count })})
                </Typography>
            </Box>

        </Box>
    )
}