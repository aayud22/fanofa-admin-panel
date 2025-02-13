import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  link: yup
    .string()
    .required('Link is required')
    .url('Please enter a valid URL'),
  icon: yup.mixed().nullable(),
  file: yup.mixed().nullable(),
});

const AddSourceModal = ({ isOpen, onClose, onAdd }) => {
  const [dragActive, setDragActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      link: '',
      icon: null,
      file: null,
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    setValue('file', file, { shouldValidate: true });
  };

  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('icon', file, { shouldValidate: true });
    }
  };

  const onSubmit = (data, addAnother = false) => {
    onAdd(data);
    if (!addAnother) {
      onClose();
    }
    if (addAnother) {
      reset();
    }
  };

  const watchFile = watch('file');

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add Source
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit((data) => onSubmit(data, false))}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Enter Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Ad Title"
                {...register('name')}
                className={`col-span-3 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="link">
                Enter Link <span className="text-red-500">*</span>
              </Label>
              <Input
                id="link"
                type="url"
                placeholder="http://virtualpage18.nl"
                {...register('link')}
                className={`col-span-3 ${errors.link ? 'border-red-500' : ''}`}
              />
              {errors.link && (
                <p className="text-sm text-red-500">{errors.link.message}</p>
              )}
            </div>

            <div className="grid gap-2">
              <Label>Add Icon Image</Label>
              <div
                className={`flex min-h-[80px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${
                  dragActive
                    ? 'border-primary bg-primary/5'
                    : 'border-slate-200 hover:bg-slate-50'
                } ${errors.file ? 'border-red-500' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-upload').click()}
              >
                <div className="flex flex-col items-center gap-2 text-sm text-slate-600">
                  <Upload className="h-8 w-8 text-slate-400" />
                  <p className="text-center">
                    Drop your file here or{' '}
                    <span className="text-primary">click to browse</span>
                  </p>
                  {watchFile && (
                    <p className="text-xs text-slate-500">{watchFile.name}</p>
                  )}
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFile(e.target.files[0])}
                />
              </div>
              {errors.file && (
                <p className="text-sm text-red-500">{errors.file.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleSubmit((data) => onSubmit(data, true))}
              className="text-sm font-medium"
            >
              Save and Add Another
            </Button>
            <Button
              type="submit"
              className="!bg-primary-gradient text-sm font-medium text-white"
            >
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSourceModal;
