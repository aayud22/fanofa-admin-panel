import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Switch } from '../ui/switch';
import { Card } from '../ui/card';

const initialPermissions = [
  {
    id: 'ads',
    label: 'Add the another Ads',
    enabled: true,
  },
  {
    id: 'category',
    label: 'Chosen Category notifications',
    enabled: false,
  },
  {
    id: 'buyer',
    label: 'Buyer review notifications',
    enabled: true,
  },
  {
    id: 'rating',
    label: 'Rating reminders notifications',
    enabled: false,
  },
  {
    id: 'meetups',
    label: 'Meetups near you notifications',
    enabled: false,
  },
  {
    id: 'deals',
    label: 'New Deals notifications',
    enabled: true,
  },
  {
    id: 'launches',
    label: 'New launches and projects',
    enabled: true,
  },
  {
    id: 'product',
    label: 'Monthly product changes',
    enabled: false,
  },
  {
    id: 'subscribe',
    label: 'Subscribe to Account',
    enabled: false,
  },
  {
    id: 'email',
    label: 'Email notify when someone follows me',
    enabled: true,
  },
];

const PermissionsSection = () => {
  const [permissions, setPermissions] = useState(initialPermissions);

  const handleToggle = (id) => {
    setPermissions(
      permissions.map((permission) =>
        permission.id === id
          ? { ...permission, enabled: !permission.enabled }
          : permission
      )
    );
  };
  return (
    <Card>
      <div className="h-[465px] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-darkBlueText">
            Permissions
          </h3>
          <button className="rounded p-1 hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5 text-skyBlue" />
          </button>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <div className="grid gap-4">
            {permissions.map((permission) => (
              <div
                key={permission.id}
                className="flex items-center justify-between"
              >
                <label
                  htmlFor={permission.id}
                  className="text-sm text-darkBlueText"
                >
                  {permission.label}
                </label>
                <Switch
                  id={permission.id}
                  checked={permission.enabled}
                  onCheckedChange={() => handleToggle(permission.id)}
                  className="data-[state=checked]:bg-skyBlue"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PermissionsSection;
