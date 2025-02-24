import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/classNames';
import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const PlanSelect = ({ onPlanSelect, value, className }) => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(value || '');

  useEffect(() => {
    setSelectedPlan(value || '');
  }, [value]);

  const plans = [
    'Personal',
    'Personal Plus',
    'Business',
    'Individual',
    'Business Plus',
  ];

  const handleApply = () => {
    onPlanSelect(selectedPlan);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-[180px] justify-between', className)}
        >
          <span>{selectedPlan || 'Plan'}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="!mr-8 w-[400px] p-6" align="start">
        <div className="space-y-4">
        <h2 className="text-xl font-semibold">Select Status</h2>
          <div className="grid grid-cols-3 gap-3">
            {plans.map((plan) => (
              <Button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                variant={selectedPlan === plan ? 'default' : 'outline'}
                className={`w-full text-base font-normal ${
                  selectedPlan === plan
                    ? 'bg-primary-gradient text-white hover:bg-blue-600'
                    : 'border-[1px]'
                }`}
              >
                {plan}
              </Button>
            ))}
          </div>
          <Separator />
          <p className="text-sm text-muted-foreground">*You can choose plan</p>
          <div className="flex justify-end gap-2">
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

export default PlanSelect;
