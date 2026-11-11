import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useNavbar from '../hooks/useNavbar';
import { Badge, IconButton } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'; import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import BrandLogo from './ui/BrandLogo';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'SHOP', path: '/shop' },
  { name: 'CATEGORIES', path: '/categories' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' }
];

export default function Navbar() {

  const { token, logout, cartCount } = useNavbar();
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

        <IconButton onClick={(e) => setMobileMenu(e.currentTarget)} sx={{ display: { xs: 'flex', md: 'none' }, color: 'primary.main' }} aria-label="Open navigation menu">
          <MenuIcon />

          <Menu anchorEl={mobileMenu} open={Boolean(mobileMenu)} onClose={() => setMobileMenu(null)}>
            {navLinks.map((link) => (
              <MenuItem key={link.path} component={NavLink} to={link.path} onClick={() => setMobileMenu(null)}
                sx={{fontSize: '0.8rem', color: 'text.primary',
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: 'background.soft'
                  }}}>
                {link.name}
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
              {link.name}
            </Button>
          ))}
        </Box>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: {md:1}, ml: 'auto' }}>
          <IconButton component={Link} to="/shop" sx={{ color: 'text.primary' }}>
            <SearchIcon fontSize="small" />
          </IconButton>


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
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <IconButton component={Link} to="/login" sx={{ color: 'text.primary' }}>
              <PersonOutlinedIcon fontSize="small" />
            </IconButton>
          )}


          <IconButton component={Link} to="/cart" sx={{ color: 'primary.main' }}>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingBagOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
