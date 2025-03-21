import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';
import { Pencil, Trash2 } from 'lucide-react';
import CustomFieldForm from './CustomFieldForm';
import DatePicker from 'react-multi-date-picker';
import PhoneInput from 'react-phone-number-input';
import EditFieldModal from './Modals/EditFieldModal';
import FileUploadComponent from './FileUploadComponent';
import DeleteFieldModal from './Modals/DeleteFieldModal';

const ComplaintForm = () => {
  const [showCustomField, setShowCustomField] = useState(false);
  const [fields, setFields] = useState([
    {
      id: 'fullName',
      label: 'Full Name',
      enabled: true,
      value: '',
      type: 'text',
      width: 'half',
    },
    {
      id: 'email',
      label: 'Email Address',
      enabled: true,
      value: '',
      type: 'email',
      width: 'half',
    },
    {
      id: 'number',
      label: 'Phone Number (Optional)',
      enabled: true,
      value: '',
      type: 'number',
      width: 'half',
    },
    {
      id: 'date',
      label: 'Date of complaint',
      enabled: true,
      value: '',
      type: 'date',
      width: 'half',
    },
    {
      id: 'productNumber',
      label: 'Product / Invoice Number',
      enabled: true,
      value: '',
      type: 'text',
      width: 'full',
    },
    {
      id: 'proofFiles',
      label: 'Proof of Purchase (If Applicable)',
      enabled: true,
      value: [],
      type: 'file',
      width: 'full',
    },
    {
      id: 'nature',
      label: 'What is the nature of your complaint?',
      enabled: true,
      value: '',
      type: 'text',
      width: 'full',
    },
    {
      id: 'description',
      label: 'Please Describe the incident or issue',
      enabled: true,
      value: '',
      type: 'textarea',
      width: 'full',
    },
    {
      id: 'resolution',
      label: 'What resolution are you seeking for',
      enabled: true,
      value: '',
      type: 'textarea',
      width: 'full',
    },
    {
      id: 'supportingFiles',
      label: 'Supporting Document (Optional)',
      enabled: true,
      value: [],
      type: 'file',
      width: 'full',
    },
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState(null);

  const handleToggle = (fieldId) => {
    setFields(
      fields.map((field) =>
        field.id === fieldId ? { ...field, enabled: !field.enabled } : field
      )
    );
  };

  const handleValueChange = (fieldId, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, value } : field
      )
    );
  };

  const handleCustomFieldSave = (newField) => {
    setFields([...fields, { ...newField, id: Date.now().toString() }]);
    setShowCustomField(false);
  };

  const handleFieldDelete = (id) => {
    setFields(fields?.filter((field) => field.id !== id));
  };

  const openEditModal = (field) => {
    if (field.type !== 'file') {
      setCurrentField(field);
      setEditModalOpen(true);
    }
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
        Manage Complaint Form
      </h2>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {fields?.map((field) => (
            <div
              key={field.id}
              className={`space-y-2 ${
                field.width === 'half' ? 'col-span-1' : 'col-span-2'
              }`}
            >
              <Label className="text-sm font-normal text-deepIndigo">
                {field.label}
              </Label>
              <div
                className={`${field.type === 'file' ? 'border-none pr-0' : 'border pr-2'} flex items-start gap-2 rounded-md`}
              >
                {field.type === 'textarea' ? (
                  <Textarea
                    placeholder={field.label}
                    className="!focus:outline-none min-h-[150px] !resize-none !border-none !outline-none focus-visible:outline-none focus-visible:ring-0"
                    disabled={!field.enabled}
                    value={field.value}
                    onChange={(e) =>
                      handleValueChange(field.id, e.target.value)
                    }
                  />
                ) : field.type === 'file' ? (
                  <div className="flex-1">
                    <FileUploadComponent
                      value={field.value || []}
                      onFilesChange={(files) =>
                        handleValueChange(field.id, files)
                      }
                      disabled={!field.enabled}
                    />
                    <span className="py-0.5 text-xs text-deepIndigo">
                      You can upload any supporting document here (e.g., image ,
                      screenshots , etc.)
                    </span>
                  </div>
                ) : field.type === 'date' ? (
                  <DatePicker
                    value={field.value}
                    format="MM-DD-YYYY"
                    placeholder="MM-DD-YYY"
                    disabled={!field.enabled}
                    onChange={(date) => handleValueChange(field.id, date)}
                    inputClass="!w-full !border-none !outline-none !bg-transparent"
                    className="!w-full !border-none !bg-transparent text-base font-medium text-gray-700 !outline-none placeholder:text-muted-foreground md:text-sm"
                    containerStyle={{
                      width: '-webkit-fill-available',
                    }}
                  />
                ) : field.type === 'number' ? (
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

                {field.type !== 'file' && (
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
                )}
              </div>
            </div>
          ))}
        </div>

        {showCustomField ? (
          <CustomFieldForm
            onSave={handleCustomFieldSave}
            onCancel={() => setShowCustomField(false)}
          />
        ) : (
          <Button
            onClick={() => setShowCustomField(true)}
            className="w-fit bg-primary-gradient"
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

export default ComplaintForm;
