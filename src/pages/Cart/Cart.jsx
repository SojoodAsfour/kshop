import React from 'react'
import useCart from '../../hooks/useCart';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAuthStore } from '../../store/useAuthStore';
import CustomButton from '../../components/ui/CustomButton';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/material';
import CartItem from '../../components/Cart/CartItem';
import CartSummary from '../../components/Cart/CartSummary';
import useClearCart from '../../hooks/useClearCart';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

export default function Cart() {
    const { mutate: clearCart, isPending: isClearing } = useClearCart();

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            clearCart(undefined, {
                onSuccess: () => toast.success('Cart cleared successfully'),
                onError: () => toast.error('Failed to clear cart')
            });
        }
    }

    const token = useAuthStore((state) => state.token);
    const { data, isPending, isError } = useCart();
    const navigate = useNavigate();

    if (!token) {
        return (
            <Box>
                <Typography variant='h5' sx={{ textAlign: 'center', mt: 5 }}>
                    Please login to view your cart
                </Typography>
                <CustomButton variant='contained' sx={{ display: 'block', mx: 'auto', mt: 2 }} onClick={() => navigate('/login')}>
                    Login
                </CustomButton>
            </Box>
        )
    }

    if (isPending) {
        return <CircularProgress />;
    }

    if (isError) {
        return (
            <Alert severity="error">Error fetching cart data</Alert>
        )
    }

    if (data?.items?.length === 0) {
        return (
            <Box>
                <Typography>
                    Your cart is empty! shop now to add items to your cart.
                    <CustomButton variant='contained' sx={{ display: 'block', mx: 'auto', mt: 2 }} onClick={() => navigate('/home')}>
                        Home
                    </CustomButton>
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant='h1' sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Your Shopping Bag
                </Typography>

                <Button onClick={handleClearCart} disabled={isClearing} sx={{ color: 'primary.main', fontSize: '0.75rem' }}>
                    Clear Bag
                </Button>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                gap: 4,
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
            }}>
                <Box>
                    {data?.items?.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </Box>

                <Box>
                    <CartSummary total={data.cartTotal} />
                </Box>
            </Box>
        </>
    )
}
