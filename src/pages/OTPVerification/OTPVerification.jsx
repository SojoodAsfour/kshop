import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomButton from '../../components/ui/CustomButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import useOTPVerification from '../../hooks/useOTPVerification';
import AuthLeftSide from '../../components/ui/AuthLeftSide';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function OTPVerification({ email, newPassword, onBack }) {

  const { register, handleSubmit, errors, setValue, isSubmitting, serverError, success, onsubmit, handleClose } = useOTPVerification(email, newPassword, onBack);
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  if (!email || !newPassword) {
    return <Navigate to="/forgot-password" />;
  }

  return (

    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: { xs: 'column', md: 'row' } }}>

      <AuthLeftSide />

      <Box sx={{
        width: { xs: '100%', md: '50%' }, minHeight: { xs: 'auto', md: '100vh' },
        bgcolor: '#FFF8F6', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: {
          xs: 3,
          md: 5
        }
      }}>

        <Box sx={{ width: '100%', maxWidth: '420px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box sx={{ width: '60px', height: '60px', borderRadius: '50%', bgcolor: 'secondary.main', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <VerifiedUserOutlinedIcon sx={{ fontSize: '28px', color: 'primary.main' }} />
            </Box>
          </Box>

          <Typography component="h1" sx={{ fontSize: { xs: '26px', md: '30px' }, fontWeight: 'bold', textAlign: 'center', mb: 1 }} >
            Verify Your Code
          </Typography>

          <Typography sx={{ fontSize: '12px', color: 'natural.main', textAlign: 'center', lineHeight: 1.7 }}>
            Enter the 4-digit verification code sent to your email address.
          </Typography>

          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: 'primary.main', textAlign: 'center', mt: 1, mb: 3 }}>
            {email}
          </Typography>

          <Typography color="error" sx={{ mt: 2 }}>
            {serverError}
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onsubmit)} noValidate>

            <input type="hidden"{...register('code')} />
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 3 }}>
              {code.map((digit, index) => (

                <TextField key={index} value={digit} inputRef={(element) => {inputRefs.current[index] = element;}}
                  onChange={(event) => {
                    const value = event.target.value;
                    if (!/^\d?$/.test(value)) {
                      return;
                    }

                    const updatedCode = [...code];
                    updatedCode[index] = value;
                    setCode(updatedCode);
                    setValue('code', updatedCode.join(''), {
                      shouldValidate: true
                    });

                    if (value && index < 3) {
                      inputRefs.current[index + 1]?.focus();
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Backspace' && !digit && index > 0) {
                      inputRefs.current[index - 1]?.focus();
                    }
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 1,
                      inputMode: 'numeric',
                      autoComplete: index === 0 ? 'one-time-code' : 'off',
                      'aria-label': `Digit ${index + 1}`
                    }
                  }}
                  sx={{
                    width: '65px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      bgcolor: 'white'
                    },
                    '& input': {
                      textAlign: 'center',
                      fontSize: '24px',
                      fontWeight: 600,
                      p: 2
                    }
                  }}
                />

              ))}
            </Box>

            <Typography color="error" textAlign="center" sx={{ fontSize: '12px' }}>
              {errors.code?.message}
            </Typography>


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
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert severity="success" variant="filled">
              Password changed successfully!
            </Alert>

          </Snackbar>

        </Box>

      </Box>

    </Box>
  );
}

