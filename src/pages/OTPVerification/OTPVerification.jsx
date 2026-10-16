
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { otpSchema } from '../../validations/authSchemas';
import CustomButton from '../../components/ui/CustomButton';

export default function OTPVerification() {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const {register,handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(otpSchema),
    mode: "onBlur"
  });

  const onsubmit = (data) => {
     navigate("/reset-password", {state: {email: email,code: data.code}
    });
  };

  if (!email) {
    return <Navigate to="/forgot-password" replace />;
  }

  return (
    <Box sx={{ maxWidth: '450px', mx: 'auto', mt: 5, p: 3 }}>

      <Typography variant="h4" textAlign="center">
        Verify Your Code
      </Typography>

      <Typography sx={{ mt: 2, textAlign: 'center' }}>
        Enter the verification code sent to:
      </Typography>

      <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {email}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

        <TextField label="Verification Code" placeholder="Enter 4-digit code" fullWidth margin="normal" type="text" autoComplete="one-time-code"
          {...register('code')} error={!!errors.code} helperText={errors.code?.message} />

        <CustomButton type="submit" fullWidth sx={{ mt: 2 }}>
          Continue to Reset Password
        </CustomButton>

      </Box>

      <Typography sx={{ mt: 2, textAlign: 'center' }}>
        <Link to="/forgot-password">
          Back to Forgot Password
        </Link>
      </Typography>

    </Box>
  );
}
