
import { Box, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';
import useRemoveItemCart from '../../hooks/useRemoveItemCart';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';

export default function CartItem({ item, image, selected, onSelect }) {

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

  return (
    <Paper sx={{
      position: 'relative', p: { xs: 1.5, md: 2 }, mb: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' }, gap: 2, bgcolor: 'background.paper',
      border: 1, borderColor: 'divider', borderRadius: 2, boxShadow: 'none'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1, md: 2 }, flex: 1, minWidth: 0, paddingInlineEnd: { xs: 3, md: 0 } }}>

        <Checkbox
          size='small'
          checked={selected}
          onChange={(e) => onSelect(e.target.checked)}
          disabled={isRemovePending}
          slotProps={{ input: { 'aria-label': `${t('cart.selectItem')} ${item.productName}` } }}
          sx={{ p: 0.5 }}
        />

        {image &&
          <Box component='img' src={image} alt={item.productName} sx={{
            width: { xs: 70, md: 110 }, height: { xs: 90, md: 130 },
            objectFit: 'contain', bgcolor: 'background.soft', borderRadius: 1, flexShrink: 0
          }} />}

        <Box sx={{ minWidth: 0, py: 0.5 }}>

          <Chip label={`${t('cart.product')} #${item.productId}`} size='small' sx={{
            bgcolor: 'background.soft', color: 'primary.main',
            fontSize: '0.65rem', height: 22, mb: 1
          }} />

          <Typography variant='h6' component='h2' sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, mb: 1, overflowWrap: 'anywhere' }}>
            {item.productName}
          </Typography>

          <Typography variant='body2' color='text.secondary' sx={{ fontSize: '0.8rem' }}>
            {t('cart.single')}: {item.price}
          </Typography>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex', flexDirection: { xs: 'row', md: 'column' }, alignItems: { xs: 'center', md: 'flex-end' },
        justifyContent: 'space-between', gap: 1, alignSelf: 'stretch',
        borderTop: { xs: 1, md: 0 }, borderColor: 'divider', pt: { xs: 1.5, md: 0 }
      }}>

        <IconButton onClick={handleRemove} disabled={isRemovePending} aria-label={t('cart.remove')} size='small' sx={{ color: 'text.secondary', position: { xs: 'absolute', md: 'static' }, top: 8, insetInlineEnd: 8 }}>
          <CloseIcon fontSize='small' />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.soft', borderRadius: 5, px: 0.5 }}>
          <IconButton onClick={handleDecrease} disabled={isPending || isRemovePending || item.count <= 1} aria-label={t('cart.decreaseQuantity')} size='small' sx={{ color: 'primary.main' }}>
            <RemoveIcon sx={{ fontSize: 16 }} />
          </IconButton>

          <Typography sx={{ minWidth: 24, textAlign: 'center', fontSize: '0.85rem' }}>{item.count}</Typography>

          <IconButton onClick={handleIncrease} disabled={isPending || isRemovePending} aria-label={t('cart.increaseQuantity')} size='small' sx={{ color: 'primary.main' }}>
            <AddIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'end' }}>
          <Typography variant='caption' color='text.secondary' sx={{ display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '0.5px' }}>
            {t('cart.subtotal')}
          </Typography>

          <Typography color='primary.main' sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
            ${item.totalPrice}
          </Typography>
        </Box>

      </Box>
    </Paper>
  );
}
