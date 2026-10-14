import * as yup from 'yup';

export const registerSchema = yup.object({
  fullName: yup.string().required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters")
    .max(50, "Full Name must not exceed 50 characters"),

  userName: yup.string().required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must not exceed 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers and underscores"),

  email: yup.string().required("Email is required")
    .email("Invalid email format"),

  password: yup.string().required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must not exceed 50 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character"),

  phoneNumber: yup.string().required("Phone Number is required")
    .matches(/^05\d{8}$/, "Phone Number must start with 05 and contain exactly 10 digits"),
});

export const loginSchema = yup.object({
  email: yup.string().required("Email is required")
    .email("Invalid email format"),

  password: yup.string().required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must not exceed 50 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});
