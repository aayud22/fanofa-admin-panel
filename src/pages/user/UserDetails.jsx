import React, { useState } from 'react';
import UserProfile from '../../components/userList/UserProfile';
import AdsGeneralDetails from '../../components/userList/AdsGeneralDetails';
import PermissionsSection from '../../components/userList/PermissionsSection';
import UserAnalyticsTable from '../../components/userList/UserAnalyticsTable';
import UserSubscribersTable from '../../components/userList/UserSubscribersTable';

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState('subscribers');

  // Sample data - you may want to replace this with actual data from your API
  const subscribers = [
    {
      srNo: '01',
      name: 'Arrora gaur',
      accountLink: 'http://www.zoomit.com',
      email: 'tranthuy@gmail.com',
      country: 'IN',
      date: 'Oct 31, 2017',
      rating: 4,
      messageCount: 4,
      isSubscribed: true,
    },
  ];

  return (
    <div className="flex-1 p-6">
      <UserProfile />
      <div className="mt-6 grid gap-6">
        <AdsGeneralDetails />
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PermissionsSection />
          <UserAnalyticsTable />
        </div>
        <UserSubscribersTable 
          subscribers={subscribers}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default UserDetails;
