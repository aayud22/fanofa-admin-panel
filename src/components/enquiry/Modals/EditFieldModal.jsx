import React, { useEffect, useState } from 'react';
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
  DialogFooter,
  DialogHeader,
  DialogContent,
} from '../../ui/dialog';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { TEXT_TYPES } from '../../../constants/formConstants';

const EditFieldModal = ({ isOpen, onClose, onUpdate, field }) => {
  const [editedField, setEditedField] = useState({
    id: '',
    label: '',
    placeholder: '',
    type: 'text',
  });

  useEffect(() => {
    if (field) {
      setEditedField({
        id: field.id,
        label: field.label,
        placeholder: field.placeholder || '',
        type: field.type,
      });
    }
  }, [field]);

  const handleUpdate = () => {
    onUpdate(editedField);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showClose={true} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-deepIndigo">
            Edit Input Field
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="input-label">Input Label</Label>
            <Input
              id="input-label"
              value={editedField.label}
              onChange={(e) =>
                setEditedField({ ...editedField, label: e.target.value })
              }
              placeholder="Enter field label"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="placeholder">Placeholder</Label>
            <Input
              id="placeholder"
              value={editedField.placeholder}
              onChange={(e) =>
                setEditedField({ ...editedField, placeholder: e.target.value })
              }
              placeholder="Enter placeholder text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="input-type">Input Type</Label>
            <Select
              value={editedField.type}
              onValueChange={(value) =>
                setEditedField({ ...editedField, type: value })
              }
            >
              <SelectTrigger id="input-type">
                <SelectValue placeholder="Select input type" />
              </SelectTrigger>
              <SelectContent>
                {TEXT_TYPES?.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} className="bg-primary-gradient">
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditFieldModal;
