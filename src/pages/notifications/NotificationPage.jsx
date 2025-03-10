import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card } from '../../components/ui/card';
import { FileDown, Pencil } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import StatsCardGroup from '../../components/common/StatsCardGroup';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import NotificationList from '../../components/notification/NotificationList';
import NotificationComposeModal from '../../components/notification/modals/NotificationComposeModal';
import TransactionalNotificationList from '../../components/notification/TransactionalNotificationList';

const notificationStats = [
  {
    title: 'Total Notification',
    value: '40,689',
    trend: { value: 100, isPositive: true },
  },
  {
    title: 'Ad Notification ',
    value: '23,533',
    trend: { value: 30, isPositive: false },
  },
  {
    title: 'Transactional Notification',
    value: '1565k',
    trend: { value: 320, isPositive: true },
  },
  {
    title: 'Deals Posted',
    value: '3422',
    trend: { value: 320, isPositive: true },
  },
];

const NotificationPage = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('adNotification');
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Notification List', link: APP_ROUTES.ADS.BASE },
      { label: 'Ad Notification' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Notification',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="space-y-6 p-4 md:p-6">
      <StatsCardGroup
        stats={notificationStats}
        className="grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
      />

      <Card className="p-4 md:p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-darkBlueText">
            Notification List (47783)
          </h2>
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-medium text-darkBlueText sm:w-auto md:text-sm"
            >
              <FileDown className="h-4 w-4" />
              Download
            </Button>
            <Button
              size="sm"
              onClick={() => setIsComposeModalOpen(true)}
              className="w-full bg-primary-gradient text-xs text-white sm:w-auto md:text-sm"
            >
              <Pencil className="h-4 w-4" />
              Compose New
            </Button>
          </div>
        </div>

        <Tabs
          className="mb-5 w-[400px]"
          defaultValue="adNotification"
          onValueChange={(event) => setActiveTab(event)}
        >
          <TabsList className="custom-tabs grid w-full grid-cols-2">
            <TabsTrigger value="adNotification">Ad Notification</TabsTrigger>
            <TabsTrigger value="transactionNotification">
              Transactional Notification
            </TabsTrigger>
          </TabsList>

          {/* Add custom styles for the active tab */}
          <style jsx global>{`
            .custom-tabs [data-state='active'] {
              background: linear-gradient(180deg, #3eb1e0 0%, #0e77cc 100%);
              color: white;
            }
          `}</style>
        </Tabs>

        {activeTab === 'adNotification' ? (
          <NotificationList />
        ) : (
          <TransactionalNotificationList />
        )}
      </Card>

      {isComposeModalOpen && (
        <NotificationComposeModal
          open={isComposeModalOpen}
          setOpen={setIsComposeModalOpen}
        />
      )}
    </div>
  );
};

export default NotificationPage;
