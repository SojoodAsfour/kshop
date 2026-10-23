import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CustomButton from '../../components/ui/CustomButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import WineBarIcon from '@mui/icons-material/WineBar';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import useLogin from '../../hooks/useLogin';


export default function Login() {

  const {register,handleSubmit,errors,isSubmitting,serverError,onsubmit} = useLogin();

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      bgcolor: '#FFF0ED',
      borderRadius: '10px',

      '& fieldset': {
        borderColor: 'transparent'
      },

      '&:hover fieldset': {
        borderColor: '#D8B5BB'
      },

      '&.Mui-focused fieldset': {
        borderColor: 'primary.main'
      }
    },

    '& .MuiInputBase-input': {
      fontSize: '13px',
      py: 1.5
    },

    '& .MuiFormHelperText-root': {
      marginLeft: 0
    },
    '& .MuiOutlinedInput-input': {
      paddingLeft: '42px'
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', md: 'row' } }}>

      <Box sx={{
        width: { xs: '100%', md: '55%' }, boxSizing: 'border-box', bgcolor: 'secondary.main', p: { xs: 3, md: 6 }, minHeight: { xs: 'auto', md: '100vh' }, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'
      }}>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
          <Box sx={{
            borderRadius: '50%', bgcolor: 'primary.main', color: "white", display: "flex", alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', flexShrink: 0
          }}>
            k
          </Box>
          <Typography component="h2" sx={{ fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
            Kashop
          </Typography>
        </Box>

        <Box>
          <Typography component="h1" sx={{ fontSize: { xs: '20px', md: '40px' }, fontWeight: 'bold', mt: { xs: 5, md: 10 }, maxWidth: '500px', lineHeight: 1.2 }}>
            Curated Acquisitions Await.
          </Typography>

          <Typography sx={{ mt: 2, fontSize: { xs: '13px', md: '16px' }, lineHeight: 1.5, color: 'natural.main', maxWidth: '500px' }}>
            Access your curated catalog selections, track active dispatches,
            and manage your verified account preferences with quiet ease.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 3, flexWrap: 'wrap' }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#FFF7F5', p: 1, borderRadius: '5px' }}>
              <VerifiedUserOutlinedIcon sx={{ fontSize: 15, color: 'primary.main' }} />

              <Typography sx={{ fontSize: '10px' }}>
                Discreet Account Protection
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#FFF7F5', p: 1, borderRadius: '5px' }}>
              <LockOutlinedIcon sx={{ fontSize: 15, color: 'primary.main' }} />

              <Typography sx={{ fontSize: '10px' }}>
                Verified Protocols
              </Typography>
            </Box>

          </Box>

        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '45%' }, boxSizing: 'border-box', bgcolor: 'white', p: { xs: 3, md: 5 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: '420px' }}>

          <Box sx={{ textAlign: 'center', mb: 4 }}>

            <Box sx={{
              width: '44px', height: '44px', borderRadius: '50%', bgcolor: '#FCEAE5',
              display: 'flex', justifyContent: 'center', alignItems: 'center', mx: 'auto', mb: 1
            }}>
              <WineBarIcon sx={{ color: 'primary.main', fontSize: '22px' }} />
            </Box>

            <Typography variant="h1" component="h2" sx={{ fontSize: { xs: '28px', md: '34px' }, fontWeight: 'bold', mb: 1 }}>
              Sign In
            </Typography>

            <Typography sx={{ fontSize: '12px', color: '#948888', lineHeight: 1.6 }}>
              Enter your credentials to access your Kashop dossier
            </Typography>

          </Box>

          {serverError ? <Alert severity="error" sx={{ mt: 2 }}>{serverError}</Alert> : null}

          <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                EMAIL ADDRESS *
              </Typography>
              <Box sx={{ position: "relative" }}>
                <EmailOutlinedIcon
                  sx={{
                    position: 'absolute',
                    left: 14,
                    top: 11,
                    color: '#9C8184',
                    fontSize: 20,
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                />
                <TextField placeholder="e.g. lady.vivienne.claire@example.com" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('email')}
                  error={!!errors.email} helperText={errors.email?.message}></TextField>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                PASSWORD *
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <LockOutlinedIcon
                  sx={{
                    position: 'absolute',
                    left: 14,
                    top: 10,
                    color: '#9C8184',
                    fontSize: 20,
                    zIndex: 2,
                    pointerEvents: 'none'
                  }}
                />
                <TextField placeholder="Enter your password" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('password')}
                  error={!!errors.password} helperText={errors.password?.message} type='password'></TextField>
              </Box>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              mt: 2
            }}>

              <FormControlLabel control={
                <Checkbox size="small" sx={{
                  color: '#9C8184',
                  '&.Mui-checked': {
                    color: 'primary.main'
                  }
                }} />
              }
                label="Remember this device" sx={{
                  m: 0,
                  '& .MuiFormControlLabel-label': {
                    fontSize: '11px',
                    color: '#8B8080'
                  }
                }} />

              <Box component={Link} to="/forgot-password" sx={{ fontSize: '10px', fontWeight: 600, color: 'primary.main', textDecoration: 'none', letterSpacing: '0.5px', }}>
                FORGOT PASSWORD?
              </Box>

            </Box>

            <CustomButton type="submit" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In To Dossier →"}
            </CustomButton>

            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2, fontFamily: 'Georgia, serif' }}>
              New to Kashop?  <Box component={Link} to="/register" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, }}>Create an Account</Box>
            </Typography>

          </Box>

        </Box>
      </Box>

    </Box>
  );
}
