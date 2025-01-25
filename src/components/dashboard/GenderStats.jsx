import React from 'react';
import { AgeRangeChart, GenderChart, TrafficChart } from '.';

const GenderStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <GenderChart malePercentage={55} femalePercentage={45} />
      <AgeRangeChart />
      <TrafficChart />
    </div>
  );
};

export default GenderStats;
