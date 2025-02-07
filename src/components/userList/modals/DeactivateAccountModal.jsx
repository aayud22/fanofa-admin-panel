import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '../../ui/dialog';
import { Button } from '../../ui/button';
import { OctagonMinus } from 'lucide-react';

const DeactivateAccountModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <div className="relative">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <OctagonMinus className="h-6 w-6 text-red-600" />
          </div>
          <div className="absolute inset-0 -m-2 h-16 w-16 rounded-full bg-[radial-gradient(theme(colors.red.100),transparent_70%)]" />
          <div className="absolute inset-0 -m-4 h-20 w-20 rounded-full bg-[radial-gradient(theme(colors.red.50),transparent_70%)]" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-start text-xl font-bold text-darkBlueText">
            Deactivate Account
          </DialogTitle>
          <DialogDescription className="text-start text-[17px] font-normal text-deepTeal opacity-60">
            Are you sure you want to Deactivate the selected Account? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Button
            variant="destructive"
            onClick={onConfirm}
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

export default DeactivateAccountModal;
