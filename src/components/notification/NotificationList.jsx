import React, { useEffect, useState } from 'react';
import {
  Eye,
  Search,
  Trash2,
  Ellipsis,
  RotateCcw,
  CheckCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../ui/dropdown-menu';
import {
  openNotificationModal,
  setSelectedNotification,
} from '../../redux/slices/notificationSlice';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import EnhancedTable from '../ui/enhanced-table';
import NotificationDetailsModal from './modals/NotificationDetailsModal';

const mockNotification = [
  {
    ID: '01',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Oct 31, 2017',
    Category: 'Vehicles',
    Country: 'Åland Islands',
    flag: 'AX',
    City: 'City Name',
    'Expiry Date': '4 Mar 2023',
    Status: 'Read',
  },
  {
    ID: '02',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Feb 28, 2018',
    Category: 'Mobile',
    Country: 'Iceland',
    flag: 'IS',
    City: 'City Name',
    'Expiry Date': 'Expired',
    Status: 'Delivered',
  },
  {
    ID: '03',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Mar 6, 2018',
    Category: 'Buy & Sell',
    Country: 'Serbia',
    flag: 'RS',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Unread',
  },
  {
    ID: '04',
    UserId: '#8575',
    AdId: '#8575',
    Duration: 'One Day',
    Date: 'May 29, 2017',
    Category: 'Real Estate',
    Country: 'Poland',
    flag: 'PL',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Unread',
  },
  {
    ID: '05',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Mar 13, 2014',
    Category: 'Real Estate',
    Country: 'Réunion',
    flag: 'RE',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Active',
  },
  {
    ID: '06',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Feb 11, 2014',
    Category: 'Jobs',
    Country: 'Greece',
    flag: 'GR',
    City: 'City Name',
    'Expiry Date': 'Expired',
    Status: 'Active',
  },
  {
    ID: '07',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Aug 7, 2017',
    Category: 'Community',
    Country: 'Curaçao',
    flag: 'CW',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Deleted',
  },
  {
    ID: '08',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'May 20, 2015',
    Category: 'Pets',
    Country: 'Sao Tome',
    flag: 'ST',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Active',
  },
  {
    ID: '09',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Mar 23, 2013',
    Category: 'Deals / offers',
    Country: 'Saudi Arabia',
    flag: 'SA',
    City: 'City Name',
    'Expiry Date': 'Expired',
    Status: 'Active',
  },
  {
    ID: '10',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'May 12, 2019',
    Category: 'Pets',
    Country: 'Israel',
    flag: 'IL',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Inactive',
  },
  {
    ID: '11',
    UserId: '#62875',
    AdId: '#62875',
    Duration: 'One Day',
    Date: 'Jul 14, 2015',
    Category: 'Real Estate',
    Country: 'Viet Nam',
    flag: 'VN',
    City: 'City Name',
    'Expiry Date': '27 Jun 2024',
    Status: 'Closed',
  },
];

const NotificationList = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('date');
  const [selectedCountry, setSelectedCountry] = useState('country');
  const [selectedAdStatus, setSelectedAdStatus] = useState('status');
  const [selectedDuration, setSelectedDuration] = useState('month');
  const [selectedAdminStatus, setSelectedAdminStatus] = useState('admin');
  const [isLoadingNotification, setIsLoadingNotification] = useState(false);

  useEffect(() => {
    setIsLoadingNotification(true);
    setTimeout(() => {
      setIsLoadingNotification(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'ID',
      label: 'Notification ID',
      sortable: true,
    },
    {
      key: 'UserId',
      label: 'User Id',
      sortable: true,
    },
    {
      key: 'AdId',
      label: 'Ad Id',
      sortable: true,
    },
    {
      key: 'Duration',
      label: 'Duration',
      sortable: false,
    },
    {
      key: 'Date',
      label: 'Published Date',
      sortable: true,
    },
    {
      key: 'country',
      label: 'Country',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          {row.flag && (
            <span className={`flag-icon flag-icon-${row.flag.toLowerCase()}`} />
          )}
          <span className={row.flag ? 'ml-2' : ''}>{row.Country}</span>
        </div>
      ),
    },
    {
      key: 'City',
      label: 'City',
      sortable: true,
    },
    {
      key: 'Expiry Date',
      label: 'Expires On',
      sortable: true,
    },
    {
      key: 'Status',
      label: 'Status',
      sortable: true,
      render: (value) => {
        const priorityStyles = {
          Delivered: 'bg-red-100 text-red-600',
          Inactive: 'bg-red-100 text-red-600',
          Deleted: 'bg-red-100 text-red-600',
          Unread: 'bg-yellow-100 text-yellow-700',
          Read: 'bg-green-100 text-green-600',
          Active: 'bg-green-100 text-green-600',
        };

        return (
          <span
            className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${priorityStyles[value] || 'bg-gray-50 text-gray-700'}`}
          >
            {value}
          </span>
        );
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setSelectedNotification(row));
                dispatch(openNotificationModal());
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // markAsRead(row.notificationId);
              }}
              className="flex items-center gap-2 text-green-600"
            >
              <CheckCircle className="h-4 w-4" />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // deleteNotification(row.notificationId);
              }}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const handleSearch = () => {
    // Implement search with all filters
    const filters = {
      searchQuery,
      duration: selectedDuration,
      datePublished: selectedDate,
      country: selectedCountry,
      adminStatus: selectedAdminStatus,
      adStatus: selectedAdStatus,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDuration('month');
    setSelectedDate('date');
    setSelectedCountry('country');
    setSelectedAdminStatus('admin');
    setSelectedAdStatus('status');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Notification Id / User Id / Ad Id "
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Date Published" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedDuration} onValueChange={setSelectedDuration}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oneDay">One Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="country">Country</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedAdminStatus}
          onValueChange={setSelectedAdminStatus}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Admin Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin Status</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <Button
            className="h-10 bg-primary-gradient px-6 text-white"
            onClick={handleSearch}
          >
            Search
          </Button>
          <div
            className="group flex cursor-pointer items-center gap-[3px] text-xs font-semibold text-red-500 transition-all hover:text-red-600 hover:underline"
            onClick={resetFilters}
          >
            <RotateCcw className="h-4 w-4 group-hover:text-red-600" />
            Reset Filter
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={mockNotification}
          searchQuery={searchQuery}
          isLoading={isLoadingNotification}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>

      {notification?.isNotificationModalOpen && <NotificationDetailsModal />}
    </div>
  );
};

export default NotificationList;
