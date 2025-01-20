import React from 'react';
import {
  TopUser,
  GenderStats,
  AvailableWithdraw,
  VisitorsByCountries,
} from '../../components/dashboard';

const Dashboard = () => {
  return (
    <div>
      <AvailableWithdraw />
      <div className="my-3.5 grid gap-3.5 md:grid-cols-[70%_30%] pr-3">
        <TopUser />
        <VisitorsByCountries />
      </div>
      <GenderStats />
    </div>
  );
};

export default Dashboard;
