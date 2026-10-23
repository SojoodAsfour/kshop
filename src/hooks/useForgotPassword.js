
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { forgotPasswordSchema } from '../validations/authSchemas';

export default function useForgotPassword() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        mode: "onBlur"
    });

    const onsubmit = async (data) => {
        setServerError(null);
        try {
            await axios.post("https://knowledgeshop.runasp.net/api/auth/Account/SendCode", data);
            navigate("/reset-password", {
                state: { email: data.email }
            });

        } catch (err) {

            console.error(err.response);
            setServerError("Unable to send the code. Please try again.");

        }

    };

    return {
        register, handleSubmit, errors, isSubmitting, serverError, onsubmit
    };

}
