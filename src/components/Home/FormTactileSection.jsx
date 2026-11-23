import React from 'react'
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PageContainer from '../ui/PageContainer';
import CustomButton from '../ui/CustomButton';
import { useProducts } from '../../hooks/UseProducts';
import { useTranslation } from 'react-i18next';

export default function FormTactileSection() {

    const { t } = useTranslation();

    const { data: products } = useProducts();

    return (
        <Box component='section' sx={{ bgcolor: 'background.soft', py: { xs: 5, md: 7 } }}>
            <PageContainer>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '0.9fr 1.1fr'
                    }, alignItems: 'center',
                    gap: 4
                }}>

                    <Box>
                        <Typography variant='overline' color='primary'>
                            {t('formTactile.editorialDiscourse')}
                        </Typography>

                        <Typography variant='h2' sx={{ mb: 2 }}>
                            {t('formTactile.title')}
                        </Typography>

                        <Typography variant='body2' color='text.secondary' sx={{ lineHeight: 1.8, mb: 2 }}>
                            {t('formTactile.description')}
                        </Typography>

                        <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2, mb: 3 }}>
                            <Typography sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', mb: 1 }}>
                                {t('formTactile.quote')}
                            </Typography>

                            <Typography variant='caption' color='text.secondary'>
                                {t('formTactile.philosophy')}
                            </Typography>
                        </Box>

                        <CustomButton component={Link} to='/shop' fullWidth={false} sx={{ px: 3, py: 1 }}>
                            {t('formTactile.browseProducts')}
                        </CustomButton>
                    </Box>


                    <Box sx={{ display:  {xs: 'none', md: 'grid' }, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gridTemplateRows: { sm: 'repeat(2, 180px)' }, gap: 2, position: 'relative', }}>
                        {products?.slice(0, 3).map((product, index) => (
                            <Box key={product.id} sx={{
                                gridRow: { sm: index === 0 ? 'span 2' : 'auto' },
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                overflow: 'hidden',
                                p: 1 }}>
                                <Box component='img'
                                    src={product.image}
                                    alt={product.name}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                                <Box sx={{position: 'absolute',
                                    bottom: 12, left: 12,
                                    bgcolor: 'background.paper',
                                    p: 1, borderRadius: 1
                                }}>
                                    <Typography variant='caption' color='text.secondary'>
                                        {product.name}
                                    </Typography>

                                    <Typography color='primary' sx={{ fontWeight: 600 }}>
                                        {product.price}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                    </Box>


                </Box>
            </PageContainer>
        </Box>
    )
}
