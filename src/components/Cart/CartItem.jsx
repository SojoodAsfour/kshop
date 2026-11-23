import { Box, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import useRemoveItemCart from '../../hooks/useRemoveItemCart';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

export default function CartItem({ item, image }) {

  const { t } = useTranslation();
  const { mutate: updateCartItem, isPending } = useUpdateCartItem();
  const { mutate: removeItemCart, isPending: isRemovePending } = useRemoveItemCart();
  const handleIncrease = () => {
    updateCartItem({ productId: item.productId, count: item.count + 1 });
  };
  const handleDecrease = () => {
    if (item.count > 1) {
      updateCartItem({ productId: item.productId, count: item.count - 1 });
    }
  };

  const handleRemove = () => {
    removeItemCart(item.productId, {
      onSuccess: () => {
        toast.success(t('cart.itemRemoved'));
      },
      onError: () => {
        toast.error(t('cart.removeError'));
      }
    });
  }
  console.log(item);

  return (
    <Paper sx={{
      p: 2, mb: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, bgcolor: 'background.paper',
      border: 1, borderColor: 'divider', borderRadius: 2, boxShadow: 'none'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        {image &&
         <Box component='img' src={image} alt={item.productName}sx={{width: 75,height: 75, objectFit: 'contain', bgcolor: 'background.soft', borderRadius: 1}}/>}
        <Box>
          <Typography variant='h6' component='h2' sx={{ fontSize: '1rem' }}>
            {item.productName}
          </Typography>

          <Typography variant='body2' color='text.secondary'>
            {t('cart.single')}: {item.price}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.soft', borderRadius: 5, p: 0.5 }}>
        <IconButton onClick={handleDecrease} disabled={isPending || item.count == 1}>
          <RemoveIcon fontSize='small' />
        </IconButton>
        <Typography >{item.count}</Typography>
        <IconButton onClick={handleIncrease} disabled={isPending}>
          <AddIcon fontSize='small' />
        </IconButton>
      </Box>

      <Typography >{t('cart.total')}: ${item.totalPrice}</Typography>

      <IconButton onClick={handleRemove} disabled={isRemovePending}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}
