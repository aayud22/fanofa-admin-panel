import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import EditFieldModal from './Modals/EditFieldModal';
import DeleteFieldModal from './Modals/DeleteFieldModal';

const AdvertisingForm = () => {
  const [showAddField, setShowAddField] = useState(false);
  const [newField, setNewField] = useState('');
  const [items, setItems] = useState([
    { id: '1', text: "I Just don't Like the Product", enabled: true },
    { id: '2', text: 'Bulling or unwanted contact', enabled: true },
    { id: '3', text: 'Suside, self-injury or eating disorders', enabled: true },
    { id: '4', text: 'Violence, hate or explotation', enabled: true },
    { id: '5', text: 'Selling or promoting restricted items', enabled: true },
    { id: '6', text: 'Nudity or sexual activity', enabled: true },
    { id: '7', text: 'Scam, fraud or spam', enabled: true },
    { id: '8', text: 'False Information', enabled: true },
    { id: '9', text: 'Fake Account', enabled: true },
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleToggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddField = () => {
    if (newField) {
      setItems([
        ...items,
        {
          id: Math.random().toString(36).substr(2, 9),
          text: newField,
          enabled: true,
        },
      ]);
      setNewField('');
      setShowAddField(false);
    }
  };

  const openEditModal = (item) => {
    setCurrentItem(item);
    setEditModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setCurrentItem(item);
    setDeleteModalOpen(true);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(
      items.map((item) =>
        item.id === updatedItem.id ? { ...item, text: updatedItem.label } : item
      )
    );
  };

  return (
    <div className="py-6">
      <h2 className="mb-6 text-xl font-semibold text-deepIndigo">
        Manage Ad Advertising
      </h2>
      <div className="grid gap-4">
        {items?.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex items-center justify-between p-4">
              <span className="text-base font-semibold text-deepIndigo">
                {item.text}
              </span>
              <div className="flex items-center gap-0.5">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openEditModal(item)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-9 w-9"
                  onClick={() => openDeleteModal(item)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Switch
                  checked={item.enabled}
                  onCheckedChange={() => handleToggle(item.id)}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {showAddField ? (
          <div className="grid gap-4 rounded-lg border bg-background p-4">
            <div>
              <Label>Advertising Issue</Label>
              <Input
                value={newField}
                autoFocus={true}
                placeholder="Enter advertising issue"
                onChange={(e) => setNewField(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                onClick={() => setShowAddField(false)}
                className="bg-gray-100 hover:bg-gray-200"
              >
                Cancel
              </Button>
              <Button onClick={handleAddField} className="bg-primary-gradient">
                Save
              </Button>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => setShowAddField(true)}
            className="w-fit bg-primary-gradient"
          >
            Add More Fields
          </Button>
        )}
      </div>

      {/* Edit Field Modal */}
      {currentItem && (
        <EditFieldModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onUpdate={handleUpdateItem}
          field={{
            id: currentItem.id,
            label: currentItem.text,
            placeholder: '',
            type: 'text',
          }}
        />
      )}

      {/* Delete Field Modal */}
      {currentItem && (
        <DeleteFieldModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onDelete={() => handleDelete(currentItem.id)}
          fieldName={currentItem.text}
        />
      )}
    </div>
  );
};

export default AdvertisingForm;
