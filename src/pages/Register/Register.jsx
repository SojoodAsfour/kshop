import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { registerSchema } from '../../validations/authSchemas';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export default function Register() {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  })

  const onsubmit = async (data) => {
    try{
      const response = await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Register", data);
      setSuccess(true);
      navigate("/login");

    }catch(err){
      console.error(err.response);
      setServerError("An error occurred while registering. Please try again.");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{bgcolor: 'white', p: 4,boxShadow: 3, borderRadius: 2, mt: 4}}>
        <Typography variant="h4" component={"h1"}>
          Create Your Account
        </Typography>
        {serverError? <Alert severity="error" sx={{mt: 2}}>{serverError}</Alert> : null}
        <Box component={"form"} onSubmit={handleSubmit(onsubmit)}>

          <TextField label="Full Name" fullWidth margin='normal' {...register('fullName')}
          error={errors.fullName} helperText={errors.fullName?.message}></TextField>
          <TextField label="Username" fullWidth margin='normal' {...register('userName')}
          error={errors.userName} helperText={errors.userName?.message}></TextField>
          <TextField label="Email" fullWidth margin='normal' {...register('email')}
          error={errors.email} helperText={errors.email?.message}></TextField>
          <TextField label="Phone Number" fullWidth margin='normal' {...register('phoneNumber')}
          error={errors.phoneNumber} helperText={errors.phoneNumber?.message}></TextField>
          <TextField label="Password" fullWidth margin='normal' {...register('password')}
          error={errors.password} helperText={errors.password?.message}></TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 2}}
          disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Create Account"}
          </Button>
          <Typography variant="body2" color="textSecondary" align="center" sx={{mt: 2}}>
            already have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
