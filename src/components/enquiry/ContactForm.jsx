import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { Pencil, Trash2 } from 'lucide-react';
import CustomFieldForm from './CustomFieldForm';
import PhoneInput from 'react-phone-number-input';
import EditFieldModal from './Modals/EditFieldModal';
import DeleteFieldModal from './Modals/DeleteFieldModal';

const ContactForm = () => {
  const [showCustomField, setShowCustomField] = useState(false);
  const [customFields, setCustomFields] = useState([]);
  const [fields, setFields] = useState([
    {
      value: '',
      type: 'text',
      enabled: true,
      id: 'fullName',
      label: 'Full Name',
    },
    {
      value: '',
      id: 'email',
      enabled: true,
      type: 'email',
      label: 'Email Address',
    },
    {
      value: '',
      id: 'phone',
      enabled: true,
      type: 'phone',
      label: 'Phone Number (Optional)',
    },
    {
      value: '',
      type: 'text',
      id: 'subject',
      enabled: true,
      label: 'Subject (Optional)',
    },
    {
      value: '',
      id: 'message',
      enabled: true,
      type: 'textarea',
      label: 'Enter Message',
    },
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState(null);

  const handleToggle = (fieldId) => {
    setFields(
      fields?.map((field) =>
        field?.id === fieldId ? { ...field, enabled: !field.enabled } : field
      )
    );
  };

  const handleValueChange = (fieldId, value) => {
    setFields(
      fields?.map((field) =>
        field?.id === fieldId ? { ...field, value } : field
      )
    );
  };

  const handleCustomFieldSave = (field) => {
    setCustomFields([...customFields, field]);
    setShowCustomField(false);
  };

  const handleFieldDelete = (id) => {
    setFields(fields?.filter((field) => field.id !== id));
  };

  const openEditModal = (field) => {
    setCurrentField(field);
    setEditModalOpen(true);
  };

  const openDeleteModal = (field) => {
    setCurrentField(field);
    setDeleteModalOpen(true);
  };

  const handleUpdateField = (updatedField) => {
    setFields(
      fields.map((field) =>
        field.id === updatedField.id
          ? {
              ...field,
              label: updatedField.label,
              placeholder: updatedField.placeholder,
              type: updatedField.type,
            }
          : field
      )
    );
  };

  return (
    <div className="py-6">
      <h2 className="mb-6 text-xl font-semibold text-deepIndigo">
        Manage Contact Form
      </h2>
      <div className="grid gap-6">
        {fields?.map((field) => (
          <div
            key={field.id}
            className={`grid gap-6 ${field.type === 'textarea' ? 'col-span-2' : 'grid-cols-2'}`}
          >
            <div className="col-span-2 space-y-2">
              <Label className="text-sm font-normal text-deepIndigo">
                {field.label}
              </Label>
              <div className="flex items-start gap-2 rounded-md border pr-2">
                {field.type === 'textarea' ? (
                  <Textarea
                    value={field?.value}
                    placeholder={field?.label}
                    disabled={!field?.enabled}
                    className="!focus:outline-none min-h-[150px] !resize-none !border-none !outline-none focus-visible:outline-none focus-visible:ring-0"
                    onChange={(e) =>
                      handleValueChange(field.id, e.target.value)
                    }
                  />
                ) : field.type === 'phone' ? (
                  <PhoneInput
                    value={field.value}
                    defaultCountry="US"
                    disabled={!field.enabled}
                    onChange={(phone) => handleValueChange(field.id, phone)}
                    className="enquiry-phone-input flex !h-[38px] w-full items-center border-none px-3 py-1.5"
                  />
                ) : (
                  <Input
                    type={field.type}
                    value={field.value}
                    placeholder={field.label}
                    disabled={!field.enabled}
                    className="!focus:outline-none !border-none !outline-none focus-visible:outline-none focus-visible:ring-0"
                    onChange={(e) =>
                      handleValueChange(field.id, e.target.value)
                    }
                  />
                )}
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9"
                    onClick={() => openEditModal(field)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-9 w-9"
                    onClick={() => openDeleteModal(field)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Switch
                    checked={field.enabled}
                    onCheckedChange={() => handleToggle(field.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {customFields?.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label>{field.fieldName}</Label>
            <div className="flex items-center gap-2">
              <Input
                type={field.type}
                placeholder={field.placeholder}
                className={`w-${field.length}`}
              />
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openEditModal(field)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openDeleteModal(field)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        ))}

        {showCustomField ? (
          <CustomFieldForm
            onSave={handleCustomFieldSave}
            onCancel={() => setShowCustomField(false)}
          />
        ) : (
          <Button
            className="w-fit bg-primary-gradient"
            onClick={() => setShowCustomField(true)}
          >
            Add More Fields
          </Button>
        )}
      </div>

      {/* Edit Field Modal */}
      {currentField && (
        <EditFieldModal
          field={currentField}
          isOpen={editModalOpen}
          onUpdate={handleUpdateField}
          onClose={() => setEditModalOpen(false)}
        />
      )}

      {/* Delete Field Modal */}
      {currentField && (
        <DeleteFieldModal
          isOpen={deleteModalOpen}
          fieldName={currentField.label}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => handleFieldDelete(currentField.id)}
        />
      )}
    </div>
  );
};

export default ContactForm;
