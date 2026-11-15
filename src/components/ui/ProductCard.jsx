import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Rating } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAddToCard from '../../hooks/useAddToCard';
import CustomButton from './CustomButton';
import { Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function ProductCard({ product }) {
    const { mutate: addToCart, isPending } = useAddToCard();
    console.log(product);
    return (
        <>
            <Card sx={{
                height: '100%',
                border: 1,
                borderColor: 'divider',
                boxShadow: 'none',
                borderRadius: 2
            }}>
                <CardActionArea component={Link} to={`/products/${product.id}`}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{
                            objectFit: 'contain',
                            bgcolor: 'background.soft'
                        }} />

                    <CardContent sx={{ p: 2}}>
                        <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', mb: 0.5}}>
                            <Typography variant='caption' color='text.secondary' sx={{ fontSize: '0.65rem' }}>
                                PRODUCT #{product.id}
                            </Typography>
                            <Rating value={product.rate} readOnly size='small' />
                        </Box>

                        <Typography variant='h6' component='h3' sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
                            {product.name}
                        </Typography>

                        <Typography color='primary'sx={{ fontSize: '0.9rem', fontWeight: 600, mt: 0.5 }}>
                            {product.price}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <Box sx={{ px: 2, pb: 2 }}>
                    <CustomButton onClick={() => addToCart(product.id)} disabled={isPending} sx={{
                        py: 1, fontSize: '0.75rem', boxShadow: 'none',
                        '&:hover': {
                            boxShadow: 'none'
                        }
                    }}>
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 16, mr: 1 }} />
                        ADD TO CART
                    </CustomButton>
                </Box>
            </Card>
        </>
    )
}
