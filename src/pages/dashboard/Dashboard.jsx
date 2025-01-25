import React from 'react';
import {
  TopUser,
  GenderStats,
  AvailableWithdraw,
  VisitorsByCountries,
} from '../../components/dashboard';
import YearlySales from '../../components/dashboard/YearlySales';
import CategoryList from '../../components/dashboard/CategoryList';
import InterestsAndPlans from '../../components/dashboard/InterestsAndPlans';
import ConversionAndSource from '../../components/dashboard/ConversionAndSource';

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
      <InterestsAndPlans />
      <YearlySales />
      <ConversionAndSource />
    </div>
  );
};

export default Dashboard;
