
import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useProducts } from '../../hooks/UseProducts';
import ProductCard from '../ui/ProductCard';
import PageContainer from '../ui/PageContainer';


export default function TopRatedSection() {
    const { data, isPending, isError } = useProducts();
    const [fiveStarsOnly, setFiveStarsOnly] = useState(false);

    const topRatedProducts = data?.filter((product) => product.rate >= (fiveStarsOnly ? 5 : 4)).slice(0, 4) || [];
    if (isPending) {
        return <Typography>Loading products...</Typography>
    }

    if (isError) {
        return <Typography color='error'>Error loading products</Typography>
    }

    return (
        <Box component='section' sx={{ bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
            <PageContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 4 }}>
                    <Box>
                        <Typography variant='overline' color='primary'>
                            COMMUNITY ACCLAIM
                        </Typography>

                        <Typography variant='h2' sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                            Top Rated Selections
                        </Typography>

                        <Typography variant='body2' color='text.secondary'>
                            Acclaimed designs celebrated with the highest client appraisals.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant={fiveStarsOnly ? 'text' : 'contained'}
                            onClick={() => setFiveStarsOnly(false)}
                            sx={{
                                borderRadius: 5,
                                fontSize: '0.7rem', bgcolor: fiveStarsOnly ? 'secondary.main' : 'primary.main',
                                color: fiveStarsOnly ? 'text.primary' : 'primary.contrastText'
                            }}>
                            ALL 4+ STARS
                        </Button>

                        <Button variant={fiveStarsOnly ? 'contained' : 'text'}
                            onClick={() => setFiveStarsOnly(true)}
                            sx={{
                                borderRadius: 5,
                                fontSize: '0.7rem',
                                bgcolor: fiveStarsOnly ? 'primary.main' : 'secondary.main',
                                color: fiveStarsOnly ? 'primary.contrastText' : 'text.primary'
                            }}>
                            5 STAR ONLY
                        </Button>
                    </Box>
                </Box>

                {topRatedProducts.length > 0 ? (
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)'
                        },
                        gap: 2
                    }}>
                        {topRatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </Box>
                ) : (
                    <Typography color='text.secondary'>
                        No products found with this rating.
                    </Typography>
                )}
            </PageContainer>
        </Box>
    )
}
