import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { format } from 'date-fns';
import { cn } from '../../utils/classNames';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from '../../components/ui/calendar';
import { APP_ROUTES } from '../../constants/routeConstants';
import { CalendarIcon, Upload, Plus, X, FileDown } from 'lucide-react';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const CreateDeal = () => {
  const dispatch = useDispatch();
  const { common } = useSelector((state) => state);

  const [rules, setRules] = useState([
    { type: 'if', condition: '', operator: '=', value: '100' },
    { type: 'and', condition: '', operator: '$', value: '100' },
    { type: 'than', condition: '', operator: '=', value: '100' },
  ]);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Ad', link: APP_ROUTES.ADS.BASE },
      { label: 'Create New Deal' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Ads',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dealName: '',
      brands: '',
      category: '',
      subCategory: '',
      subSubCategory: '',
      channels: '',
      targetCustomers: '',
      emailOnly: '',
      notificationOnly: '',
      customers: 'Business Plan',
      syncTime: 'Every hour',
      validationTime: 'Today',
      runLength: {
        from: new Date(),
        to: new Date(),
      },
    },
  });

  const onSubmit = (data) => {
    const formData = {
      ...data,
      rules: rules.map((rule) => ({
        ...rule,
        value: rule.value.trim(),
      })),
    };
    console.log('Form data:', formData);
  };

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index] = { ...newRules[index], [field]: value };
    setRules(newRules);
  };

  const handleRemoveRule = (index) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  const handleAddCondition = (index) => {
    const newRules = [...rules];
    newRules.splice(index + 1, 0, {
      type: 'if',
      condition: '',
      operator: '=',
      value: '',
    });
    setRules(newRules);
  };

  const handleAddAction = (index) => {
    const newRules = [...rules];
    newRules.splice(index + 1, 0, {
      type: 'and',
      condition: '',
      operator: '$',
      value: '',
    });
    setRules(newRules);
  };

  const handleAddNestedCondition = (index) => {
    const newRules = [...rules];
    newRules.splice(index + 1, 0, {
      type: 'than',
      condition: '',
      operator: '=',
      value: '',
    });
    setRules(newRules);
  };

  const handleAddRule = (type) => {
    setRules([...rules, { type, condition: '', operator: '=', value: '' }]);
  };

  return (
    <div className="h-full overflow-auto pb-20">
      <div className="container mx-auto p-2">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h1 className="text-2xl font-semibold text-darkBlueText">
            Create New Deal
          </h1>

          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-md border-[1px] border-softPaleBlue text-sm font-semibold text-darkBlueText shadow-soft-2xl"
          >
            <FileDown className="h-5 w-5" />
            Download
          </Button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          id="createDealForm"
          className="space-y-4"
        >
          {/* Deal Info Section */}
          <div className="rounded-lg border border-gray-200 p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient text-sm text-white">
                1
              </div>
              <h2 className="text-lg font-medium text-darkBlueText">
                Deal info
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Deal Name</label>
                <Input
                  {...register('dealName', {
                    required: 'Deal name is required',
                  })}
                  placeholder="ex. Summer Ends Offer"
                  className={cn(errors.dealName && 'border-red-500')}
                />
                {errors.dealName && (
                  <p className="text-sm text-red-500">
                    {errors.dealName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Brands/Outlets</label>
                <Input
                  {...register('brands', {
                    required: 'Brands/Outlets is required',
                  })}
                  placeholder="Hard Rock cafe, Koregaon park"
                  className={cn(errors.brands && 'border-red-500')}
                />
                {errors.brands && (
                  <p className="text-sm text-red-500">
                    {errors.brands.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Category</label>
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={cn(errors.category && 'border-red-500')}
                      >
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category && (
                  <p className="text-sm text-red-500">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Sub - Category</label>
                <Controller
                  name="subCategory"
                  control={control}
                  rules={{ required: 'Sub-category is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={cn(errors.subCategory && 'border-red-500')}
                      >
                        <SelectValue placeholder="Select sub-category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Sub-Sub-Category
                </label>
                <Controller
                  name="subSubCategory"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sub-sub-category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Channels</label>
                <div className="flex items-center gap-4">
                  <Input
                    {...register('channels')}
                    placeholder="Email, Notifications"
                    className="flex-1"
                  />
                  <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-300">
                    <Upload className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Audience Section */}
          <div className="rounded-lg border border-gray-200 p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient text-sm text-white">
                2
              </div>
              <h2 className="text-lg font-medium text-darkBlueText">
                Audience
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Target Customers
                </label>
                <Input
                  {...register('targetCustomers', {
                    required: 'Target customers is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a valid number',
                    },
                  })}
                  type="number"
                  placeholder="5,000"
                  className={cn(errors.targetCustomers && 'border-red-500')}
                />
                {errors.targetCustomers && (
                  <p className="text-sm text-red-500">
                    {errors.targetCustomers.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Email Only</label>
                <Input
                  {...register('emailOnly', {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a valid number',
                    },
                  })}
                  type="number"
                  placeholder="2,750"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">
                  Notification Only
                </label>
                <Input
                  {...register('notificationOnly', {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Please enter a valid number',
                    },
                  })}
                  type="number"
                  placeholder="2,250"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Customers</label>
                <Controller
                  name="customers"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Business Plan">
                          Business Plan
                        </SelectItem>
                        <SelectItem value="Enterprise Plan">
                          Enterprise Plan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Time Manage Section */}
          <div className="rounded-lg border border-gray-200 p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient text-sm text-white">
                3
              </div>
              <h2 className="text-lg font-medium text-darkBlueText">
                Time manage
              </h2>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Sync Time</label>
                <Controller
                  name="syncTime"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sync time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Every hour">Every hour</SelectItem>
                        <SelectItem value="Every day">Every day</SelectItem>
                        <SelectItem value="Every week">Every week</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Validation Time</label>
                <Controller
                  name="validationTime"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select validation time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Today">Today</SelectItem>
                        <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                        <SelectItem value="Next week">Next week</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600">Run length</label>
                <div className="flex items-center gap-4">
                  <Controller
                    name="runLength"
                    control={control}
                    render={({ field }) => (
                      <div className="grid w-full gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                'w-full justify-start text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value?.from ? (
                                field.value.to ? (
                                  <>
                                    {format(field.value.from, 'LLL dd, y')} -{' '}
                                    {format(field.value.to, 'LLL dd, y')}
                                  </>
                                ) : (
                                  format(field.value.from, 'LLL dd, y')
                                )
                              ) : (
                                <span>Pick a date range</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={field.value?.from}
                              selected={field.value}
                              onSelect={field.onChange}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Create Rules Section */}
          <div className="rounded-lg border border-gray-200 p-3">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-gradient text-sm text-white">
                4
              </div>
              <h2 className="text-lg font-medium text-darkBlueText">
                Create Rules
              </h2>
            </div>

            <div className="relative space-y-3">
              {/* Vertical process line */}
              <div className="absolute bottom-8 left-[5px] top-2 w-0.5 bg-blue-100" />

              {rules.map((rule, index) => (
                <div key={index} className="relative">
                  {/* Rule dot */}
                  <div className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full bg-blue-500" />

                  <div className="ml-8 space-y-2">
                    {/* Rule content */}
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'w-12 text-sm font-medium',
                          rule.type === 'if' && 'text-blue-500',
                          rule.type === 'and' && 'text-green-500',
                          rule.type === 'than' && 'text-purple-500'
                        )}
                      >
                        {rule.type}
                      </span>
                      <Select
                        value={rule.condition}
                        onValueChange={(value) =>
                          handleRuleChange(index, 'condition', value)
                        }
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="spend">Spend</SelectItem>
                          <SelectItem value="increase budget">
                            Increase budget
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={rule.operator}
                        onValueChange={(value) =>
                          handleRuleChange(index, 'operator', value)
                        }
                      >
                        <SelectTrigger className="w-[80px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="=">=</SelectItem>
                          <SelectItem value="$">$</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="text"
                        value={rule.value}
                        onChange={(e) =>
                          handleRuleChange(index, 'value', e.target.value)
                        }
                        className="w-24"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveRule(index)}
                        className="hover:bg-red-50 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Action buttons based on rule type */}
                    <div className="flex gap-2">
                      {rule.type === 'if' && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 font-normal text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => handleAddCondition(index)}
                        >
                          <Plus className="mr-1 h-4 w-4" />
                          Add Condition
                        </Button>
                      )}
                      {rule.type === 'and' && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 font-normal text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => handleAddAction(index)}
                        >
                          <Plus className="mr-1 h-4 w-4" />
                          Action
                        </Button>
                      )}
                      {rule.type === 'than' && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 font-normal text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => handleAddNestedCondition(index)}
                        >
                          <Plus className="mr-1 h-4 w-4" />
                          Nested condition
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* New Rule button */}
              <div className="relative">
                <div className="absolute left-0 top-3 h-2.5 w-2.5 rounded-full bg-blue-500" />
                <div className="ml-8">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    onClick={() => handleAddRule('if')}
                  >
                    <Plus className="h-4 w-4" />
                    New Rule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Sticky Buttons */}
      <div
        className="fixed bottom-0 right-0 ml-[64px] border-t bg-white p-4 shadow-lg"
        style={{
          width: common?.isCollapsed
            ? 'calc(100% - 64px)'
            : 'calc(100% - 256px)',
        }}
      >
        <div className="container mx-auto flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            className="bg-white text-black hover:bg-gray-50"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="createDealForm"
            className="bg-primary-gradient text-white hover:bg-blue-700"
          >
            Create Deal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateDeal;
