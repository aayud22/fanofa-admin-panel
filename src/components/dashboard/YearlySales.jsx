import React from 'react';
import SalesChart from './chart/SalesChart';
import MostVisitingAds from './MostVisitingAds';

const YearlySales = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[40%_58%]">
      <SalesChart />
      <MostVisitingAds />
    </div>
  );
};

export default YearlySales;
