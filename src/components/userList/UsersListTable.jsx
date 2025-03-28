import React, { useState, useEffect } from 'react';
import { RotateCcw, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import dayjs from 'dayjs';
import { Input } from '../ui/input';
import PlanSelect from './PlanSelect';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import StatusSelect from './StatusSelect';
import AddUserModal from './AddUserModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from '../ui/enhanced-table';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { APP_ROUTES } from '../../constants/routeConstants';
import { setSelectedUser } from '../../redux/slices/userSlice';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const initialUsers = [
  {
    id: '#52875',
    name: 'Arrora Gaur',
    email: 'tranthuy@gmail.com',
    registerDate: '2017-10-31',
    country: 'Åland Islands',
    flag: 'AQ',
    subscribers: 788,
    subscribed: 60,
    referrals: 0,
    earning: 0.0,
    chats: 8,
    adPosted: 23,
    plan: 'Personal Plus',
    status: 'Active',
  },
  {
    id: '#52876',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    registerDate: '2018-11-15',
    country: 'United States',
    subscribers: 1023,
    flag: 'US',
    subscribed: 75,
    referrals: 5,
    earning: 15.5,
    chats: 12,
    adPosted: 34,
    plan: 'Premium',
    status: 'Active',
  },
  {
    id: '#52877',
    name: 'Jane Smith',
    email: 'janesmith@yahoo.com',
    registerDate: '2019-03-22',
    country: 'Canada',
    flag: 'CA',
    subscribers: 567,
    subscribed: 48,
    referrals: 2,
    earning: 5.0,
    chats: 6,
    adPosted: 15,
    plan: 'Basic',
    status: 'Inactive',
  },
];

const columns = [
  {
    key: 'id',
    label: 'UserId',
    sortable: true,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'registerDate',
    label: 'Register Date',
    sortable: true,
  },
  {
    key: 'country',
    label: 'Country',
    sortable: true,
    render: (value, row) => (
      <div className="flex items-center">
        {row.flag && (
          <span
            className={`flag-icon flag-icon-${row.flag.toLowerCase()}`}
            style={{
              fontSize: '1rem',
              borderRadius: '100%',
            }}
          />
        )}
        <span className={row.flag ? 'ml-2' : ''}>{row.country}</span>
      </div>
    ),
  },
  {
    key: 'subscribers',
    label: 'Subscribers',
    sortable: true,
  },
  {
    key: 'subscribed',
    label: 'Subscribed',
    sortable: true,
  },
  {
    key: 'referrals',
    label: 'No. of Refers',
    sortable: true,
  },
  {
    key: 'earning',
    label: 'Total Earning',
    sortable: true,
    render: (value) => `$${value}`,
  },
  {
    key: 'chats',
    label: 'Chat',
    sortable: true,
  },
  {
    key: 'adPosted',
    label: 'Ad Posted',
    sortable: true,
  },
  {
    key: 'plan',
    label: 'Plan',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: (value) => {
      const statusStyles = {
        Active: 'bg-success-bg text-success-text',
        Inactive: 'bg-danger-bg text-danger-text',
        Pending: 'bg-yellow-50 text-yellow-700',
        Suspended: 'bg-orange-50 text-orange-700',
      };

      return (
        <span
          className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${statusStyles[value] || 'bg-gray-50 text-gray-700'}`}
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
        <DropdownMenuTrigger className="cursor-pointer">
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>View Profile</DropdownMenuItem>
          <DropdownMenuItem>Edit User</DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.5rem',
            backgroundColor: 'white',
          },
        },
      },
    },
  },
});

const UsersListTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toDate, setToDate] = useState(dayjs());
  const [fromDate, setFromDate] = useState(dayjs());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('country');
  const [isDatePopoverOpen, setIsDatePopoverOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [selectedVerification, setSelectedVerification] = useState('verified');

  useEffect(() => {
    setIsLoadingUsers(true);
    setTimeout(() => {
      setIsLoadingUsers(false);
    }, 1000);
  }, []);

  useEffect(() => {
    dispatch(
      setPageInfo({
        title: 'Manage Users',
        breadcrumbs: [
          { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
          { label: 'User', link: APP_ROUTES.USER.USER_LIST },
          { label: 'Users List ' },
        ],
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleRowClick = (user) => {
    navigate(APP_ROUTES.USER.USER_DETAILS);
    dispatch(setSelectedUser(user));
  };

  const handleSelectionChange = (selectedIds) => {
    setSelectedUserIds(selectedIds);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setFromDate(dayjs());
    setToDate(dayjs());
    setSelectedLanguage('english');
    setSelectedVerification('verified');
    setSelectedCountry('country');
    setSelectedPlan('');
    setSelectedStatus('');
    setSelectedDates([]);
  };

  const handleSearch = () => {
    // Implement search with all filters
    const filters = {
      searchQuery,
      dateRange: { fromDate, toDate },
      language: selectedLanguage,
      verification: selectedVerification,
      country: selectedCountry,
      plan: selectedPlan,
      status: selectedStatus,
    };
    console.log('Applying filters:', filters);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="space-y-4 rounded-xl bg-white p-6 shadow-soft-xl">
        {/* Search & Filters */}
        <div className="flex flex-col gap-4">
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="min-w-[200px] flex-1">
              <Input
                placeholder="Search User ID / Name / Email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Popover
                open={isDatePopoverOpen}
                onOpenChange={setIsDatePopoverOpen}
              >
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-[180px]">
                    {selectedDates
                      ? selectedDates?.format('YYYY-MM-DD')
                      : 'Register Date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px] p-4">
                  <div className="space-y-4">
                    <DatePicker
                      value={selectedDates}
                      onChange={(newDate) => setSelectedDates(dayjs(newDate))} // Ensure it's a Day.js object
                      format="YYYY-MM-DD"
                      sx={{ width: '100%' }}
                    />
                    <div className="mt-4 flex gap-3">
                      <button
                        className="flex-1 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() => setSelectedDates(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="flex-1 rounded-lg bg-primary-gradient py-2.5 text-sm font-medium text-white hover:bg-blue-600"
                        onClick={() => setIsDatePopoverOpen(false)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </LocalizationProvider>
            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedVerification}
              onValueChange={setSelectedVerification}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Verified" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="unverified">Unverified</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="country">All Countries</SelectItem>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
            <PlanSelect value={selectedPlan} onPlanSelect={handlePlanSelect} />
            <StatusSelect
              value={selectedStatus}
              onStatusSelect={handleStatusSelect}
            />
            <Button
              className="bg-primary-gradient text-white"
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

          {/* Table */}
          <div className="w-full overflow-x-auto rounded-lg border">
            <EnhancedTable
              pagination
              columns={columns}
              data={initialUsers}
              searchQuery={searchQuery}
              isLoading={isLoadingUsers}
              onRowClick={handleRowClick}
              onSelectionChange={handleSelectionChange}
            />
          </div>
          {isAddUserModalOpen && (
            <AddUserModal
              isOpen={isAddUserModalOpen}
              onClose={() => setIsAddUserModalOpen(false)}
            />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default UsersListTable;
