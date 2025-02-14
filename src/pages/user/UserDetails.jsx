import React, { useState } from 'react';
import UserProfile from '../../components/userList/UserProfile';
import AdsGeneralDetails from '../../components/userList/AdsGeneralDetails';
import PermissionsSection from '../../components/userList/PermissionsSection';
import UserAnalyticsTable from '../../components/userList/UserAnalyticsTable';
import UserSubscribersTable from '../../components/userList/UserSubscribersTable';
import SubscribersTable from '../../components/userList/SubscribersTable';

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
    {
      srNo: '02',
      name: 'James Mullican',
      accountLink: 'http://www.codehow.com',
      email: 'manhhaac@gmail.com',
      country: 'BE',
      date: 'Feb 28, 2018',
      rating: 4,
      messageCount: 6,
      isSubscribed: true,
    },
    {
      srNo: '03',
      name: 'Robert Bacins',
      accountLink: 'http://www.zencorporation.com',
      email: 'rvt.nxte@gmail.com',
      country: 'IE',
      date: 'Mar 6, 2018',
      rating: 4,
      messageCount: 9,
      isSubscribed: false,
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
        <SubscribersTable
          isFullView={false}
          activeTab={activeTab}
          subscribers={subscribers}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default UserDetails;
