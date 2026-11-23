import React from 'react'
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from '../ui/PageContainer';
import CustomButton from '../ui/CustomButton';
import { useTranslation } from 'react-i18next';

export default function ManifestoSection() {

    const { t } = useTranslation();

    return (
        <Box component='section' sx={{ bgcolor: 'primary.main', py: { xs: 7, md: 10 }, textAlign: 'center' }}>
            <PageContainer>

                <Typography variant='overline' sx={{ color: 'primary.contrastText', fontSize: '0.65rem' }}>
                    {t('manifesto.ourManifest')}
                </Typography>

                <Typography variant='h2' sx={{ color: 'primary.contrastText', fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 850, mx: 'auto', mt: 1, mb: 3 }}>
                    {t('manifesto.title')}
                </Typography>

                <Typography variant='body2' sx={{ color: 'primary.contrastText', maxWidth: 600, mx: 'auto', lineHeight: 1.8, mb: 4 }}>
                    {t('manifesto.description')}
                </Typography>

                <CustomButton component={Link} to='/shop' variant='outlined' color='inherit' fullWidth={false}
                    sx={{ color: 'primary.contrastText',
                        borderColor: 'primary.contrastText',
                        px: 4, py: 1,
                        boxShadow: 'none',
                        '&:hover': {
                            borderColor: 'primary.contrastText',
                            bgcolor: 'primary.dark'
                        }
                    }}>
                    {t('manifesto.startShopping')}
                </CustomButton>

            </PageContainer>
        </Box>
    )
}
