import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogHeader, DialogContent } from '../ui/dialog';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import * as yup from 'yup';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { Eye, EyeOff, ChevronDown } from 'lucide-react';

const schema = yup
  .object({
    fullName: yup.string().required('Full name is required'),
    gender: yup.string().required('Gender is required'),
    ageRange: yup.string().required('Age range is required'),
    language: yup.string().required('Language is required'),
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    country: yup.string().required('Country is required'),
    state: yup.string().required('State is required'),
    city: yup.string().required('City is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  })
  .required();

const AddUserModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      ageRange: '',
      language: '',
      phone: '',
      country: '',
      state: '',
      city: '',
    },
  });

  const watchedValues = watch();

  useEffect(() => {
    if (isOpen) {
      reset();
      setSelectedUserId(null);
    }
  }, [isOpen, reset]);

  const handleSelectChange = (field) => (value) => {
    setValue(field, value, { shouldValidate: true });
  };

  const handlePhoneChange = (value) => {
    setValue('phone', value, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    try {
      if (selectedUserId !== null) {
        setAddedUsers((users) =>
          users.map((user) =>
            user.id === selectedUserId ? { ...data, id: user.id } : user
          )
        );
      }
      reset();
      setSelectedUserId(null);
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const onSaveAndAddAnother = async (data) => {
    try {
      if (selectedUserId !== null) {
        setAddedUsers((users) =>
          users.map((user) =>
            user.id === selectedUserId ? { ...data, id: user.id } : user
          )
        );
        setSelectedUserId(null);
      } else {
        const newUser = {
          ...data,
          id: Date.now(),
          avatar: data.fullName.charAt(0).toUpperCase(),
        };
        setAddedUsers((prevUsers) => [...prevUsers, newUser]);
      }
      reset();
    } catch (error) {
      console.error('Save and add another error:', error);
    }
  };

  const handleUserClick = (user) => {
    if (selectedUserId === user.id) {
      setSelectedUserId(null);
      reset();
    } else {
      setSelectedUserId(user.id);
      const userValues = {
        ...user,
        password: '',
        confirmPassword: '',
      };
      reset(userValues);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex max-h-[90vh] max-w-[600px] flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-xl font-semibold text-darkBlueText">
            {selectedUserId !== null
              ? 'Edit User'
              : addedUsers.length > 0
                ? 'Add Another'
                : 'Add User'}
          </DialogTitle>
        </DialogHeader>

        {addedUsers.map((user) => (
          <div
            key={user.id}
            className="mb-3 rounded-lg border border-palePeriwinkle bg-white p-4"
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => handleUserClick(user)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lightBackground">
                  <span className="text-lg font-medium text-duskyBlue">
                    {user.avatar}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-medium text-duskyBlue">
                    {user.fullName}
                  </h3>
                  <p className="text-sm text-grayText">{user.email}</p>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 transform text-duskyBlue transition-transform duration-200 ${
                  selectedUserId !== user.id ? '' : 'rotate-180'
                }`}
              />
            </div>
          </div>
        ))}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto pr-2"
        >
          <div className="grid grid-cols-2 gap-4 pb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Full Name<span className="text-error">*</span>
              </label>
              <Input
                {...register('fullName')}
                placeholder="Enter your first name"
                className="w-full"
              />
              {errors.fullName && (
                <span className="text-xs text-error">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Gender<span className="text-error">*</span>
              </label>
              <Select
                value={watchedValues.gender}
                onValueChange={handleSelectChange('gender')}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && (
                <span className="text-xs text-error">
                  {errors.gender.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Age Range<span className="text-error">*</span>
              </label>
              <Select
                value={watchedValues.ageRange}
                onValueChange={handleSelectChange('ageRange')}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20-30">20-30</SelectItem>
                  <SelectItem value="31-40">31-40</SelectItem>
                  <SelectItem value="41-50">41-50</SelectItem>
                  <SelectItem value="51+">51+</SelectItem>
                </SelectContent>
              </Select>
              {errors.ageRange && (
                <span className="text-xs text-error">
                  {errors.ageRange.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Language<span className="text-error">*</span>
              </label>
              <Select
                value={watchedValues.language}
                onValueChange={handleSelectChange('language')}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
              {errors.language && (
                <span className="text-xs text-error">
                  {errors.language.message}
                </span>
              )}
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Email Address<span className="text-error">*</span>
              </label>
              <Input
                {...register('email')}
                type="email"
                placeholder="Enter your email address"
                className="w-full"
              />
              {errors.email && (
                <span className="text-xs text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Phone Number<span className="text-error">*</span>
              </label>
              <PhoneInput
                country={'in'}
                value={watchedValues.phone}
                onChange={handlePhoneChange}
                disabled={isSubmitting}
                inputClass="!w-full !h-10 !text-base"
                containerClass="!w-full"
                buttonClass="!h-10"
              />
              {errors.phone && (
                <span className="text-xs text-error">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Country<span className="text-error">*</span>
              </label>
              <Select
                value={watchedValues.country}
                onValueChange={handleSelectChange('country')}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                </SelectContent>
              </Select>
              {errors.country && (
                <span className="text-xs text-error">
                  {errors.country.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                State<span className="text-error">*</span>
              </label>
              <Input
                {...register('state')}
                placeholder="State"
                className="w-full"
              />
              {errors.state && (
                <span className="text-xs text-error">
                  {errors.state.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                City<span className="text-error">*</span>
              </label>
              <Select
                value={watchedValues.city}
                onValueChange={handleSelectChange('city')}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>
              {errors.city && (
                <span className="text-xs text-error">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Create Password<span className="text-error">*</span>
              </label>
              <div className="relative">
                <Input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="******************"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-xs text-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-darkBlueText">
                Confirm Password<span className="text-error">*</span>
              </label>
              <div className="relative">
                <Input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="******************"
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-xs text-error">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="col-span-2 mt-4 flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 border border-palePeriwinkle text-sm font-medium text-duskyBlue hover:bg-primary/5"
                onClick={handleSubmit(onSaveAndAddAnother)}
              >
                {selectedUserId !== null
                  ? 'Update and Add Another'
                  : 'Save and Add Another'}
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary-gradient text-white hover:bg-primary/90"
              >
                {selectedUserId !== null ? 'Update' : 'Add'}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
