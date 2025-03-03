import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { ASSETS } from '../../constants/assets';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { loginUser } from '../../services/api/auth/authService';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SuperAdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', data);

      const response = await loginUser({
        full_name: '',
        phone_number: '',
        password: data.password,
        email: data.email,
        gender: '',
        age: '',
        country: '',
        city: '',
        state: '',
        language: '',
        admin: true,
      });

      console.log('Login Successful:', response);

      // dispatch(setRole(response.admin ? "admin" : "user"));
      // localStorage.setItem("userRole", response.admin ? "admin" : "user");

      toast.success("Login successful! Redirecting..."); // Success message

      // setTimeout(() => {
      //   navigate("/user/dashboard");
      // }, 2000); // Delay navigation for better UX
    } catch (error) {
      console.error('Login Failed:', error);
      toast.error('Login failed. Please check your credentials.'); // Error message
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-login-bg bg-cover bg-center">
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-[480px] rounded-lg bg-white p-8 shadow-xl">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img src={ASSETS.AUTH?.LOGO} alt="fonafa" />
          </div>

          {/* Heading */}
          <h2 className="mb-8 text-center text-2xl font-bold text-[#1e3799] md:text-3xl">
            Login for Super-Admin
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                {...register('email')}
                className={`w-full rounded-md border p-3 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                {...register('password')}
                className={`w-full rounded-md border p-3 ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary-gradient py-3 text-white transition-colors hover:bg-oceanBlue"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
