import React from 'react';
import UserProfile from '../../components/userList/UserProfile';
import AdsGeneralDetails from '../../components/userList/AdsGeneralDetails';
import PermissionsSection from '../../components/userList/PermissionsSection';
import UserAnalyticsTable from '../../components/userList/UserAnalyticsTable';
import UserSubscribersTable from '../../components/userList/UserSubscribersTable';

const UserDetails = () => {
  return (
    <div className="flex-1 p-6">
      <UserProfile />
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
