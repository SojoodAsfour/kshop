import * as yup from 'yup';
import i18n from '../i18n';

export const registerSchema = yup.object({
  fullName: yup.string().required(() => i18n.t('validation.fullNameRequired'))
    .min(3, () => i18n.t('validation.fullNameMin'))
    .max(50, () => i18n.t('validation.fullNameMax')),

  userName: yup.string().required(() => i18n.t('validation.usernameRequired'))
    .min(3, () => i18n.t('validation.usernameMin'))
    .max(20, () => i18n.t('validation.usernameMax'))
    .matches(/^[a-zA-Z0-9_]+$/, () => i18n.t('validation.usernameFormat')),

  email: yup.string().required(() => i18n.t('validation.emailRequired'))
    .email(() => i18n.t('validation.invalidEmail')),

  password: yup.string().required(() => i18n.t('validation.passwordRequired'))
    .min(6, () => i18n.t('validation.registerPasswordMin'))
    .max(50, () => i18n.t('validation.passwordMax'))
    .matches(/[A-Z]/, () => i18n.t('validation.passwordUppercase'))
    .matches(/[a-z]/, () => i18n.t('validation.passwordLowercase'))
    .matches(/[0-9]/, () => i18n.t('validation.passwordNumber'))
    .matches(/[^A-Za-z0-9]/, () => i18n.t('validation.passwordSpecial')),

  phoneNumber: yup.string().required(() => i18n.t('validation.phoneRequired'))
    .matches(/^05\d{8}$/, () => i18n.t('validation.phoneFormat')),
});

export const loginSchema = yup.object({
  email: yup.string().required(() => i18n.t('validation.emailRequired'))
    .email(() => i18n.t('validation.invalidEmail')),

  password: yup.string().required(() => i18n.t('validation.passwordRequired')),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().required(() => i18n.t('validation.emailRequired')).email(() => i18n.t('validation.invalidEmail'))
});

export const otpSchema = yup.object({
  code: yup.string()
    .required(() => i18n.t('validation.codeRequired'))
    .matches(/^\d{4}$/, () => i18n.t('validation.codeFormat'))
});

export const resetPasswordSchema = yup.object({
  newPassword: yup.string()
    .required(() => i18n.t('validation.newPasswordRequired'))
    .min(8, () => i18n.t('validation.resetPasswordMin'))
    .matches(/[A-Z]/, () => i18n.t('validation.resetPasswordUppercase'))
    .matches(/[0-9]/, () => i18n.t('validation.resetPasswordNumber'))
    .matches(/[^a-zA-Z0-9]/, () => i18n.t('validation.resetPasswordSymbol')),

  confirmPassword: yup.string()
    .required(() => i18n.t('validation.confirmPasswordRequired'))
    .oneOf([yup.ref('newPassword')], () => i18n.t('validation.passwordMismatch'))
});
