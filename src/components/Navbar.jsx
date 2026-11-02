import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';


export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.logout);
  
  return (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', textDecoration: 'none' }} component={Link} to="/">
          KaShop
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/">HOME</Button>
          <Button component={Link} to="/shop">SHOP</Button>
          <Button component={Link} to="/categories">CATEGORIES</Button>
          <Button component={Link} to="/about">ABOUT</Button>
          <Button component={Link} to="/contact">CONTACT</Button>
          {token ? <>
            <Button onClick={Logout}>LOGOUT</Button>
          </> : <>
            <Button component={Link} to="/login">LOGIN</Button>
            <Button component={Link} to="/register">REGISTER</Button>
          </>}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
