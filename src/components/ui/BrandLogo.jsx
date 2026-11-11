import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function BrandLogo() {
    return (
        <Box component={Link} to="/" sx={{display: 'flex',alignItems: 'center',textDecoration: 'none'}}>
            <Box component="img" src={logo} alt="Kashop Logo" sx={{width: { xs: 105, sm: 120, md: 133 }, height: 'auto'}}/>

            <Typography sx={{color: 'primary.main',fontWeight: 600,fontSize: '1.25rem', display: { xs: 'none', md: 'block' }}}>
                Kashop
            </Typography>
        </Box>
    )
}