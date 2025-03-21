import React, { useEffect, useState } from 'react';
import {
  Eye,
  Search,
  Trash2,
  Ellipsis,
  FileDown,
  RotateCcw,
} from 'lucide-react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../components/ui/select';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import EnhancedTable from '../../components/ui/enhanced-table';
import StatsCardGroup from '../../components/common/StatsCardGroup';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const mockStats = [
  {
    title: 'Total Enquiries',
    value: '40,689',
  },
  {
    title: 'Pending',
    value: '23,533',
  },
  {
    title: 'Resolved',
    value: '1565k',
  },
  {
    title: 'In Progress',
    value: '3422',
  },
];

const mockContactUsList = [
  {
    flag: 'AI',
    Status: 'Resolved',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Country: 'Åland Islands',
    Email: 'tranthuy.@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Oct 31, 2017',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'AQ',
    Status: 'Pending',
    Country: 'Iceland',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'manhhac@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Feb 28, 2018',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'RS',
    Status: 'Resolved',
    Country: 'Serbia',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'nvt.nute@gmail.com',
    'Submitted Date': 'Mar 6, 2018',
    Subject: 'Lorem ipsum dolor sit',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'PL',
    Country: 'Poland',
    'Admin ID': '#234234',
    Status: 'In Progress',
    'Enquiry ID': '#234234',
    Email: 'binhan628@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'May 29, 2017',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'RE',
    Status: 'Resolved',
    Country: 'Réunion',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'ckctm12@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Mar 13, 2014',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'GR',
    Status: 'Resolved',
    Country: 'Greece',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'dangh@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Feb 11, 2014',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'CW',
    Status: 'Pending',
    Country: 'Curaçao',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'trungkiensp@gmail.com',
    'Submitted Date': 'Aug 7, 2017',
    Subject: 'Lorem ipsum dolor sit',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'ST',
    Status: 'Pending',
    'Admin ID': '#234234',
    Country: 'Sao Tome',
    'Enquiry ID': '#234234',
    Email: 'thuhang@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'May 20, 2015',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'SA',
    Status: 'Pending',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Country: 'Saudi Arabia',
    Email: 'manhhachk@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Mar 23, 2013',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'IL',
    Status: 'Resolved',
    Country: 'Israel',
    'Admin ID': '#234234',
    'Enquiry ID': '#234234',
    Email: 'vuhaithuong@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'May 12, 2019',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    flag: 'VN',
    Status: 'Pending',
    'Admin ID': '#62875',
    'Enquiry ID': '#62875',
    Country: 'Viet Nam',
    Email: 'tienlapspk@gmail.com',
    Subject: 'Lorem ipsum dolor sit',
    'Submitted Date': 'Jul 14, 2015',
    Message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const ContactUsList = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoadingContactList, setIsLoadingContactList] = useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Enquiry', link: '#' },
      { label: 'Contact Us List' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Enquiry',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setIsLoadingContactList(true);
    setTimeout(() => {
      setIsLoadingContactList(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'Enquiry ID',
      label: 'Enquiry ID',
      sortable: true,
    },
    {
      key: 'Email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'Subject',
      label: 'Subject',
      sortable: true,
    },
    {
      key: 'Message',
      label: 'Message',
      sortable: false,
    },
    {
      key: 'Country',
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
      key: 'Submitted Date',
      label: 'Submitted Date',
      sortable: true,
    },
    {
      key: 'Admin ID',
      label: 'Admin ID',
      sortable: true,
    },
    {
      key: 'Status',
      label: 'Status',
      sortable: true,
      render: (value) => {
        const statusStyles = {
          Resolved: 'bg-success-bg text-success-text',
          'In Progress': 'bg-yellow-50 text-yellow-700',
          Pending: 'bg-blue-50 text-blue-700',
        };

        return (
          <span
            className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${
              statusStyles[value] || 'bg-gray-50 text-gray-700'
            }`}
          >
            {value}
          </span>
        );
      },
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
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem
              //   onClick={(e) => {
              //     e.stopPropagation();
              //     handleRowClick(row);
              //   }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View Enquiry
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                // openDeleteModal(row.enquiryId);
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
      date: selectedDate,
      country: selectedCountry,
      status: selectedStatus,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDate('');
    setSelectedCountry('');
    setSelectedStatus('');
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      <StatsCardGroup
        stats={mockStats}
        className="lg:grid-cols-3 xl:grid-cols-3"
      />

      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Contact Us List ({mockContactUsList?.length})
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs font-medium text-darkBlueText sm:w-auto md:text-sm"
          >
            <FileDown className="h-4 w-4" />
            Download
          </Button>
          <Select defaultValue="this-week">
            <SelectTrigger className="h-9 w-[130px] text-xs md:text-sm">
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              value={searchQuery}
              placeholder="User Id/ Email Address"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="deleted">Deleted</SelectItem>
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
          data={mockContactUsList}
          searchQuery={searchQuery}
          isLoading={isLoadingContactList}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default ContactUsList;
