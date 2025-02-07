import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from '../../ui/dialog';
import { X } from 'lucide-react';
import ReactQuill from 'react-quill';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group';

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'], // Formatting options
    [{ code: 'code-block' }], // Code block
    ['blockquote'], // Blockquote
    [{ list: 'ordered' }, { list: 'bullet' }], // Lists
    [{ header: [1, 2, 3, false] }], // Heading levels
  ],
};

const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'code-block',
  'blockquote',
  'list',
  'bullet',
  'header',
];

const SendMessageModal = ({ isOpen, onClose }) => {
  const [messageType, setMessageType] = useState('message');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    console.log({ messageType, message });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} className="!h-auto">
      <DialogContent className="max-w-2xl p-4">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-darkBlueText">
              Write your Message
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* ReactQuill Editor */}
        <div className="!h-48">
          <ReactQuill
            theme="snow"
            value={message}
            modules={modules}
            formats={formats}
            className="h-full"
            onChange={setMessage}
            placeholder="Start writing here..."
          />
        </div>

        <div className="space-y-6">
          {/* Radio Group */}
          <RadioGroup
            defaultValue="message"
            value={messageType}
            onValueChange={setMessageType}
            className="flex flex-wrap gap-4"
          >
            {['reminder', 'alert', 'birthday', 'message'].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <RadioGroupItem value={type} id={type} />
                <Label htmlFor={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Send Button */}
          <Button
            onClick={handleSendMessage}
            className="w-full bg-primary-gradient sm:w-auto"
          >
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendMessageModal;
