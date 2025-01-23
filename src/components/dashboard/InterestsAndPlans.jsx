import React from 'react';
import ValuedPlans from './ValuedPlans';
import InterestsTable from './InterestsTable';

const InterestsAndPlans = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-[40%_60%]">
      <InterestsTable />
      <ValuedPlans />
    </div>
  );
};

export default InterestsAndPlans;
