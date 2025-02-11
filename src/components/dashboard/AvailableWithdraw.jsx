import React from 'react';
import StatsCardGroup from '../common/StatsCardGroup';

const dashboardStats = [
  {
    title: 'Total User',
    value: '40,689',
    subValue: 'Till, Today',
    trend: { value: 10.0, isPositive: true },
  },
  {
    title: 'New Users',
    value: '6172',
    subValue: 'Last Week Ratio 3457',
    trend: { value: 3.0, isPositive: false },
  },
  {
    title: 'No. of banners',
    value: '1565k',
    subValue: 'Uploaded By 32k Users',
    trend: { value: 3.0, isPositive: true },
  },
  {
    title: 'No of Ads',
    value: '3,422',
    subValue: 'This Week',
    trend: { value: 3.0, isPositive: true },
  },
  {
    title: 'Blocked Account',
    value: '22',
    subValue: 'Restricted Accounts',
    trend: { value: 3.0, isPositive: true },
  },
];

const AvailableWithdraw = () => {
  return (
    <div className="shadow-soft-xl rounded-xl bg-white px-6 py-7">
      <StatsCardGroup stats={dashboardStats} />
    </div>
  );
};

export default AvailableWithdraw;
