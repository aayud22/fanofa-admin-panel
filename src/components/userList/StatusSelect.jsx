import React, { useState } from 'react';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/classNames';
import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const StatusSelect = ({ onStatusSelect, className }) => {
  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');

  const status = ['Active', 'InActive', 'Blocked', 'Deleted'];

  const handleApply = () => {
    onStatusSelect(selectedStatus);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className={cn('w-[180px] justify-between', className)}
        >
          <span>{selectedStatus || 'Status'}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!mr-8 w-[400px] p-6" align="start">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Select Status</h2>
          <div className="grid grid-cols-3 gap-3">
            {status.map((status) => (
              <Button
                key={status}
                onClick={() => setSelectedStatus(status)}
                variant={selectedStatus === status ? 'default' : 'outline'}
                className={`w-full text-base font-normal ${
                  selectedStatus === status
                    ? 'bg-primary-gradient text-white hover:bg-blue-600'
                    : 'border-[1px]'
                }`}
              >
                {status}
              </Button>
            ))}
          </div>
          <Separator />
          <p className="text-sm text-muted-foreground">
            *You can choose status
          </p>
          <div className="w-full text-center">
            <Button
              className="w-max bg-primary-gradient !px-9"
              onClick={handleApply}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default StatusSelect;
