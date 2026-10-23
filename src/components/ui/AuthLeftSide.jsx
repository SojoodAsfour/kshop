import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AuthLeftSide() {
    return (
        <Box sx={{
            width: { xs: '100%', md: '50%' },
            minHeight: { xs: '250px', md: '100vh' },
            bgcolor: 'primary.main', display: 'flex',
            flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center', color: 'white'
        }}>
            <Box sx={{
                width: '48px', height: '48px',
                border: '1px solid', borderRadius: '50%', display: 'flex',
                justifyContent: 'center', alignItems: 'center', mb: 2
            }}>
                <Typography sx={{ fontSize: '24px' }}>
                    K
                </Typography>
            </Box>

            <Typography sx={{ fontSize: '30px', letterSpacing: '5px' }}>
                KASHOP
            </Typography>

            <Typography sx={{ fontSize: '9px', letterSpacing: '3px', mt: 0.5 }}>
                MAISON DE COMMERCE
            </Typography>
        </Box>
    );
}