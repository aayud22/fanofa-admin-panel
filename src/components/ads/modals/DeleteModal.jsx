import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '../../ui/dialog';
import { Trash2 } from 'lucide-react';
import { Button } from '../../ui/button';

const DeleteModal = ({ isOpen, onClose, onConfirm, type = 'ad' }) => {
  const title = `Delete ${type}`;
  const description = `Are you sure you want to delete the selected ${type}? This action cannot be undone.`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <Trash2 className="h-6 w-6 text-red-600" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-start text-xl font-bold text-darkBlueText">
            {title}
          </DialogTitle>
          <DialogDescription className="text-start text-[17px] font-normal text-deepTeal opacity-60">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-1 flex flex-col gap-4">
          <Button
            onClick={onConfirm}
            variant="destructive"
            className="!h-12 w-full bg-crimsonRed text-base font-semibold hover:bg-red-700"
          >
            Confirm
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="!h-12 w-full text-balance font-semibold text-charcoalGray"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
