import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../validations/authSchemas';
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';

export default function useRegister() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);


  const {register,handleSubmit,formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  });

  const onsubmit = async (data) => {
    setServerError(null);
    try {
      await axiosInstance.post("/auth/Account/Register", data);
      navigate("/login");
    } catch (err) {
      console.error(err.response);
      setServerError(t('register.registrationError'));

    }};

  return {
    register,handleSubmit,errors,isSubmitting,serverError,onsubmit
  };
}
