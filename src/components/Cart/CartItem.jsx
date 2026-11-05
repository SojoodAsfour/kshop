import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function CartItem({ item }) {
  return (
    <Paper sx={{p:2, mb:2,display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Box>
            <Typography >{item.productName}</Typography>
            <Typography >Price: ${item.price} each</Typography>
        </Box>
        <Typography >Quantity: {item.count}</Typography>
        <Typography >Total: ${item.totalPrice}</Typography>
    </Paper>
  );
}