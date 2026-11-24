import React from 'react'
import { Box, Typography, Chip } from '@mui/material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useTranslation } from 'react-i18next';

export default function CartPaymentInfo() {
    const { t } = useTranslation();

    return (
        <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'stretch', lg: 'center' },
            flexDirection: { xs: 'column', lg: 'row' }, flexWrap: 'wrap', gap: 2, bgcolor: 'background.soft',
            borderRadius: 2, p: 2, mt: 3
        }}>

            <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', lg: 'center' }, gap: 1.5, flex: 1, minWidth: 0 }}>

                <Box sx={{ bgcolor: 'background.paper', width: 40, height: 40,
                    borderRadius: 2, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0
                }}>
                    <AccountBalanceWalletOutlinedIcon sx={{ color: 'primary.main', fontSize: 22 }} />
                </Box>

                <Box>
                    <Typography variant='body2' sx={{ fontWeight: 600, mb: 0.5 }}>
                        {t('cart.paymentTitle')}
                    </Typography>

                    <Typography variant='caption' color='text.secondary'>
                        {t('cart.paymentDescription')}
                    </Typography>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', lg: 'flex-end' }, gap: 1, flexWrap: 'wrap', flexShrink: 0 }}>

                <Chip
                    icon={<CreditCardIcon />}
                    label={t('cart.visa')}
                    size='small'
                    sx={{
                        bgcolor: 'background.paper', color: 'text.primary',
                        fontSize: '0.7rem',
                        '& .MuiChip-icon': { color: 'primary.main' }
                    }}
                />

                <Chip
                    icon={<LocalShippingOutlinedIcon />}
                    label={t('cart.cashOnDelivery')}
                    size='small'
                    sx={{
                        bgcolor: 'background.paper', color: 'text.primary',
                        fontSize: '0.7rem',
                        '& .MuiChip-icon': { color: 'primary.main' }
                    }}
                />

            </Box>

        </Box>
    )
}