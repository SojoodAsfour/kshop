import React from 'react'
import { Divider, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CustomButton from '../ui/CustomButton';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function CartSummary({ total, selectedCount, onCheckout }) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>

            <Paper sx={{
                p: { xs: 1.5, sm: 2, md: 3 }, bgcolor: 'background.paper',
                border: 1, borderColor: 'divider', borderRadius: 2, boxShadow: 1
            }}>
                <Typography variant='h4' sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, mb: { xs: 2, md: 3 } }}>
                    {t('cart.summary')}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <Typography variant='body2' color='text.secondary' sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>
                            {t('cart.itemsSubtotal')}
                        </Typography>
                        <Typography variant='body2' sx={{ fontWeight: 600, flexShrink: 0 }}>
                            ${total}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 1 }}>
                        <Typography variant='body2' color='text.secondary' sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>
                            {t('cart.estimatedDelivery')}
                        </Typography>
                        <Typography variant='caption' color='text.secondary' sx={{ textAlign: 'end', maxWidth: { xs: '50%', md: 'none' } }}>
                            {t('cart.calculatedAtCheckout')}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 1 }}>
                        <Typography variant='body2' color='text.secondary' sx={{ fontSize: { xs: '0.75rem', md: 'inherit' } }}>
                            {t('cart.estimatedTax')}
                        </Typography>
                        <Typography variant='caption' color='text.secondary' sx={{ textAlign: 'end', maxWidth: { xs: '50%', md: 'none' } }}>
                            {t('cart.calculatedAtCheckout')}
                        </Typography>
                    </Box>

                </Box>

                <Divider sx={{ my: { xs: 2, md: 3 } }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h6'>
                        {t('cart.total')}
                    </Typography>

                    <Typography variant='h5' color='primary.main' sx={{ fontWeight: 600, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        ${total}
                    </Typography>
                </Box>

                <Typography variant='caption' color='text.secondary'>
                    {t('cart.totalNote')}
                </Typography>

                <CustomButton fullWidth variant='contained' disabled={selectedCount === 0 || !onCheckout} onClick={onCheckout} sx={{
                    mt: { xs: 2, md: 3 }, borderRadius: 5, display: 'flex', alignItems: 'center', gap: 1,
                    fontSize: { xs: '0.7rem', sm: '0.875rem' }, flexWrap: 'wrap'
                }}>
                    {t('cart.proceedToCheckout')}
                    {i18n.dir() === 'rtl' ? <ArrowBackIcon sx={{ fontSize: 16 }} /> : <ArrowForwardIcon sx={{ fontSize: 16 }} />}
                </CustomButton>

                <Button fullWidth onClick={() => navigate('/shop')} sx={{
                    mt: 1, color: 'primary.main', fontSize: '0.75rem', fontWeight: 600
                }}>
                    {t('cart.continueShopping')}
                </Button>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <VerifiedUserOutlinedIcon sx={{ fontSize: 15, color: 'text.secondary' }} />

                    <Typography variant='caption' color='text.secondary' sx={{ textAlign: 'center' }}>
                        {t('cart.secureCheckout')}
                    </Typography>
                </Box>

            </Paper>

        </Box>
    )
}