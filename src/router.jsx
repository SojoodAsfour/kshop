import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import OTPVerification from "./pages/OTPVerification/OTPVerification.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "products/:id",
                element: <ProductDetails />
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "verify-otp",
                element: <OTPVerification />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            }
        ]
    }
]);

export { router };