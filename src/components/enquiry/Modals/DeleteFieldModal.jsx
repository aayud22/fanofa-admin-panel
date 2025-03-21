import React from 'react';
import { Button } from '../../ui/button';
import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '../../ui/dialog';
import { Trash2 } from 'lucide-react';

const DeleteFieldModal = ({ isOpen, onClose, onDelete, fieldName }) => {
  const handleDelete = () => {
    onDelete();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
          <Trash2 className="h-6 w-6 text-red-600" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-start text-xl font-bold text-darkBlueText">
            Delete Input Field
          </DialogTitle>
          <DialogDescription className="text-start text-[17px] font-normal text-deepTeal opacity-60">
            Are you sure you want to Delete "{fieldName}" Input Field? this
            action can't be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-3 pt-4 sm:flex-col">
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="!h-12 w-full bg-crimsonRed text-base font-semibold hover:bg-red-700"
          >
            Delete
          </Button>
          <Button variant="outline" className="w-full" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteFieldModal;
