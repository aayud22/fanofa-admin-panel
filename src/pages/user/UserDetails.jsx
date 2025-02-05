import React from 'react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Briefcase, Car, Home, ShoppingBag } from 'lucide-react';

const UserDetails = () => {
  return (
    <div className="rounded-lg bg-white p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Arrora gaur</h2>
              <Badge variant="secondary">Business Plus</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Id: 2736426948754845
            </p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" className="h-8">
                Send Message
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                View Chats
              </Button>
              <Button size="sm" variant="outline" className="h-8">
                Delete account
              </Button>
              <Button
                size="sm"
                className="h-8 bg-[#735dff] hover:bg-[#735dff]/90"
              >
                Deactivate account
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-4 font-semibold">General Information</h3>
        <div className="space-y-6">
          <div>
            <h4 className="mb-2 text-sm font-medium">Interests</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
