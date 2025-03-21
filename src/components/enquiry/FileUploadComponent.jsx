import React, { useCallback } from 'react';
import { Button } from '../ui/button';
import { ImageIcon, X } from 'lucide-react';

const FileUploadComponent = ({
  onFilesChange,
  maxFiles = 5,
  accept = {
    'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    'application/pdf': ['.pdf'],
  },
  value = [], // This now comes from `fields`
  disabled = false,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (disabled) return;

      const newFiles = [
        ...(Array.isArray(value) ? value : []),
        ...acceptedFiles,
      ].slice(0, maxFiles);

      if (typeof onFilesChange === 'function') {
        onFilesChange(newFiles);
      } else {
        console.error('onFilesChange is not a function', onFilesChange);
      }
    },
    [value, maxFiles, onFilesChange, disabled]
  );

  const handleBrowseClick = () => {
    if (disabled) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;

    // Convert accept object to a valid input format
    const acceptString = Object.entries(accept)
      .map(([type, exts]) => `${type}, ${exts.join(', ')}`)
      .join(', ');

    input.accept = acceptString;

    input.onchange = (e) => {
      const target = e.target;
      if (target.files) {
        const fileArray = Array.from(target.files);
        onDrop(fileArray);
      }
    };

    input.click();
  };

  const removeFile = (index) => {
    if (disabled) return;

    const newFiles = value.filter((_, i) => i !== index);

    if (typeof onFilesChange === 'function') {
      onFilesChange(newFiles);
    } else {
      console.error('onFilesChange is not a function', onFilesChange);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) {
      e.currentTarget.classList.add('border-blue-500');
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-500');

    if (disabled) return;

    if (e.dataTransfer.files) {
      const fileArray = Array.from(e.dataTransfer.files);
      onDrop(fileArray);
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex-1 rounded-lg border-2 border-dashed p-4 transition-colors ${
          disabled
            ? 'cursor-not-allowed opacity-60'
            : 'cursor-pointer hover:border-blue-500'
        }`}
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <ImageIcon className="h-4 w-4" />
          <span>Drop your File here or select click to</span>
          <Button
            variant="link"
            disabled={disabled}
            className="h-auto p-0"
            onClick={handleBrowseClick}
          >
            Browse File
          </Button>
        </div>
      </div>

      {value?.length > 0 && (
        <div className="grid gap-2">
          {value.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded border p-2"
            >
              <div className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span className="text-sm">{file.name}</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                disabled={disabled}
                onClick={() => removeFile(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;
