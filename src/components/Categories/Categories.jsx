import React from 'react'
import Box from '@mui/material/Box';
import { Alert, CircularProgress, Typography } from '@mui/material';
import { useCategories } from '../../hooks/UseCategories';
import CategoryItem from '../ui/CategoryItem';
import PageContainer from '../ui/PageContainer';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Categories({ title = 'Categories', showViewAll = false }) {

    const { data, isPending, isError } = useCategories();
    const {t} = useTranslation();

    if (isPending) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Alert severity="error">{t('categories.fetchError')}</Alert>
            </Box>
        )
    }

    return (
        <Box sx={{ py: { xs: 4, md: 6 } }}>
            <PageContainer>
                <Box >
                    <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, flexDirection: { xs: 'column', md: 'row' }, gap: 2,mb: 3}}>
                        <Box>
                            <Typography variant="overline" sx={{ color: 'primary.main', fontSize: '0.65rem',fontWeight: 600}}>
                                {t('categories.structuredCuration')}
                            </Typography>

                            <Typography variant="h2" sx={{fontSize: { xs: '1.6rem', md: '2rem' }, mb: 0.5}}>
                                {title === 'Categories' ? t('categories.title') : title}
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                {t('categories.description')}
                            </Typography>
                        </Box>

                        {showViewAll && (
                            <Button component={Link} to="/categories" sx={{ color: 'primary.main',fontSize: '0.75rem'}}>
                                {t('home.viewAll')} →
                            </Button>
                        )}
                    </Box>


                    <Box sx={{
                        display: 'grid', gap: 2, gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        }
                    }}>
                        {data?.map((category, index) => (
                            <CategoryItem key={category.id} category={category} index={index} />
                        ))}
                    </Box>
                </Box>
            </PageContainer>
        </Box >
    )
}
