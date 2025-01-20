import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ASSETS } from '../../constants/assets';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SubAdminLogin = () => {
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
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col p-8 md:p-12 lg:p-16">
        {/* Logo */}
        <div className="mb-12">
          <img src={ASSETS.AUTH?.LOGO} alt="fonafa" />
        </div>

        {/* Main Content */}
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center">
          <h2 className="mb-8 text-3xl font-bold text-[#1e3799]">
            Login for Admin
          </h2>

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
              className="bg-deepBlue-gradient hover:bg-oceanBlue w-full rounded-md py-3 text-white transition-colors"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-auto flex flex-col items-center justify-between pt-8 text-sm text-gray-600 sm:flex-row">
          <div>© 2024 FANOFA</div>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <a href="/privacy-policy" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <div
          className="bg-login-bg h-full w-full bg-cover bg-center"
          // style={{
          //   backgroundImage: `url(${encodeURI('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9hZlokcVqFPlT9oUI7WFeDRfI9WsVA.png')})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          // }}
        />
      </div>
    </div>
  );
};

export default SubAdminLogin;
