import React from 'react';
import { Box, TextField, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/ui/CustomButton';
import useForgotPassword from '../../hooks/useForgotPassword';
import AuthLeftSide from '../../components/ui/AuthLeftSide';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword() {

  const { t } = useTranslation();
  const { register, handleSubmit, errors, isSubmitting, serverError, onsubmit } = useForgotPassword();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', md: 'row' } }}>
      <AuthLeftSide />
      <Box sx={{
        width: {
          xs: '100%', md: '50%'
        }, bgcolor: 'background.paper', p: { xs: 3, md: 5 }, minHeight: { xs: 'auto', md: '100vh' }, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Box sx={{ width: '100%', maxWidth: '400px' }}>

          <Box sx={{
            width: '48px', height: '48px',
            borderRadius: '50%', bgcolor: "secondary.main",
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', mx: 'auto', mb: 2
          }}>
            <KeyOutlinedIcon
              sx={{
                color: 'primary.main',
                fontSize: '24px'
              }}
            />
          </Box>


          <Typography component="h1" sx={{
            fontSize: { xs: '26px', md: '30px' },
            fontWeight: 'bold', textAlign: 'center', mb: 1
          }}>
            {t('forgotPassword.title')}
          </Typography>

          <Typography sx={{ fontSize: '12px', color: 'natural.main', textAlign: 'center', lineHeight: 1.6, mb: 3 }}>
            {t('forgotPassword.description')}
          </Typography>


          {serverError ? (<Alert severity="error" sx={{ mt: 2 }}>
            {serverError}
          </Alert>) : null}

          <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>
            <Box sx={{
              display: 'flex', alignItems: 'center',
              gap: 1, bgcolor: 'background.soft',
              borderRadius: '6px', p: 1, mb: 2
            }}>
              <VerifiedUserOutlinedIcon
                sx={{
                  color: 'primary.main',
                  fontSize: '16px'
                }}
              />

              <Typography sx={{ fontSize: '11px', color: 'natural.main' }}>
                {t('forgotPassword.securityNote')}
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>

              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                {t('forgotPassword.email')}
              </Typography>

              <Box sx={{ position: 'relative' }}>

                <EmailOutlinedIcon
                  sx={{
                    position: 'absolute',
                    left: 14,
                    top: 12,
                    fontSize: '20px',
                    color: 'text.secondary',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                />

                <TextField type="email" placeholder={t('forgotPassword.emailPlaceholder')}
                  fullWidth size="small" {...register('email')}
                  error={!!errors.email} helperText={errors.email?.message}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'background.soft',
                      color: 'text.primary',
                      borderRadius: '10px',

                      '& fieldset': {
                        borderColor: 'transparent'
                      },

                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main'
                      }
                    },

                    '& .MuiOutlinedInput-input': {
                      paddingLeft: '42px',
                      fontSize: '13px',
                      py: 1.5
                    },

                    '& .MuiFormHelperText-root': {
                      marginLeft: 0
                    }
                  }}
                />

              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1, mb: 2 }}>
              <InfoOutlinedIcon sx={{ fontSize: '15px', color: 'natural.main', mt: 0.2 }} />

              <Typography sx={{ fontSize: '11px', color: 'natural.main', lineHeight: 1.5 }}>
                {t('forgotPassword.accountNote')}
              </Typography>
            </Box>

            <CustomButton type="submit" fullWidth sx={{ mt: 2 }} disabled={isSubmitting} >
              {isSubmitting ? t('forgotPassword.sending') : t('forgotPassword.sendCode')}
            </CustomButton>
          </Box>

          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography sx={{ fontSize: '11px', color: 'natural.main', mb: 1 }}>
              {t('forgotPassword.rememberCredentials')}{' '}
              <Box component={Link} to="/login" sx={{ color: 'primary.main', fontWeight: 600, textDecoration: 'none', fontSize: '11px' }}>
                {t('forgotPassword.backToLogin')}
              </Box>
            </Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
