import { Box, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem({ item }) {

  const { mutate: updateCartItem, isPending } = useUpdateCartItem();
  const handleIncrease = () => {
    updateCartItem({ productId: item.productId, count: item.count + 1 });
  };
  const handleDecrease = () => {
    if (item.count > 1) {
      updateCartItem({ productId: item.productId, count: item.count - 1 });
    }
  };
  return (
    <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Typography >{item.productName}</Typography>
        <Typography >Price: ${item.price} each</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', border:1, borderColor:'grey.400', borderRadius:1, p:1 }}>
        <IconButton onClick={handleDecrease} disabled={isPending || item.count == 1}>
          <RemoveIcon fontSize='small' />
        </IconButton>
        <Typography >{item.count}</Typography>
        <IconButton onClick={handleIncrease} disabled={isPending}>
          <Typography >+</Typography>
        </IconButton>
      </Box>

      <Typography >Total: ${item.totalPrice}</Typography>
    </Paper>
  );
}