import React from 'react'
import { Box, Typography, Paper } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomButton from '../ui/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EmptyCart() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    return (
        <Paper sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', minHeight: 400,
            p: { xs: 3, md: 6 }, gap: 2,
            bgcolor: 'background.paper',
            border: 1, borderColor: 'divider',
            borderRadius: 3, boxShadow: 'none'
        }}>

            <Box sx={{
                width: 90, height: 90,
                bgcolor: 'background.soft',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', mb: 1
            }}>
                <ShoppingBagOutlinedIcon sx={{ fontSize: 42, color: 'primary.main' }} />
            </Box>

            <Typography variant='overline' color='primary.main' sx={{ letterSpacing: i18n.dir() === 'rtl' ? 0 : 2, fontWeight: 600 }}>
                {t('cart.overline')}
            </Typography>

            <Typography variant='h4' component='h2' sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600 }}>
                {t('cart.empty')}
            </Typography>

            <Typography variant='body2' color='text.secondary' sx={{ maxWidth: 400, lineHeight: 1.8 }}>
                {t('cart.emptyMessage')}
            </Typography>

            <CustomButton fullWidth={false} variant='contained'
                onClick={() => navigate('/shop')}
                sx={{ mt: 2, px: 4, py: 1.5, borderRadius: 5, gap: 1, display: 'flex', alignItems: 'center' , width: { xs: '100%', sm: 'auto' },}}>
                {t('cart.continueShopping')}

                {i18n.dir() === 'rtl' ? <ArrowBackIcon fontSize='small' /> : <ArrowForwardIcon fontSize='small' />}
            </CustomButton>

        </Paper>
    )
}
