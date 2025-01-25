import React from 'react';
import TopCategories from '../../components/topInterests/table/TopCategories';
import InterestGenderAgeChart from '../../components/topInterests/chart/GenderAndAge';

const TopInterests = () => {
  return (
    <div className="p-5">
      <h1 className="mb-4 text-xl font-bold text-darkBlueText">
        Top Interests
      </h1>

      <div className="my-3.5 grid gap-3.5 pr-3 md:grid-cols-[55%_45%]">
        <TopCategories />
        <InterestGenderAgeChart />
      </div>
    </div>
  );
};

export default TopInterests;
