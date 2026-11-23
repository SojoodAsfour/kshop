import React from 'react'
import { Divider, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CustomButton from '../ui/CustomButton';
import { useTranslation } from 'react-i18next';


export default function CartSummary({ total }) {
    const { t } = useTranslation();
    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant='h4' sx={{ p: 2 }}>
                {t('cart.summary')}
            </Typography>
            <Divider />
            <Box>
                <Typography>
                    {t('cart.totalPrice')}: ${total}
                </Typography>
            </Box>
            <CustomButton fullwidth variant='contained' sx={{ display: 'block', mx: 'auto', mt: 2 }}>
                {t('cart.checkout')}
            </CustomButton>
        </Paper>
    )
}
