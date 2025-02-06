import React from 'react';
import { Crown, Pencil } from 'lucide-react';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import AdsGeneralDetails from '../../components/userList/AdsGeneralDetails';
import PermissionsSection from '../../components/userList/PermissionsSection';
import UserAnalyticsTable from '../../components/userList/UserAnalyticsTable';
import { Card } from '../../components/ui/card';
import UserSubscribersTable from '../../components/userList/UserSubscribersTable';

const UserDetails = () => {
  return (
    <div className="flex-1 p-6">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <img
            alt="Profile"
            className="h-20 w-20 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-darkBlueText">
                Arrora gaur
              </h2>
              <Badge
                variant="secondary"
                className="gap-1 !rounded-2xl !bg-brightOrange/[10%] text-base font-medium !text-warmAmber"
              >
                <Crown className="!h-5 !w-5 !text-brightOrange" />
                Business Plus
              </Badge>
            </div>
            <p className="mt-1 text-base font-normal text-darkBlueText">
              Id: 2736426948754845
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                <Pencil className="!h-4 !w-4" />
                Send Message
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                View Chats
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-base font-semibold text-darkBlueText"
              >
                Delete account
              </Button>
              <Button
                size="sm"
                className="h-8 bg-primary-gradient text-base font-semibold text-white"
              >
                Deactivate account
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-6">
        <AdsGeneralDetails />
        <div className="container mx-auto mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PermissionsSection />
          <UserAnalyticsTable />
        </div>
        <UserSubscribersTable />
      </div>
    </div>
  );
};

export default UserDetails;
