import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, Tooltip } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useNavbar from '../hooks/useNavbar';
import { Badge, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'; import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import BrandLogo from './ui/BrandLogo';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.shop', path: '/shop' },
  { name: 'nav.categories', path: '/categories' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.contact', path: '/contact' }
];

export default function Navbar() {

  const { token, logout, cartCount, toggleMode, mode, language, toggleLanguage } = useNavbar();
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);


  return (
    <AppBar position="static" sx={{
      bgcolor: 'background.paper',
      borderBottom: 1,
      borderColor: 'divider'
    }}
    >
      <Toolbar sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 3 }, minHeight: { xs: 60, md: 64 }, gap: 2 }}>

        <IconButton onClick={(e) => setMobileMenu(e.currentTarget)} sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.main' }} aria-label={t('nav.openMenu')}>
          <MenuIcon />

          <Menu anchorEl={mobileMenu} open={Boolean(mobileMenu)} onClose={() => setMobileMenu(null)}>
            {navLinks.map((link) => (
              <MenuItem key={link.path} component={NavLink} to={link.path} onClick={() => setMobileMenu(null)}
                sx={{
                  fontSize: '0.8rem', color: 'text.primary',
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: 'background.soft'
                  }
                }}>
                {t(link.name)}
              </MenuItem>
            ))}
          </Menu>
        </IconButton>
        <BrandLogo />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          {navLinks.map((link) => (
            <Button key={link.path} component={NavLink} to={link.path}
              sx={{
                color: 'text.primary', fontSize: '0.75rem', fontWeight: 600, inWidth: 'auto', letterSpacing: '0.14px',
                p: 0, borderRadius: 0,
                '&.active': {
                  color: 'primary.main',
                  borderBottom: 1,
                  borderColor: 'primary.main'
                },
                '&:hover': {
                  bgcolor: 'transparent',
                  color: 'primary.main'
                }
              }}>
              {t(link.name)}
            </Button>
          ))}
        </Box>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 1 }, ml: 'auto' }}>
          <Tooltip title={t('nav.search')}>
            <IconButton component={Link} to="/shop" sx={{ color: 'text.primary' }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>


          {token ? (
            <>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)} sx={{ color: 'text.primary' }}>
                <PersonOutlinedIcon fontSize="small" />
              </IconButton>

              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => {
                  logout();
                  setAnchorEl(null);
                }}>
                  {t('nav.logout')}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <IconButton component={Link} to="/login" sx={{ color: 'text.primary' }}>
              <PersonOutlinedIcon fontSize="small" />
            </IconButton>
          )}



          <Tooltip title={t('nav.viewCart')}>
            <IconButton component={Link} to="/cart" sx={{ color: 'primary.main' }}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingBagOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title={mode === 'light' ? t('nav.darkMode') : t('nav.lightMode')}>
            <IconButton onClick={toggleMode} sx={{ display: { xs: 'none', md: 'flex' }, color: 'primary.main' }} aria-label={t('nav.toggleTheme')}>
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>

          <Tooltip title={language === 'en' ? t('nav.switchToArabic') : t('nav.switchToEnglish')}>
            <Button onClick={toggleLanguage} sx={{ display: { xs: 'none', md: 'flex' }, color: 'primary.main', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14px' }}>
              {t('nav.switchLanguage')}
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
