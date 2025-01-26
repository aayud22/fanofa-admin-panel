import React from 'react';
import InterestAgeChart from './InterestAgeChart';
import InterestGenderChart from './InterestGenderChart';

const InterestGenderAgeChart = () => {
  return (
    <div className="mb-4 grid gap-3.5 pr-3 md:grid-cols-[50%_50%]">
      <InterestGenderChart />
      <InterestAgeChart />
    </div>
  );
};

export default InterestGenderAgeChart;
