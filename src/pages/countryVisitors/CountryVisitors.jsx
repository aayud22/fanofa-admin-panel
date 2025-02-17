import React, {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import WordMap from '../../components/countryVisitors/WordMap';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import VisitorsLists from '../../components/countryVisitors/VisitorsLists';
const CountryVisitors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs: [
          { label: 'Home', link: '/dashboard' },
          { label: 'User' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  return (
    <div>
      <WordMap />
      <VisitorsLists />
    </div>
  );
};

export default CountryVisitors;
