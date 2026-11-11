import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const footerSections = [
  {
    title: 'NAVIGATION',
    links: [
      { name: 'Home', path: '/' },
      { name: 'All Products', path: '/shop' },
      { name: 'Categories', path: '/categories' },
      { name: 'About' },
      { name: 'Contact' }
    ]
  },
  {
    title: 'CUSTOMER CARE',
    links: [
      { name: 'Shopping Cart', path: '/cart' },
      { name: 'Visa & Cash Payments' },
      { name: 'Order Tracking' },
      { name: 'FAQ' }
    ]
  },
  {
    title: 'ACCOUNT',
    links: [
      { name: 'Account Information' },
      { name: 'My Orders' },
      { name: 'Sign In', path: '/login' }
    ]
  }
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.footer', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">

        <Box sx={{
          display: 'grid', gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: '1.5fr repeat(3, 1fr)'
          }, gap: 4
        }}>

          <Box>
            <Typography sx={{ color: 'primary.main', fontSize: '1.25rem', fontWeight: 500, mb: 1 }}>
              Kashop
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Curated elegance and modern shopping.
              Discover timeless pieces selected with thoughtful purpose and refined design.
            </Typography>
          </Box>


          {footerSections.map((section) => (
            <Box key={section.title}>
              <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', mb: 2 }}>
                {section.title}
              </Typography>

              {section.links.map((link) => (
                link.path ? (
                  <Typography key={link.name} component={Link} to={link.path} sx={{
                    display: 'block',
                    fontSize: '0.75rem',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    mb: 1,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}>
                    {link.name}
                  </Typography>
                ) : (
                  <Typography key={link.name} sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1 }}>
                    {link.name}
                  </Typography>
                )
              ))}

            </Box>
          ))}

        </Box>


        <Box sx={{display: 'flex',justifyContent: 'space-between',flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,pt: 1, borderTop: 1,borderColor: 'divider'}}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Kashop. All rights reserved.
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Artisanal Luxury • Editorial Commerce
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}
