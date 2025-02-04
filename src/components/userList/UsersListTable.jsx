import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Download,
  MessageSquare,
  MoreHorizontal,
  Plus,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from 'lucide-react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';

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

  return (
    <div className="space-y-4 rounded-xl bg-white p-6 shadow-soft-xl">
      {/* Search & Filters */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Users List</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
          <Button size="sm">
            <MessageSquare className="mr-2 h-4 w-4" />
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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              Plan
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-4">
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">
                  Personal
                </Button>
                <Button variant="outline" className="w-full">
                  Personal Plus
                </Button>
                <Button variant="outline" className="w-full">
                  Business
                </Button>
                <Button variant="outline" className="w-full">
                  Individual
                </Button>
                <Button variant="outline" className="col-span-2 w-full">
                  Business Plus
                </Button>
              </div>
              <p className="text-sm text-gray-500">*You can choose plan</p>
              <Button className="mt-2">Apply Now</Button>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              Status
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="w-full">
                  Active
                </Button>
                <Button variant="outline" className="w-full">
                  InActive
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="w-full">
                  Blocked
                </Button>
                <Button variant="outline" className="w-full">
                  Deleted
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                *You can choose multiple statuses
              </p>
              <Button className="mt-2">Apply Now</Button>
            </div>
          </PopoverContent>
        </Popover>
        {/* <Select defaultValue="status">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Status</SelectItem>
          </SelectContent>
        </Select> */}
        <Button>Search</Button>
        <Button variant="outline" className="text-red-500">
          Reset Filter
        </Button>
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
              <TableRow key={user.id}>
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
