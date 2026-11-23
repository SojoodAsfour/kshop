import React from 'react'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Alert from '@mui/material/Alert';
import { useAuthStore } from '../../store/useAuthStore';
import HeroSection from '../../components/Home/HeroSection';
import FormTactileSection from '../../components/Home/FormTactileSection';
import ManifestoSection from '../../components/Home/ManifestoSection';
import TopRatedSection from '../../components/Home/TopRatedSection';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const token = useAuthStore((state) => state.token);
  const { t } = useTranslation();
  return (
   <>
   {
    token ? <Alert severity="success">{t('home.welcomeBack')}</Alert>: <Alert severity="info">{t('home.loginNotice')}</Alert>
   }
      <HeroSection />
      <Categories title={t('home.shopByCategory')} showViewAll/>
      <Products title={t('home.curatedEssentials')} limit={4}/>
      <FormTactileSection />
      <ManifestoSection />
      <TopRatedSection />
   </>
  )
}
