import React, { useState } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../ui/select';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from '../../ui/dialog';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { X } from 'lucide-react';

const NotificationComposeModal = ({ open, setOpen }) => {
  const [label, setLabel] = useState('');
  const [logic, setLogic] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [targetCriteria, setTargetCriteria] = useState('');

  const resetForm = () => {
    setLabel('');
    setLogic('');
    setCountry('');
    setMessage('');
    setTargetCriteria('');
  };

  const handleSaveAsDraft = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(
        'Draft saved: Your notification has been saved as a draft.'
      );
      setOpen(false);
    } catch (error) {
      toast.error('Error: Failed to save draft. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendNow = async () => {
    setIsSubmitting(true);
    try {
      // Validate form
      if (!label || !targetCriteria || !country || !message || !logic) {
        toast.error('Please fill in all fields');
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Notification sent successfully.');
      resetForm();
      setOpen(false);
    } catch (error) {
      toast.error(
        error.message || 'Failed to send notification. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-darkBlueText">
            Compose New Notification
          </DialogTitle>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setOpen(false)}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-1">
            <Label htmlFor="label" className="text-base font-medium">
              Label
            </Label>
            <Input
              id="label"
              placeholder="Descriptive Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="border-gray-300"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="targetCriteria" className="text-base font-medium">
              Target Criteria
            </Label>
            <Select value={targetCriteria} onValueChange={setTargetCriteria}>
              <SelectTrigger id="targetCriteria" className="border-gray-300">
                <SelectValue placeholder="Specify which users should get this message" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="active">Active Users</SelectItem>
                <SelectItem value="inactive">Inactive Users</SelectItem>
                <SelectItem value="new">New Users</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="country" className="text-base font-medium">
              Select Country
            </Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country" className="border-gray-300">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="global">Global</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="text-base font-medium">
              Enter Description
            </Label>

            <div className="quill-container h-[185px]">
              <ReactQuill
                theme="snow"
                value={message}
                onChange={setMessage}
                className="h-[150px]"
                modules={{
                  toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['clean'],
                  ],
                }}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="logic" className="text-base font-medium">
              Select Logic
            </Label>
            <Select value={logic} onValueChange={setLogic}>
              <SelectTrigger id="logic" className="border-gray-300">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="and">AND</SelectItem>
                <SelectItem value="or">OR</SelectItem>
                <SelectItem value="not">NOT</SelectItem>
                <SelectItem value="custom">Custom Logic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            disabled={isSubmitting}
            onClick={handleSaveAsDraft}
            className="border-softPaleBlue text-darkBlueText"
          >
            Save As Draft
          </Button>
          <Button
            onClick={handleSendNow}
            disabled={isSubmitting}
            className="bg-primary-gradient text-white"
          >
            Send Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationComposeModal;
