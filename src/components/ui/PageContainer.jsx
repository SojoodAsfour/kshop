import React from 'react'
import { Container } from '@mui/material'

export default function PageContainer({ children }) {
    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }}}>
            {children}
        </Container>
    )
}