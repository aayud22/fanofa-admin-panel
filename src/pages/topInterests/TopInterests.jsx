import React from 'react';
import TopCategories from '../../components/topInterests/table/TopCategories';
import InterestGenderAgeChart from '../../components/topInterests/chart/GenderAndAge';
import TopInterestCountry from '../../components/topInterests/table/TopInterestCountry';

const TopInterests = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-darkBlueText">
        Top Interests
      </h1>

      <TopCategories />
      <InterestGenderAgeChart />

      <div>
        <TopInterestCountry />
      </div>
    </div>
  );
};

export default TopInterests;
