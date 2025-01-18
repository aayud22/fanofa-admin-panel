import React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { ASSETS } from '../../constants/assets';
import { yupResolver } from '@hookform/resolvers/yup';

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

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle login logic here
  };

  return (
    <div className="bg-login-bg min-h-screen overflow-hidden bg-cover bg-center">
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-[480px] rounded-lg bg-white p-8 shadow-xl">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img src={ASSETS.AUTH?.LOGO} alt="fonafa" />
          </div>

          {/* Heading */}
          <h2 className="text-primary mb-8 text-center text-2xl font-bold md:text-3xl">
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
              className="bg-primary-gradient hover:bg-secondaryHover w-full rounded-md py-3 text-white transition-colors"
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
