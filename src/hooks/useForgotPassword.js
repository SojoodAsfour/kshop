import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../validations/authSchemas';
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';

export default function useForgotPassword() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        mode: "onBlur"
    });

    const onsubmit = async (data) => {
    setServerError(null);

    try {
        const email = data.email.trim();

        await axiosInstance.post("/auth/Account/SendCode", {
            email: email
        });

        navigate("/reset-password", {
            state: { email: email }
        });

    } catch (err) {

        console.error(err.response?.data);

        setServerError(
            err.response?.data?.message ||
            t('forgotPassword.sendError')
        );

    }

};

    return {
        register, handleSubmit, errors, isSubmitting, serverError, onsubmit
    };

}
