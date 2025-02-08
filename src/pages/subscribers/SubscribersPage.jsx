import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubscribersFullView from '../../components/userList/SubscribersFullView';
import UserSubscribersTable from '../../components/userList/UserSubscribersTable';

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

const SubscribersPage = () => {
  const [activeTab, setActiveTab] = useState('subscribers');
  const location = useLocation();
  const isFullView = location.pathname === '/subscribers/all';

  return isFullView ? (
    <SubscribersFullView
      subscribers={subscribers}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  ) : (
    <UserSubscribersTable
      subscribers={subscribers}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    />
  );
};

export default SubscribersPage;
