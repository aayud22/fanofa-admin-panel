import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import EnhancedTable from '../ui/enhanced-table';
import {
  Ellipsis,
  Eye,
  OctagonAlert,
  RotateCcw,
  Search,
  Trash2,
} from 'lucide-react';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const mockTransactionalNotifications = [
  {
    'Row No.': 1,
    Label: 'Delete this Ad Soon',
    'Date Created': '4 Mar 2023',
    'Target Criteria': 'New User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '4 Mar 2023',
    Sent: 56,
    Tapped: 9,
  },
  {
    'Row No.': 2,
    Label: 'How many of these show up?',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 32,
    Tapped: 9,
  },
  {
    'Row No.': 3,
    Label: 'Please Update your Paln',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 32,
    Tapped: 9,
  },
  {
    'Row No.': 4,
    Label: 'Internet?',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 43,
    Tapped: 9,
  },
  {
    'Row No.': 5,
    Label: 'Please Update your Paln',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 23,
    Tapped: 7,
  },
  {
    'Row No.': 6,
    Label: 'Update Available',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 32,
    Tapped: 6,
  },
  {
    'Row No.': 7,
    Label: 'Please Update your Paln',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 44,
    Tapped: 10,
  },
  {
    'Row No.': 8,
    Label: 'Expiration',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 32,
    Tapped: 8,
  },
  {
    'Row No.': 9,
    Label: 'Status',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 3,
    Tapped: 4,
  },
  {
    'Row No.': 10,
    Label: 'Celebration',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 23,
    Tapped: 8,
  },
  {
    'Row No.': 11,
    Label: 'Celebration',
    'Date Created': '27 Jun 2024',
    'Target Criteria': 'XYZ User',
    'Created By': 'alma.lawson@example.com',
    'Send Date': '27 Jun 2024',
    Sent: 65,
    Tapped: 11,
  },
];

const TransactionalNotificationList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSendDate, setSelectedSendDate] = useState('');
  const [selectedCreatedUser, setSelectedCreatedUser] = useState('');
  const [selectedPublishDate, setSelectedPublishDate] = useState('');
  const [selectedTargetCriteria, setSelectedTargetCriteria] = useState('');
  const [isLoadingNotification, setIsLoadingNotification] = useState(false);

  useEffect(() => {
    setIsLoadingNotification(true);
    setTimeout(() => {
      setIsLoadingNotification(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'Row No.',
      label: 'Row No.',
      sortable: true,
    },
    {
      key: 'Label',
      label: 'Label',
      sortable: true,
    },
    {
      key: 'Date Created',
      label: 'Date Created',
      sortable: true,
    },
    {
      key: 'Target Criteria',
      label: 'Target Criteria',
      sortable: true,
    },
    {
      key: 'Created By',
      label: 'Created By',
      sortable: true,
    },
    {
      key: 'Send Date',
      label: 'Send Date',
      sortable: true,
    },
    {
      key: 'Sent',
      label: 'Sent',
      sortable: true,
    },
    {
      key: 'Tapped',
      label: 'Tapped',
      sortable: true,
    },
    {
      key: 'Actions',
      label: 'Actions',
      render: (_, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-max">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // viewStats(row.rowNo);
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View Stats
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // deactivateNotification(row.rowNo);
              }}
              className="flex items-center gap-2 text-yellow-600"
            >
              <OctagonAlert className="h-4 w-4" />
              Deactivate Notification
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // deleteNotification(row.rowNo);
              }}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              Delete Notification
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
      createdBy: selectedCreatedUser,
      sendDate: selectedSendDate,
      datePublished: selectedPublishDate,
      targetCriteria: selectedTargetCriteria,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSendDate('');
    setSelectedCreatedUser('');
    setSelectedPublishDate('');
    setSelectedTargetCriteria('');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              value={searchQuery}
              placeholder="Ad Id"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select
          value={selectedPublishDate}
          onValueChange={setSelectedPublishDate}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Date Published" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedCreatedUser}
          onValueChange={setSelectedCreatedUser}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Created By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="john">John</SelectItem>
            <SelectItem value="tiya">Tiya</SelectItem>
            <SelectItem value="raj">Raj</SelectItem>
            <SelectItem value="dev">Dev</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedTargetCriteria}
          onValueChange={setSelectedTargetCriteria}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Target Criteria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newUser">New User</SelectItem>
            <SelectItem value="xyzUser">XYZ User</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedSendDate} onValueChange={setSelectedSendDate}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Send Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="onyDay">Ony day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
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
          searchQuery={searchQuery}
          isLoading={isLoadingNotification}
          data={mockTransactionalNotifications}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default TransactionalNotificationList;
