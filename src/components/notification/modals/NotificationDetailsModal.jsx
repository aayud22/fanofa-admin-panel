import React from 'react';
import {
  setActiveTab,
  setActiveRqiTab,
  closeNotificationModal,
} from '../../../redux/slices/notificationSlice';
import { X, Edit, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent } from '../../ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';
import AllNotifications from '../AllNotifications';

const NotificationDetailsModal = () => {
  const { notification } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeNotificationModal());
  };

  const handleTabChange = (value) => {
    dispatch(setActiveTab(value));
  };

  const handleRqiTabChange = (value) => {
    dispatch(setActiveRqiTab(value));
  };

  return (
    <Dialog
      open={notification?.isNotificationModalOpen}
      onOpenChange={(open) => !open && handleClose()}
    >
      <DialogContent className="flex max-h-[90vh] flex-col overflow-y-auto p-0 sm:max-w-[425px] md:max-w-[600px] lg:max-w-[692px]">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-darkBlueText">
              Notification Detail
            </h2>
            <p className="flex items-center gap-1">
              <span className="text-sm font-normal text-gray-500">
                User Id:
              </span>
              <span className="font-bold text-deepIndigo">
                {notification?.selectedNotification?.UserId}
              </span>
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative h-auto w-full">
          <img
            alt="Notification_image"
            className="h-[232px] w-full rounded object-cover"
            src="https://s3-alpha-sig.figma.com/img/bf43/3a04/013944723ba5a67ae9c507ef51c0ce71?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=agmNHkk3MjfReC-8CIKhomwtIGK152nTFwh8i0ITy9vle5Y4iPr-EVC4UVAv7npREqvqp-LGJEPLo78yWWvwupshKHWkAm6si2euBIKIXM3e3M88P6qFnYwQp~zmBy3eb2ssYzkChuebQPf-thD~wtqxhtdEnI-rFas8SdxEdxBrKSpZK3a1jf5kW2qL5zLxwe~vrGUdXfYpr5AgTF5XQMW2vEClES5gzmE8Veb8Q~FLuoBXsLYixzGwvzqFlwwi4CLFD4O~pshZxS6wLHkwhUaJguik1fPUrf3FWsq-me4U6n0EMzt4jEJlRX~bKg-kiG9WZCCSIoIauMhvqHWM6Q__"
          />
          <div className="absolute right-4 top-4 flex gap-2">
            <button className="rounded-full bg-white p-3 shadow-md hover:bg-gray-100">
              <Edit className="h-5 w-5 text-darkBlueText" />
            </button>
            <button className="rounded-full bg-white p-3 shadow-md hover:bg-gray-100">
              <Trash2 className="h-5 w-5 text-darkBlueText" />
            </button>
          </div>
        </div>

        {/* Ad Details */}
        <div className="flex flex-wrap gap-4 p-4 pt-0 text-sm text-gray-600">
          <div>
            Ad Id:{' '}
            <span className="text-sm font-bold text-deepIndigo">
              {notification?.selectedNotification?.AdId || '-'}
            </span>
          </div>
          <div>
            <span className="text-sm font-normal">Category: </span>
            <span className="text-sm font-bold text-deepIndigo">
              {notification?.selectedNotification?.Category || '-'}
            </span>
          </div>
          <div>{notification?.selectedNotification?.Date || '-'}</div>
          <div className="flex items-center gap-1">
            {notification?.selectedNotification?.flag && (
              <span
                className={`flag-icon flag-icon-${notification?.selectedNotification?.flag?.toLowerCase()}`}
              />
            )}
            <span className="text-sm font-bold text-deepIndigo">
              {notification?.selectedNotification?.Country}
            </span>
          </div>
          <div>
            City :
            <span className="text-sm font-bold text-deepIndigo">
              {notification?.selectedNotification?.City}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <Tabs
            className="w-full"
            value={notification?.activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="flex w-full items-center justify-start rounded-none border-b border-gray-300 bg-none">
              {[
                { label: 'All Notifications', value: 'all' },
                { label: 'Deals & Offers', value: 'deals' },
                { label: 'RQI', value: 'rqi' },
              ]?.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`relative px-4 pb-2 text-lg font-medium !shadow-none transition-colors duration-200 ${
                    notification?.activeTab === tab?.value
                      ? 'font-bold text-deepIndigo'
                      : 'text-gray-500'
                  }`}
                >
                  {tab?.label}
                  {notification?.activeTab === tab.value && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-darkBlueText" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* <Tabs
            className="w-full"
            value={notification?.activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full max-w-md grid-cols-3 border-b">
              <TabsTrigger
                value="all"
                className={`pb-2 font-medium ${notification?.activeTab === 'all' ? 'border-b-2 border-darkBlueText text-darkBlueText' : 'text-gray-500'}`}
              >
                All Notifications
              </TabsTrigger>
              <TabsTrigger
                value="deals"
                className={`pb-2 font-medium ${notification?.activeTab === 'deals' ? 'border-b-2 border-darkBlueText text-darkBlueText' : 'text-gray-500'}`}
              >
                Deals & Offers
              </TabsTrigger>
              <TabsTrigger
                value="rqi"
                className={`pb-2 font-medium ${notification?.activeTab === 'rqi' ? 'border-b-2 border-darkBlueText text-darkBlueText' : 'text-gray-500'}`}
              >
                RQI
              </TabsTrigger>
            </TabsList>
          </Tabs> */}
        </div>

        {/* RQI Sub-tabs */}
        {notification?.activeTab === 'rqi' && (
          <div className="mt-4 flex gap-2 px-4">
            <button
              onClick={() => handleRqiTabChange('sent')}
              className={`rounded-md px-6 py-2 ${notification?.activeRqiTab === 'sent' ? 'bg-coolSky text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Sent RQI
            </button>
            <button
              onClick={() => handleRqiTabChange('received')}
              className={`rounded-md px-6 py-2 ${notification?.activeRqiTab === 'received' ? 'bg-coolSky text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              Received RQI
            </button>
          </div>
        )}

        {/* Notification List */}
        <div className="flex-1 p-4">
          <AllNotifications
            activeTab={notification?.activeTab}
            activeRqiTab={notification?.activeRqiTab}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDetailsModal;
