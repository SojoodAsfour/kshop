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

export default function Cart() {

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
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 4,
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
    )
}
