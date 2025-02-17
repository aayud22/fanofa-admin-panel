import React, { useState, useEffect } from 'react';
import { Filter, Search, FileDown, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { APP_ROUTES } from '../../constants/routeConstants';
import { setSelectedChatUser } from '../../redux/slices/chatSlice';
import EnhancedTable from '../ui/enhanced-table';

const users = [
  {
    userId: '#62875',
    name: 'James Mullican',
    email: 'tranthuy@gmail.com',
    lastChat: 'Oct 31, 2017',
    adId: '#62875',
    country: 'Aland Islands',
    flag: 'AI',
    status: 'Active',
  },
  {
    userId: '#62875',
    name: 'Robert Bacins',
    email: 'manhhac@gmail.com',
    lastChat: 'Feb 28, 2018',
    adId: '#62875',
    country: 'India',
    flag: 'IN',
    status: 'Inactive',
  },
  {
    userId: '#62875',
    name: 'Bethany Jackson',
    email: 'nvt.nute@gmail.com',
    lastChat: 'Mar 6, 2018',
    adId: '#62875',
    country: 'America',
    flag: 'US',
    status: 'Active',
  },
];

const ChatList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    column: null,
    direction: null,
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    setTimeout(() => {
      setIsLoadingUsers(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'userId',
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
      key: 'lastChat',
      label: 'Last Chat on',
      sortable: true,
    },
    {
      key: 'adId',
      label: 'Ad Id',
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
          <span className={row.flag ? 'ml-2' : ''}>{row.country}</span>
        </div>
      ),
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
        <div
          className="relative flex cursor-pointer items-center justify-center gap-2"
          onClick={() => {
            dispatch(setSelectedChatUser(row));
            navigate(APP_ROUTES.CHAT.CHAT_DETAILS);
          }}
        >
          <MessageSquare className="h-6 w-6 text-mutedBlue" />
          <div className="absolute -top-1 right-3 h-3 w-3 rounded-full border-2 border-white bg-green-500"></div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-darkBlueText">
            {user?.selectedUser?.name}
          </h2>
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
              variant="outline"
              className="flex items-center gap-2 text-darkBlueText"
            >
              <FileDown className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={users}
          // searchQuery={searchQuery}
          isLoading={isLoadingUsers}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default ChatList;
