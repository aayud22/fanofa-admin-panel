import React, { useEffect } from 'react';
import {
  TopUser,
  GenderStats,
  AvailableWithdraw,
  VisitorsByCountries,
} from '../../components/dashboard';
import { useDispatch } from 'react-redux';
import YearlySales from '../../components/dashboard/YearlySales';
import CategoryList from '../../components/dashboard/CategoryList';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import InterestsAndPlans from '../../components/dashboard/InterestsAndPlans';
import ConversionAndSource from '../../components/dashboard/ConversionAndSource';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Dashboard',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          { label: 'Dashboard' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

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
