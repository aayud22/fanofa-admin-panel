import React, { useState, useEffect } from 'react';
import {
  UserPlus,
  FileDown,
  RotateCcw,
  MoreHorizontal,
  MessageSquareMore,
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';
import PlanSelect from './PlanSelect';
import { Calendar } from '../ui/calendar';
import StatusSelect from './StatusSelect';
import AddUserModal from './AddUserModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from '../ui/enhanced-table';
import { APP_ROUTES } from '../../constants/routeConstants';
import { setSelectedUser } from '../../redux/slices/userSlice';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

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

const UsersListTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

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
    console.log('Selected plan:', plan);
  };

  const handleStatusSelect = (status) => {
    console.log('Selected status:', status);
  };

  const handleRowClick = (user) => {
    navigate(APP_ROUTES.USER.USER_DETAILS);
    dispatch(setSelectedUser(user));
  };

  const handleSelectionChange = (selectedIds) => {
    setSelectedUserIds(selectedIds);
  };

  return (
    <div className="space-y-4 rounded-xl bg-white p-6 shadow-soft-xl">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4">
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="min-w-[200px] flex-1">
            <Input placeholder="Search User ID / Name / Email" />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[180px]">
                Register Date
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] p-4">
              <div className="space-y-4">
                {/* Calendar */}
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-lg border"
                />

                <p className="text-sm text-gray-500">
                  *You can choose multiple dates
                </p>

                {/* Date Inputs */}
                <div className="flex flex-col space-y-2">
                  <Input
                    type="text"
                    placeholder="From Date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Apply Now</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Select defaultValue="english">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="verified">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Verified" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="verified">Verified</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="country">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="country">Country</SelectItem>
            </SelectContent>
          </Select>
          <PlanSelect onPlanSelect={handlePlanSelect} />
          <StatusSelect onStatusSelect={handleStatusSelect} />
          <Button className="bg-primary-gradient text-white">Search</Button>
          <div className="group flex cursor-pointer items-center gap-[3px] text-xs font-semibold text-red-500 transition-all hover:text-red-600 hover:underline">
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
  );
};

export default UsersListTable;
