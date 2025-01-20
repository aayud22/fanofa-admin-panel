import React from 'react';
import { AgeRangeChart, GenderChart, TrafficChart } from '.';

const ageRangeData = [
  { range: 'Below 20', value: 45 },
  { range: '21-40', value: 30 },
  { range: '41-60', value: 60 },
  { range: '60+', value: 50 },
];

const GenderStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <GenderChart malePercentage={55} femalePercentage={45} />
      <AgeRangeChart data={ageRangeData} />
      <TrafficChart />
    </div>
  );
};

export default GenderStats;
