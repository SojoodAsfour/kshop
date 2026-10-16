
import React, { useState } from 'react';
import { Box, TextField, Typography, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { forgotPasswordSchema } from '../../validations/authSchemas';
import CustomButton from '../../components/ui/CustomButton';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const { register,handleSubmit,formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onBlur"
  });

  const onsubmit = async (data) => {
  setServerError(null);

  try {
    const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/SendCode",data );

    navigate("/reset-password", {state: { email: data.email } });

  } catch (err) {
    setServerError("Unable to send the code. Please try again.");
  }
};

  return (
    <Box sx={{ maxWidth: '450px', mx: 'auto', mt: 5, p: 3 }}>

      <Typography variant="h4">
        Forgot Password?
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Enter your email address to receive a verification code.
      </Typography>

      {serverError ? (<Alert severity="error" sx={{ mt: 2 }}>
          {serverError}
        </Alert> ) : null}

      <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

        <TextField label="Email Address" type="email" fullWidth margin="normal" {...register('email')} error={!!errors.email}helperText={errors.email?.message}/>
        <CustomButton type="submit" fullWidth sx={{ mt: 2 }} disabled={isSubmitting} >
          {isSubmitting ? "Sending..." : "Send Verification Code"}
        </CustomButton>
      </Box>

      <Typography sx={{ mt: 2, textAlign: 'center' }}>
        <Link to="/login">
          Back to Sign In
        </Link>
      </Typography>

    </Box>
  );
}
