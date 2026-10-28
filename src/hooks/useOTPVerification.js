
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { otpSchema } from '../validations/authSchemas';

export default function useOTPVerification(email, newPassword, onBack) {

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

            await axios.patch("https://knowledgeshop.runasp.net/api/auth/Account/ResetPassword", {
                email: email,
                code: data.code,
                newPassword: newPassword
            }
            );
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

    const handleClose = () => {
        navigate("/login");
    };

    return {
        register, handleSubmit, setValue, errors, isSubmitting, serverError, success, onsubmit, handleClose
    };

}
