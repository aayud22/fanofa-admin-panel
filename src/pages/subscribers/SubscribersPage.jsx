import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { MoreHorizontal, Star } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import SubscribersTable from '../../components/userList/SubscribersTable';

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

const SubscribersPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('subscribers');
  const isFullView = location.pathname === '/subscribers/all';

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
            <DropdownMenuItem
              onClick={(event) => {
                event.stopPropagation();
                navigate(APP_ROUTES?.SUBSCRIBERS?.MY_SUBSCRIBERS);
              }}
            >
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <SubscribersTable
      columns={columns}
      activeTab={activeTab}
      isFullView={isFullView}
      subscribers={subscribers}
      onTabChange={setActiveTab}
    />
  );
};

export default SubscribersPage;
