import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const footerSections = [
  {
    title: 'navigation',
    links: [
      { name: 'home', path: '/' },
      { name: 'allProducts', path: '/shop' },
      { name: 'categories', path: '/categories' },
      { name: 'about' },
      { name: 'contact' }
    ]
  },
  {
    title: 'customerCare',
    links: [
      { name: 'shoppingCart', path: '/cart' },
      { name: 'payments' },
      { name: 'orderTracking' },
      { name: 'faq' }
    ]
  },
  {
    title: 'account',
    links: [
      { name: 'accountInformation' },
      { name: 'myOrders' },
      { name: 'signIn', path: '/login' }
    ]
  }
];

export default function Footer() {
  const { t } = useTranslation();
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
              {t('footer.description')}
            </Typography>
          </Box>


          {footerSections.map((section) => (
            <Box key={section.title}>
              <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', mb: 2 }}>
                {t(`footer.${section.title}`)}
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
                    {t(`footer.${link.name}`)}
                  </Typography>
                ) : (
                  <Typography key={link.name} sx={{ fontSize: '0.75rem', color: 'text.secondary', mb: 1 }}>
                    {t(`footer.${link.name}`)}
                  </Typography>
                )
              ))}

            </Box>
          ))}

        </Box>


        <Box sx={{display: 'flex',justifyContent:'space-between',flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,pt: 1, borderTop: 1,borderColor: 'divider'}}>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} Kashop. {t('footer.allRightsReserved')}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            {t('footer.tagline')}
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}
