import React from 'react'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Alert from '@mui/material/Alert';
import { useAuthStore } from '../../store/useAuthStore';
import HeroSection from '../../components/Home/HeroSection';

export default function Home() {
  const token = useAuthStore((state) => state.token);
  return (
   <>
   {
    token ? <Alert severity="success">Welcome Back!</Alert>: <Alert severity="info">Please login to access more features.</Alert>
   }
      <HeroSection />
      <Categories title="Shop by Category" showViewAll/>
      <Products />
   </>
  )
}
