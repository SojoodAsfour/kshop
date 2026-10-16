import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { otpSchema } from '../../validations/authSchemas';
import CustomButton from '../../components/ui/CustomButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function OTPVerification({ email, newPassword, onBack }) {

  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(otpSchema),
    mode: "onBlur"
  });

  const onsubmit = async (data) => {
    setServerError(null);
    try {
      await axios.patch("https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword", { email: email, code: data.code, newPassword: newPassword });
      setSuccess(true);
    } catch (err) {
      console.error(err.response?.data);

      if (err.response?.data?.message === "New password must be different from old password") {
        onBack(err.response.data.message);
      } else {
        setServerError(err.response?.data?.message || "Unable to reset password. Please try again.");
      }
    }
  };

  if (!email || !newPassword) {
    return <Navigate to="/forgot-password" />;
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
      <Typography color="error" sx={{ mt: 2 }}>
        {serverError}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

        <TextField label="Verification Code" placeholder="Enter 4-digit code" fullWidth margin="normal" type="text" autoComplete="one-time-code"
          {...register('code')} error={!!errors.code} helperText={errors.code?.message} />

        <CustomButton type="submit" fullWidth sx={{ mt: 2 }} disabled={isSubmitting}>
          {isSubmitting ? "Verifying..." : "Verify Code"}
        </CustomButton>

      </Box>

      <Button onClick={() => onBack("")} sx={{ mt: 2 }}>
        Back to Reset Password
      </Button>
      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => navigate("/login")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Password changed successfully!
        </Alert>
      </Snackbar>

    </Box>
  );
}
