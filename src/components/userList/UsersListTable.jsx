import React, { useState } from 'react';
import {
  Plus,
  ArrowUp,
  Download,
  ArrowDown,
  ArrowUpDown,
  MessageSquare,
  MoreHorizontal,
  UserPlus,
  MessageSquareMore,
  FileDown,
  RotateCcw,
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
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import PlanSelect from './PlanSelect';
import { Calendar } from '../ui/calendar';
import StatusSelect from './StatusSelect';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../redux/slices/userSlice';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { APP_ROUTES } from '../../constants/routeConstants';
import { useNavigate } from 'react-router-dom';

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

const UsersListTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toDate, setToDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sortState, setSortState] = useState({ column: '', direction: '' });
  const [selectedFilters, setSelectedFilters] = useState({
    registerDate: '',
    language: '',
    verified: '',
    country: '',
    plan: '',
    status: '',
  });

  // Sorting function
  const handleSort = (column) => {
    setSortState((prev) => {
      const isAsc = prev.column === column && prev.direction === 'asc';
      return { column, direction: isAsc ? 'desc' : 'asc' };
    });
  };

  // Get sorting icon
  const getSortIcon = (column) => {
    if (sortState.column !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortState.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  // Sort users dynamically
  const sortedUsers = [...initialUsers].sort((a, b) => {
    if (!sortState.column) return 0;
    const { column, direction } = sortState;

    let valueA = a[column];
    let valueB = b[column];

    // Convert numeric values
    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    // Sorting logic
    if (direction === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  const handlePlanSelect = (plan) => {
    console.log('Selected plan:', plan);
  };

  const handleStatusSelect = (status) => {
    console.log('Selected status:', status);
  };

  return (
    <div className="space-y-4 rounded-xl bg-white p-6 shadow-soft-xl">
      {/* Search & Filters */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Users List</h2>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="text-sm !font-medium text-darkBlueText"
          >
            <FileDown className="!h-4 !w-4 text-darkBlueText" />
            Download
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="text-sm !font-medium text-darkBlueText"
          >
            <UserPlus className="!h-[18px] !w-[18px] text-darkBlueText" />
            Add User
          </Button>
          <Button
            size="sm"
            className="!bg-primary-gradient text-sm !font-medium text-white"
          >
            <MessageSquareMore className="!h-4 !w-4 text-white" />
            Send Message
          </Button>
        </div>
      </div>

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
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="To Date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
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
        <Table className="min-w-[1200px]">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  checked={selectedUsers.length === sortedUsers.length}
                  onChange={(e) =>
                    setSelectedUsers(
                      e.target.checked ? sortedUsers.map((u) => u.id) : []
                    )
                  }
                />
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('id')}
                >
                  User ID {getSortIcon('id')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('name')}
                >
                  Name {getSortIcon('name')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('email')}
                >
                  Email {getSortIcon('email')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('registerDate')}
                >
                  Register Date {getSortIcon('registerDate')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('country')}
                >
                  Country {getSortIcon('country')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('subscribers')}
                >
                  Subscribers {getSortIcon('subscribers')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => handleSort('status')}
                >
                  Status {getSortIcon('status')}
                </button>
              </TableHead>
              <TableHead className="w-12">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow
                key={user.id}
                onClick={() => {
                  navigate(APP_ROUTES.USER.USER_DETAILS);
                  dispatch(setSelectedUser(user));
                }}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={(e) =>
                      setSelectedUsers(
                        e.target.checked
                          ? [...selectedUsers, user.id]
                          : selectedUsers.filter((id) => id !== user.id)
                      )
                    }
                  />
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registerDate}</TableCell>
                <TableCell className="flex items-center gap-1">
                  <span
                    className={`flag-icon flag-icon-${user.flag.toLowerCase()}`}
                    style={{
                      fontSize: '1rem',
                      padding: '0.25rem',
                      borderRadius: '50%',
                    }}
                  ></span>
                  <span className="ml-2">{user.country}</span>
                </TableCell>
                <TableCell>{user.subscribers}</TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UsersListTable;
