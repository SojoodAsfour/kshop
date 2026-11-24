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
import { useState } from 'react';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import { useProducts } from '../../hooks/UseProducts';
import PageContainer from '../../components/ui/PageContainer';
import { useTranslation } from 'react-i18next';
import CartHeader from '../../components/Cart/CartHeader';
import CartActions from '../../components/Cart/CartActions';
import CartPaymentInfo from '../../components/Cart/CartPaymentInfo';
import EmptyCart from '../../components/Cart/EmptyCart';

export default function Cart() {
    const { t } = useTranslation();
    const { mutate: clearCart, isPending: isClearing } = useClearCart();

    const handleClearCart = () => {
        clearCart(undefined, {
            onSuccess: () => {
                toast.success(t('cart.clearSuccess'));
                setOpenConfirm(false);
            },
            onError: () => toast.error(t('cart.clearError'))
        });
    }

    const token = useAuthStore((state) => state.token);
    const { data, isPending, isError } = useCart();
    const { data: products } = useProducts();
    const [openConfirm, setOpenConfirm] = useState(false);
    const [selectedIds, setSelectedIds] = useState(null);
    const navigate = useNavigate();

    const itemIds = data?.items?.map((item) => item.productId) || [];
    const selectedItems = selectedIds === null ? itemIds : selectedIds.filter((id) => itemIds.includes(id));
    const selectedTotal = data?.items?.filter((item) => selectedItems.includes(item.productId)).reduce((total, item) => total + Number(item.totalPrice), 0) || 0;
    const handleSelectAll = (checked) => {
        setSelectedIds(checked ? itemIds : []);
    }

    if (!token) {
        return (
            <PageContainer>
                <Box sx={{ py: 8, textAlign: 'center' }}>
                    <Typography variant='h5'>
                        {t('cart.loginRequired')}
                    </Typography>
                    <CustomButton variant='contained' sx={{ display: 'block', mx: 'auto', mt: 2 }} onClick={() => navigate('/login')}>
                        {t('nav.login')}
                    </CustomButton>
                </Box>
            </PageContainer>
        )
    }

    if (isPending) {
        return (
            <PageContainer>
                <Box sx={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            </PageContainer>
        )
    }

    if (isError) {
        return (
            <PageContainer>
                <Box sx={{ py: 5 }}>
                    <Alert severity="error">{t('cart.fetchError')}</Alert>
                </Box>
            </PageContainer>
        )
    }

    if (data?.items?.length === 0) {
        return (
            <PageContainer>
                <Box sx={{ py: { xs: 3, md: 5 } }}>
                    <CartHeader count={0} />
                    <EmptyCart />
                </Box>
            </PageContainer>
        )
    }

    return (
        <>
            <ConfirmDialog
                open={openConfirm}
                onClose={() => setOpenConfirm(false)}
                onConfirm={handleClearCart}
                title={t('cart.clearTitle')}
                message={t('cart.clearMessage')}
                isPending={isClearing}
            />
            <PageContainer>
                <Box sx={{ pt: { xs: 3, sm: 4, md: 5 }, pb: { xs: 3, sm: 5, md: 8 } }}>

                    <CartHeader count={data?.items?.reduce((total, item) => total + item.count, 0) || 0} />

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
                        gap: 3,
                        alignItems: 'start',
                    }}>
                        <Box sx={{ minWidth: 0 }}>

                            <CartActions count={data?.items?.length || 0}
                                selectedCount={selectedItems.length}
                                onSelectAll={handleSelectAll}
                                onClear={() => setOpenConfirm(true)}
                                isClearing={isClearing}
                            />

                            {data?.items?.map((item) => (
                                <CartItem key={item.productId} item={item}
                                    image={products?.find((product) => product.id === item.productId)?.image}
                                />
                            ))}
                            <CartPaymentInfo />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                            <CartSummary total={selectedTotal} selectedCount={selectedItems.length} />
                        </Box>

                    </Box>
                </Box>
            </PageContainer>
        </>
    )
}
