import React from 'react';
import {
  TopUser,
  GenderStats,
  AvailableWithdraw,
  VisitorsByCountries,
} from '../../components/dashboard';
import YearlySales from '../../components/dashboard/YearlySales';
import CategoryList from '../../components/dashboard/CategoryList';
import TopInterested from '../../components/dashboard/InterestsAndPlans';

const Dashboard = () => {
  return (
    <div>
      <AvailableWithdraw />
      <div className="my-3.5 grid gap-3.5 pr-3 md:grid-cols-[70%_30%]">
        <TopUser />
        <VisitorsByCountries />
      </div>
      <GenderStats />
      <CategoryList />
      <TopInterested />
      <YearlySales />

      <div> Conversion Rate</div>
    </div>
  );
};

export default Dashboard;
