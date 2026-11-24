import React from 'react'
import { Box, Button, Checkbox, FormControlLabel } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

export default function CartActions({ count, selectedCount, onSelectAll, onClear, isClearing }) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' }, bgcolor: 'background.paper', borderRadius: 2, p: 1, mb: 2,
            flexWrap: 'wrap', gap: 1
        }}>
            <FormControlLabel
                control={
                    <Checkbox
                        size='small'
                        checked={count > 0 && selectedCount === count}
                        indeterminate={selectedCount > 0 && selectedCount < count}
                        onChange={(e) => onSelectAll(e.target.checked)}
                    />
                }
                label={`${t('cart.selectAll')} (${count})`}
                sx={{
                    m: 0,
                    '& .MuiFormControlLabel-label': {
                        fontSize: '0.75rem',
                        fontWeight: 600
                    }
                }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'flex-end' }, width: { xs: '100%', sm: 'auto' }, gap: 1, flexWrap: 'wrap' }}>
                <Button onClick={onClear} disabled={isClearing} sx={{
                    color: 'text.secondary', fontSize: '0.75rem', gap: 0.5,
                    textTransform: 'none'
                }}>
                    <DeleteOutlineIcon sx={{ fontSize: 16 }} />
                    {t('cart.clearBag')}
                </Button>

                <Button onClick={() => navigate('/shop')} sx={{
                    color: 'primary.main', fontSize: '0.75rem', gap: 0.5,
                    fontWeight: 600
                }}>
                    {t('cart.continueShopping')}
                    {theme.direction === 'rtl' ? <ArrowBackIcon sx={{ fontSize: 15 }} /> : <ArrowForwardIcon sx={{ fontSize: 15 }} />}
                </Button>
            </Box>
        </Box>
    )
}
