import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { otpSchema } from '../validations/authSchemas';
import axiosInstance from '../api/axiosInstance';
import { useTranslation } from 'react-i18next';

export default function useOTPVerification(email, newPassword, onBack) {

    const { t } = useTranslation();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(otpSchema),
        mode: "onBlur",
        defaultValues: {
            code: ''
        }
    });

    const onsubmit = async (data) => {
        setServerError(null);
        try {

            await axiosInstance.patch("/auth/Account/ResetPassword", {
                email: email,
                code: data.code,
                newPassword: newPassword
            });
            setSuccess(true);

        } catch (err) {
            console.error(err.response?.data);

            if (err.response?.data?.message === "New password must be different from old password") {
                onBack(t('resetPassword.samePasswordError'));
            } else {
                setServerError(err.response?.data?.message || t('resetPassword.resetError'));
            }

        }

    };

    const handleClose = () => {
        navigate("/login");
    };

    return {
        register, handleSubmit, setValue, errors, isSubmitting, serverError, success, onsubmit, handleClose
    };

}
