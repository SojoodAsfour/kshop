import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validations/authSchemas';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CustomButton from '../../components/ui/CustomButton';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



export default function Register() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  })

  const onsubmit = async (data) => {
    try {
      const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Register", data);
      setSuccess(true);
      navigate("/login");

    } catch (err) {
      console.error(err.response);
      setServerError("An error occurred while registering. Please try again.");
    }
  }

  const benefits = [
    {
      id: 1,
      title: "Streamlined Acquisition",
      description: "Rapid checkout with Visa or Cash on Delivery settlement protocols."
    },
    {
      id: 2,
      title: "Order Archival",
      description: "Full provenance records and dispatch dossier preserved for each piece."
    },
    {
      id: 3,
      title: "Curated Inquiries",
      description: "Direct priority conduit to the concierge advisory team for product counsel."
    }
  ];

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

      <Box sx={{ width: { xs: '100%', md: '55%' }, bgcolor: 'secondary.main', p: { xs: 3, md: 6 } }}>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
          <Box sx={{ borderRadius: '50%', bgcolor: 'primary.main', color: "white", display: "flex", alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
            k
          </Box>
          <Typography variant="h3" component="h2" sx={{ fontFamily: 'Georgia, serif', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
            Kashop
          </Typography>
        </Box>

        <Box>
          <Typography component="h1" sx={{ fontSize: { xs: '30px', md: '40px' }, fontWeight: 'bold', mt: 4, lineHeight: 1.2 }}>
            Begin Your{' '}
            <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>
              Curated
            </Box>
            <br />
            Journey
          </Typography>

          <Typography sx={{ mt: 2, fontSize: { xs: '13px', md: '16px' }, lineHeight: 1.5, color: 'natural.main' }}>
            Create your private Kashop profile to seamlessly review verified products, expedite future acquisitions, and maintain an archival record of your orders.
          </Typography>

          <Box sx={{ mt: 4 }}>
            {benefits.map((benefit) => (
              <Box key={benefit.id}
                sx={{
                  display: 'flex', alignItems: 'flex-start', mb: 2, bgcolor: 'white', p: 2, gap: 2, borderRadius: '10px',
                  boxShadow: 1
                }}>
                <Box
                  sx={{
                    width: '24px', height: '24px', minWidth: '24px',
                    height: '24px', color: 'primary.main', borderRadius: '50%',
                    bgcolor: '#EEDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '12px'
                  }}>
                  {benefit.id}
                </Box>

                <Box>
                  <Typography sx={{ fontWeight: 'bold', mb: 0.5, fontSize: '14px' }}>
                    {benefit.title}
                  </Typography>

                  <Typography sx={{ fontSize: '12px', lineHeight: 1.4, color: 'natural.main' }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '45%' }, bgcolor: 'white', p: { xs: 3, md: 5 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: '420px' }}>

          <Typography variant="h4" component="h2">
            Create Your Account
          </Typography>
          {serverError ? <Alert severity="error" sx={{ mt: 2 }}>{serverError}</Alert> : null}

          <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                FULL NAME *
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <PersonOutlinedIcon
                  sx={{
                    position: 'absolute',
                    left: 14,
                    top: 11,
                    color: '#9C8184',
                    fontSize: 18,
                    zIndex: 1,
                    pointerEvents: 'none'
                  }} />
                <TextField placeholder="e.g. Lady Vivienne Claire" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('fullName')}
                  error={errors.fullName} helperText={errors.fullName?.message}></TextField>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                USERNAME *
              </Typography>
              <Box sx={{ position: "relative" }}>
                <AccountCircleOutlinedIcon
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
                <TextField placeholder="Enter your username" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('userName')}
                  error={errors.userName} helperText={errors.userName?.message}></TextField>
              </Box>
            </Box>
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
                  error={errors.email} helperText={errors.email?.message}></TextField>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontSize: '11px', fontWeight: 'bold', color: 'natural.main', mb: 1 }}>
                PHONE NUMBER *
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <PhoneOutlinedIcon
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
                <TextField placeholder="e.g. 050-123-4567" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('phoneNumber')}
                  error={errors.phoneNumber} helperText={errors.phoneNumber?.message}></TextField>
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
                <TextField placeholder="Create a strong password" sx={{ ...inputStyle, width: '100%' }} size="small" {...register('password')}
                  error={errors.password} helperText={errors.password?.message} type='password'></TextField>
              </Box>
            </Box>

            <CustomButton type="submit" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Create Account"}
            </CustomButton>

            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2, fontFamily: 'Georgia, serif' }}>
              already have an account? <Link to="/login">Sign In</Link>
            </Typography>

          </Box>

        </Box>
      </Box>

    </Box>
  );
}
