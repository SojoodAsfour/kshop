import React from 'react'
import { Divider, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import CustomButton from '../ui/CustomButton';


export default function CartSummary({ total }) {
    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant='h4' sx={{ p: 2 }}>
                Order Summary
            </Typography>
            <Divider />
            <Box>
                <Typography>
                    TotalPrice: ${total}
                </Typography>
            </Box>
            <CustomButton fullwidth variant='contained' sx={{ display: 'block', mx: 'auto', mt: 2 }}>
                Checkout
            </CustomButton>
        </Paper>
    )
}
