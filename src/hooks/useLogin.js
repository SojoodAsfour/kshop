import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validations/authSchemas';
import { useAuthStore } from '../store/useAuthStore';
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';

export default function useLogin() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [serverError, setServerError] = useState(null);
  const {register,handleSubmit,formState: { errors, isSubmitting }} = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  const onsubmit = async (data) => {
    setServerError(null);
    try {

      const response = await axiosInstance.post('/auth/Account/Login', data);
      login(response.data.accessToken);
      navigate('/home');

    } catch (err) {
      console.error(err.response?.status);
      setServerError(t('login.invalidCredentials'));
    }};

  return {register,handleSubmit,errors,isSubmitting,serverError, onsubmit};
}
