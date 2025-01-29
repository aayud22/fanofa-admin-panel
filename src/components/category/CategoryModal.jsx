import React, { useState } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { ASSETS } from '../../constants/assets';
import { CloudUpload, Plus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

const CategoryModal = ({ isOpen, onClose, mode, initialData, onSubmit }) => {
  const [newSubcategories, setNewSubcategories] = useState([]);
  const [subcategoryInput, setSubcategoryInput] = useState('');
  const [imagePreview, setImagePreview] = useState(initialData?.icon || '');

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSubCategory = (type) => {
    if (subcategoryInput.trim()) {
      setNewSubcategories([
        ...newSubcategories,
        { name: subcategoryInput, type },
      ]);
      setSubcategoryInput('');
    }
  };

  const handleRemoveSubcategory = (index) => {
    setNewSubcategories(newSubcategories.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onSubmit({
      // Add your form data here
      subcategories: newSubcategories,
      image: imagePreview,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[600px] sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add'
              ? 'Add Category'
              : `Edit ${initialData?.isSubcategory ? 'Subcategory' : 'Category'}`}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                {initialData?.isSubcategory ? 'Subcategory' : 'Category'} Name
              </Label>
              <Input
                id="name"
                defaultValue={initialData?.name}
                placeholder={`Enter ${initialData?.isSubcategory ? 'subcategory' : 'category'} name`}
              />
            </div>
            <div className="grid gap-2">
              <Label>Update Image</Label>
              <div className="flex items-center justify-normal gap-4 rounded-lg border-2 border-dashed border-softPaleBlue p-4">
                <div className="relative h-28 w-32 rounded border-[2px] border-dashed border-x-softPaleBlue">
                  <img
                    alt="Category preview"
                    className="h-full w-full object-contain p-3"
                    src={imagePreview || ASSETS?.DASHBOARD?.IMG_PLACEHOLDER}
                  />
                </div>

                <div className="text-center">
                  <div className="flex text-sm text-muted-foreground">
                    <Label
                      htmlFor="file-upload"
                      className="relative flex cursor-pointer items-center gap-2 rounded-md font-semibold text-primary hover:text-primary/80"
                    >
                      <CloudUpload className="h-5 w-5 text-darkBlueText" />
                      <p className="text-sm font-medium text-darkBlueText">
                        Drop your File here or select click to{' '}
                        <span className="from-lightAqua via-coolSky to-deepOcean bg-gradient-to-r bg-clip-text text-transparent">
                          Browse File
                        </span>
                      </p>
                      <Input
                        id="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleImageUpload}
                        accept="image/*"
                      />
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            {mode === 'edit' && !initialData?.isSubcategory && (
              <div className="grid gap-2">
                <Label>Existing Subcategory</Label>
                <Select
                  defaultValue={initialData?.subcategories?.[0]?.id.toString()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {initialData?.subcategories?.map((sub) => (
                      <SelectItem key={sub.id} value={sub.id.toString()}>
                        {sub.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {initialData?.isSubcategory && (
              <div className="grid gap-2">
                <Label>Parent Category</Label>
                <Input
                  value={initialData.parentCategory?.name || ''}
                  disabled
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label>Status</Label>
              <Select defaultValue={initialData?.status || 'active'}>
                <SelectTrigger
                  className={`${initialData?.status === 'active' && '!bg-mintGreen'} ${initialData?.status === 'inactive' && '!bg-red-50'}`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="active"
                    className="text-sm font-semibold text-emeraldGreen"
                  >
                    Active
                  </SelectItem>
                  <SelectItem
                    value="inactive"
                    className="text-sm font-semibold text-red-600"
                  >
                    Inactive
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2 rounded-lg border-2 border-dashed border-softPaleBlue p-2">
              <Label>Add Subcategory</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter subcategory name"
                  value={subcategoryInput}
                  onChange={(e) => setSubcategoryInput(e.target.value)}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleAddSubCategory('sub')}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {newSubcategories.length > 0 && (
              <div className="grid gap-2">
                <Label>Added Subcategories</Label>
                <div className="space-y-2">
                  {newSubcategories.map((sub, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-2 rounded-md border p-2"
                    >
                      <span className="text-sm">
                        {sub.name}
                        <span className="ml-2 text-xs text-muted-foreground">
                          (
                          {sub.type === 'sub'
                            ? 'Subcategory'
                            : 'Sub-subcategory'}
                          )
                        </span>
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveSubcategory(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="w-full"
                size="sm"
                onClick={() => handleAddSubCategory('sub-sub')}
                disabled={!subcategoryInput.trim()}
              >
                Add Sub-Sub Category
              </Button>
              <Button
                variant="outline"
                className="w-full"
                size="sm"
                onClick={() => handleAddSubCategory('sub')}
                disabled={!subcategoryInput.trim()}
              >
                Add More Sub Category
              </Button>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-primary-gradient">
            {mode === 'add' ? 'Add' : 'Update'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;
