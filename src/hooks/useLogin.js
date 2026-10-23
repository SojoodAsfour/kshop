
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { loginSchema } from '../validations/authSchemas';

export default function useLogin() {

  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);
  const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  const onsubmit = async (data) => {
    setServerError(null);
    try {

      await axios.post('https://knowledgeshop.runasp.net/api/auth/Account/Login',data);
      navigate('/home');

    } catch (err) {
      console.error(err.response?.status);
      setServerError('Invalid email or password. Please try again.');
    }};

  return {register,handleSubmit,errors,isSubmitting,serverError, onsubmit};
}
