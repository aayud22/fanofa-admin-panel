import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ASSETS } from '../../constants/assets';

// Yup schema for form validation
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 1,
    seconds: 50,
    milliseconds: 18,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.milliseconds > 0) {
          return { ...prev, milliseconds: prev.milliseconds - 1 };
        } else if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1, milliseconds: 99 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        }
        return prev;
      });
    }, 10);

    return () => clearInterval(timer);
  }, []);

  const onSubmit = (data) => {
    console.log('Email submitted:', data.email);
    reset(); // Reset the form after submission
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full space-y-8">
        {/* Maintenance Image */}
        <div className="my-[100px] mb-[80px] flex h-[300px] w-full items-center justify-center sm:my-[150px] sm:mb-[130px]">
          <img
            src={ASSETS?.ERROR?.UNDER_MAINTAIN}
            alt="Maintenance illustration"
            className="max-w-full object-contain"
          />
        </div>

        {/* Maintenance Text and Countdown */}
        <div className="space-y-4 bg-maintenance-page-bg bg-cover bg-center py-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Hang on! We are under maintenance
          </h1>
          <p className="text-lg text-white/90">
            It will not take a long time till we get the error fixed. We will
            live again in
          </p>
          <div className="font-mono text-4xl tracking-wider text-white md:text-5xl">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}:
            {String(timeLeft.milliseconds).padStart(2, '0')}
          </div>

          {/* Email Notification Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex max-w-md flex-col gap-4 pt-6 sm:flex-row"
          >
            <div className="flex flex-1 flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
                className={`h-12 rounded-lg border bg-transparent px-4 text-black placeholder:text-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-300'
                    : 'border-gray-300 focus:ring-blue-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-start text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="h-12 rounded-lg bg-white px-8 font-semibold text-darkBlueText hover:bg-gray-100 focus:outline-none"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
