import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubscribersTable from '../../components/userList/SubscribersTable';

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

  return (
    <SubscribersTable
      isFullView={isFullView}
      activeTab={activeTab}
      subscribers={subscribers}
      onTabChange={setActiveTab}
    />
  );
};

export default SubscribersPage;
