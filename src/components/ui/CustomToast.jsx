
import React from 'react'
import { ToastContainer } from 'react-toastify';
import { useTheme } from '@mui/material/styles';

export default function CustomToast() {
    
    const theme = useTheme();
    return (
        <ToastContainer
            position='top-right'
            autoClose={2500}
            hideProgressBar
            closeOnClick
            pauseOnHover
            limit={2}
            theme='light'
            toastStyle={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                fontFamily: theme.typography.fontFamily,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 12,
                boxShadow: theme.shadows[3]
            }}
        />
    )
}
