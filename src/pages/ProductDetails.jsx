import React from 'react'
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/UseProduct';
import { Box, CircularProgress, Alert, Typography, Card, CardMedia, CardContent, Rating, Chip, Divider } from '@mui/material';
import CustomButton from '../components/ui/CustomButton';
import ReviewItem from '../components/ui/ReviewItem';
import useAddToCard from '../hooks/useAddToCard';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';

export default function ProductDetails() {
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();
    const { id } = useParams();
    const { mutate: addToCart, isPending: addToCartPending } = useAddToCard();
    const { data, isPending, isError } = useProduct(id);
    const inStock = data?.quantity > 0;
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
                <Alert severity="error">Error fetching Products</Alert>
            </Box>
        )
    }

    const handleAddToCart = () => {
        if (!token) {
            navigate('/login');
            return;
        }
        addToCart(data.id, {
            onSuccess: () => {
                toast.success('Product added to cart!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            },
            onError: (error) => {
                console.error('Error adding product to cart:', error);
            }
        });
    }
    return (
        <>
            <Box sx={{
                display: 'grid', gap: 4, gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                }
            }}>

                <Card>
                    <CardMedia
                        component="img"
                        image={data?.image}
                        sx={{ maxHeight: 500, objectFit: 'contain' }}
                        alt={data?.name}
                    />
                </Card>
                <Box>
                    <Typography variant='h5' component={'h2'}>{data?.name}</Typography>
                    <Rating value={data.rate} readOnly></Rating>
                    <Typography color="primary" variant='h4'>Price: {data?.price}</Typography>
                    <Chip label={inStock ? "In Stock" : "Out of Stock"} color={inStock ? "success" : "error"}>
                    </Chip>
                    <Typography>{data?.description}</Typography>
                    <CustomButton variant="contained" color="primary" disabled={!inStock || addToCartPending}
                        onClick={handleAddToCart} sx={{ mt: 2 }}>
                        Add to Cart
                    </CustomButton>
                </Box>
            </Box>
            <Divider sx={{ mt: 4, color: 'primary.main', fontSize: 20, fontWeight: 'bold' }}>Reviews</Divider>
            {data.reviews.map((review) => (
                <ReviewItem review={review} />
            ))}
        </>
    )
}
