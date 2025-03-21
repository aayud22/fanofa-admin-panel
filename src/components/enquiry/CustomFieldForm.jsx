import React, { useState } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FIELD_LENGTHS, TEXT_TYPES } from '../../constants/formConstants';

const CustomFieldForm = ({ onSave, onCancel }) => {
  const [field, setField] = useState({
    id: Math.random().toString(36).substr(2, 9),
    logic: '',
    type: 'text',
    fieldName: '',
    length: 'full',
    placeholder: '',
  });

  const handleSave = () => {
    if (field.fieldName && field.placeholder) {
      onSave(field);
      onCancel();
    }
  };

  return (
    <div className="mt-4 grid gap-4 rounded-lg border bg-background p-4">
      <div className="grid grid-cols-5 gap-4">
        <div>
          <Input
            value={field.fieldName}
            placeholder="Enter Field Name"
            onChange={(e) => setField({ ...field, fieldName: e.target.value })}
          />
        </div>
        <div>
          <Input
            value={field.placeholder}
            placeholder="Place Holder Text"
            onChange={(e) =>
              setField({ ...field, placeholder: e.target.value })
            }
          />
        </div>
        <div>
          <Select
            value={field.type}
            onValueChange={(value) => setField({ ...field, type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
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
        <div>
          <Input
            placeholder="Enter Field Name"
            value={field.logic}
            onChange={(e) => setField({ ...field, logic: e.target.value })}
          />
        </div>
        <div>
          <Select
            value={field.length}
            onValueChange={(value) => setField({ ...field, length: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent>
              {FIELD_LENGTHS?.map((length) => (
                <SelectItem key={length.value} value={length.value}>
                  {length.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={onCancel}
          variant="secondary"
          className="bg-gray-100 hover:bg-gray-200"
        >
          Cancel
        </Button>
        <Button onClick={handleSave} className="!bg-primary-gradient">
          Save
        </Button>
      </div>
    </div>
  );
};

export default CustomFieldForm;
