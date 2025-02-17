import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import TopCategories from '../../components/topInterests/table/TopCategories';
import InterestGenderAgeChart from '../../components/topInterests/chart/GenderAndAge';
import TopInterestCountry from '../../components/topInterests/table/TopInterestCountry';

const TopInterests = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs: [{ label: 'Home', link: '/dashboard' }, { label: 'Top Interests' }],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-xl font-bold text-darkBlueText">Top Interests</h1>
      <TopCategories />
      <InterestGenderAgeChart />
      <div>
        <TopInterestCountry />
      </div>
    </div>
  );
};

export default TopInterests;
