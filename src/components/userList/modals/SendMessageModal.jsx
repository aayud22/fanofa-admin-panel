import React, { useRef, useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from '../../ui/dialog';
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

const SendMessageModal = ({ isOpen, onClose }) => {
  const [messageType, setMessageType] = useState('message');
  const [message, setMessage] = useState('');

  const quillRef = useRef(null);

  const handleSendMessage = () => {
    console.log({ messageType, message });
    onClose();
  };

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.container.style.height = "181px";
      quill.focus();
    }
  }, [quillRef, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-4 sm:max-h-[80vh] flex flex-col !rounded-none">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-darkBlueText">
              Write your Message
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* ReactQuill Editor */}
        <div className="h-[181px] relative">
          <ReactQuill
            theme="snow"
            ref={quillRef}
            value={message}
            modules={modules}
            onChange={setMessage}
            className="h-full"
            style={{
              height: "181px"
            }}
          />
        </div>

        {/* Message Type Selection */}
        <div className="space-y-2 mt-9">
          <Label className="block">Message Type</Label>
          <RadioGroup
            value={messageType}
            onValueChange={setMessageType}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="message" id="message" />
              <Label htmlFor="message" className="text-darkBlueText">Message</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reminder" id="reminder" />
              <Label htmlFor="reminder" className="text-darkBlueText">Reminder</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="alert" id="alert" />
              <Label htmlFor="alert" className="text-darkBlueText">Alert</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Send Button */}
        <Button
          onClick={handleSendMessage}
          className="w-max bg-primary-gradient"
        >
          Send Message
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SendMessageModal;
