
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { resetPasswordSchema } from '../../validations/authSchemas';
import CustomButton from '../../components/ui/CustomButton';
import OTPVerification from '../OTPVerification/OTPVerification';

export default function ResetPassword() {

  const location = useLocation();
  const email = location.state?.email;

  const [newPassword, setNewPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: "onBlur"
  });

  const onsubmit = async (data) => {
    setPasswordError("");
    setNewPassword(data.newPassword);
    setShowOTP(true);
  };

  if (!email) {
    return <Navigate to="/forgot-password" replace />;
  }

  if (showOTP) {
    return (
      <OTPVerification email={email} newPassword={newPassword}
        onBack={(message) => {
          setPasswordError(message || "");
          setShowOTP(false);
        }} />
    );
  }

  return (
    <Box sx={{ maxWidth: '450px', mx: 'auto', mt: 5, p: 3 }}>

      <Typography variant="h4">
        Reset Your Password
      </Typography>
      
      <Typography color="error">
        {passwordError}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Enter your new password below.
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

        <TextField label="New Password" type="password" fullWidth margin="normal" {...register('newPassword')} error={!!errors.newPassword} helperText={errors.newPassword?.message} />
        <TextField label="Confirm Password" type="password" fullWidth margin="normal" {...register('confirmPassword')} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />

        <CustomButton type="submit" fullWidth sx={{ mt: 2 }}>
          Continue
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
