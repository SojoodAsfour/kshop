
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import { registerSchema } from '../validations/authSchemas';

export default function useRegister() {

  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);


  const {register,handleSubmit,formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur"
  });

  const onsubmit = async (data) => {
    setServerError(null);
    try {
      await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/Register",data);
      navigate("/login");
    } catch (err) {
      console.error(err.response);
      setServerError("An error occurred while registering. Please try again.");

    }};

  return {
    register,handleSubmit,errors,isSubmitting,serverError,onsubmit
  };
}