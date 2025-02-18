import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import UserProfile from '../../components/userList/UserProfile';
import { MessageSquareMore, MoreHorizontal, Star } from 'lucide-react';
import SubscribersTable from '../../components/userList/SubscribersTable';
import AdsGeneralDetails from '../../components/userList/AdsGeneralDetails';
import PermissionsSection from '../../components/userList/PermissionsSection';
import UserAnalyticsTable from '../../components/userList/UserAnalyticsTable';

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState('subscribers');

  const subscribers = [
    {
      srNo: '01',
      name: 'Arrora gaur',
      accountLink: 'http://www.zoomit.com',
      email: 'tranthuy@gmail.com',
      country: 'IN',
      date: 'Oct 31, 2017',
      rating: 4,
      messageCount: 4,
      isSubscribed: true,
    },
    {
      srNo: '02',
      name: 'James Mullican',
      accountLink: 'http://www.codehow.com',
      email: 'manhhaac@gmail.com',
      country: 'BE',
      date: 'Feb 28, 2018',
      rating: 4,
      messageCount: 6,
      isSubscribed: true,
    },
    {
      srNo: '03',
      name: 'Robert Bacins',
      accountLink: 'http://www.zencorporation.com',
      email: 'rvt.nxte@gmail.com',
      country: 'IE',
      date: 'Mar 6, 2018',
      rating: 4,
      messageCount: 9,
      isSubscribed: false,
    },
  ];

  const columns = [
    {
      key: 'srNo',
      label: 'Sr No.',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'accountLink',
      label: 'Account Link',
      sortable: true,
      render: (value, row) => (
        <a
          className="transition-colors duration-300 hover:text-blue-700 hover:underline"
          href={row.accountLink}
          target="_blank"
          rel="noreferrer"
        >
          {row.accountLink}
        </a>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'country',
      label: 'Country',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          {row.country && (
            <span
              className={`flag-icon flag-icon-${row.country.toLowerCase()}`}
            />
          )}
        </div>
      ),
    },
    {
      key: 'date',
      label: 'Subscribed Date',
      sortable: true,
    },
    {
      key: 'messageCount',
      label: 'Activity',
      sortable: true,
      render: (_, row) =>
        (row.rating || row.messageCount) && (
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <p className="text-sm font-medium text-darkBlueText">
                {row.rating || 0}
              </p>
            </div>           
          </div>
        ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="flex-1 p-6">
      <UserProfile />
      <div className="mt-6 grid gap-6">
        <AdsGeneralDetails />
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PermissionsSection />
          <UserAnalyticsTable />
        </div>
        <SubscribersTable
          columns={columns}
          isFullView={false}
          activeTab={activeTab}
          subscribers={subscribers}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default UserDetails;
