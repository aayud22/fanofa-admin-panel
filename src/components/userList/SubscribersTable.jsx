import React, { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from '../ui/enhanced-table';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTES } from '../../constants/routeConstants';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import { Search, Filter, MessageSquareMore, FileDown } from 'lucide-react';

const SubscribersTable = ({
  columns = [],
  subscribers = [],
  activeTab,
  onTabChange,
  isFullView = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [isLoadingSubscribers, setIsLoadingSubscribers] = useState(false);

  useEffect(() => {
    setIsLoadingSubscribers(true);
    setTimeout(() => {
      setIsLoadingSubscribers(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'User', link: APP_ROUTES.USER.USER_LIST },
      { label: 'Users List', link: APP_ROUTES.USER.USER_LIST },
      user?.selectedUser?.name && {
        label: user?.selectedUser?.name,
        link: APP_ROUTES.USER.USER_DETAILS,
      },
      isFullView && { label: 'My Subscribers' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Users',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const subscribersCount = subscribers?.filter(
    (sub) => sub.isSubscribed
  ).length;
  const subscribedAccountsCount = subscribers?.filter(
    (sub) => !sub.isSubscribed
  ).length;

  const filteredData = subscribers.filter((sub) =>
    activeTab === 'subscribers' ? sub.isSubscribed : !sub.isSubscribed
  );

  const handleRowClick = (user) => {
    navigate(APP_ROUTES.SUBSCRIBERS.MY_SUBSCRIBERS);
  };

  const handleSelectionChange = (selectedIds) => {
    setSelectedUserIds(selectedIds);
  };

  return (
    <Card className={`${isFullView ? 'p-6' : '!p-6'}`}>
      <div className="mb-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-darkBlueText">
              {isFullView ? 'All Subscribers' : 'Subscribers'}
            </h3>
            {!isFullView ? (
              <Button
                variant="link"
                className="h-auto p-0 text-xs font-medium text-darkBlueText underline"
                onClick={() => navigate(APP_ROUTES.SUBSCRIBERS.ALL)}
              >
                View All
              </Button>
            ) : (
              <Button className="bg-primary-gradient text-white hover:text-white">
                <MessageSquareMore className="!mt-0.5 !h-4 !w-4" />
                Send Message
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Tabs */}
          <div className="flex w-max gap-2 rounded-md border border-softPaleBlue bg-white p-1">
            <Button
              onClick={() => onTabChange('subscribers')}
              variant="ghost"
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                activeTab === 'subscribers'
                  ? '!bg-primary-gradient text-white hover:text-white'
                  : 'text-darkBlueText hover:text-darkBlueText'
              }`}
            >
              My Subscribers ({subscribersCount})
            </Button>
            <Button
              onClick={() => onTabChange('accounts')}
              variant="ghost"
              className={`rounded-md px-4 py-2 text-sm font-medium ${
                activeTab === 'accounts'
                  ? '!bg-primary-gradient text-white hover:text-white'
                  : 'text-darkBlueText hover:text-darkBlueText'
              }`}
            >
              Subscribed Accounts ({subscribedAccountsCount})
            </Button>
          </div>

          {/* Search, Filter, and Download */}
          {isFullView && (
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm text-darkBlueText placeholder:text-gray-400 focus:border-primary focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-darkBlueText"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-sm !font-medium text-darkBlueText"
              >
                <FileDown className="mr-2 !h-4 !w-4 text-darkBlueText" />
                Download
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={filteredData}
          onRowClick={handleRowClick}
          isLoading={isLoadingSubscribers}
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </Card>
  );
};

export default SubscribersTable;
