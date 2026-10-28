import React from 'react'
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Rating } from '@mui/material';

export default function ReviewItem({ review }) {
  return (
    <Paper sx={{ p: 2, mb: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box>
            <Typography>{review.userName}</Typography>
            <Typography>{review.comment}</Typography>
            <Rating value={review.rating} readOnly></Rating>
            <Typography>{ new Date(review.createdAt).toLocaleDateString() }</Typography>
        </Box>
    </Paper>
  )
}
