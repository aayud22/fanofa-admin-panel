import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  newLink: yup
    .string()
    .required('New link is required')
    .url('Please enter a valid URL'),
});

const UpdateLinkModal = ({ isOpen, onClose, existingLink, onUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      newLink: '',
    },
  });

  const onSubmit = (data) => {
    onUpdate(data.newLink);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Update Link
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="existingLink">Existing Link</Label>
              <Input
                id="existingLink"
                value={existingLink}
                readOnly
                className="bg-slate-50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newLink">
                Enter New Link <span className="text-red-500">*</span>
              </Label>
              <Input
                id="newLink"
                type="url"
                placeholder="https://example.com"
                {...register('newLink')}
                className={`col-span-3 ${errors.newLink ? 'border-red-500' : ''}`}
              />
              {errors.newLink && (
                <p className="text-sm text-red-500">{errors.newLink.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="text-sm font-medium"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="!bg-primary-gradient text-sm font-medium text-white"
            >
              Update
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateLinkModal;
