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
import SupportTicketCharts from '../../components/enquiry/SupportTicketCharts';

const mockStats = [
  {
    title: 'Total Tickets',
    value: '+2694',
  },
  {
    title: 'Pending',
    value: '175',
  },
  {
    title: 'Resolved',
    value: '1565',
  },
  {
    title: 'In Progress',
    value: '3422',
  },
];

const mockSupportTicketList = [
  {
    complaintId: '#234234',
    email: 'tranthuy.@gmail.com',
    category: 'Contact Us',
    reasonForReport: 'I don’t, just like it',
    dateReported: 'Oct 31, 2017',
    queries: 2,
    assist: '#234234 Endrew',
    responseOptions: 'Resolved',
    resolvedDate: 'Oct 31, 2017',
  },
  {
    complaintId: '#234234',
    email: 'manhhac@gmail.com',
    category: 'Dispute',
    reasonForReport: 'Scam Fraud o Spam',
    dateReported: 'Feb 28, 2018',
    queries: 1,
    assist: '#234234 Kelvin',
    responseOptions: 'Pending',
    resolvedDate: '--',
  },
  {
    complaintId: '#234234',
    email: 'nvt.nute@gmail.com',
    category: 'Complaints',
    reasonForReport: 'False Information',
    dateReported: 'Mar 6, 2018',
    queries: 3,
    assist: '#234234 John',
    responseOptions: 'Resolved',
    resolvedDate: 'Mar 6, 2018',
  },
  {
    complaintId: '#234234',
    email: 'binhan628@gmail.com',
    category: 'Support',
    reasonForReport: 'I don’t, just like it',
    dateReported: 'May 29, 2017',
    queries: 1,
    assist: '#234234',
    responseOptions: 'In Progress',
    resolvedDate: '--',
  },
  {
    complaintId: '#234234',
    email: 'ckctm12@gmail.com',
    category: 'Advertising',
    reasonForReport: 'Scam Fraud o Spam',
    dateReported: 'Mar 13, 2014',
    queries: 3,
    assist: '#234234',
    responseOptions: 'Resolved',
    resolvedDate: 'Mar 13, 2014',
  },
  {
    complaintId: '#234234',
    email: 'dangh@gmail.com',
    category: 'Dispute',
    reasonForReport: 'False Information',
    dateReported: 'Feb 11, 2014',
    queries: 1,
    assist: '#234234',
    responseOptions: 'Resolved',
    resolvedDate: 'Feb 11, 2014',
  },
  {
    complaintId: '#234234',
    email: 'trungkiensp@gmail.com',
    category: 'Dispute',
    reasonForReport: 'I don’t, just like it',
    dateReported: 'Aug 7, 2017',
    queries: 3,
    assist: '#234234',
    responseOptions: 'Pending',
    resolvedDate: '--',
  },
  {
    complaintId: '#234234',
    email: 'thuhang@gmail.com',
    category: 'Advertising',
    reasonForReport: 'False Information',
    dateReported: 'May 20, 2015',
    queries: 4,
    assist: '#234234',
    responseOptions: 'Pending',
    resolvedDate: 'May 20, 2015',
  },
  {
    complaintId: '#234234',
    email: 'manhhachk@gmail.com',
    category: 'Dispute',
    reasonForReport: 'I don’t, just like it',
    dateReported: 'Mar 23, 2013',
    queries: 2,
    assist: '#234234',
    responseOptions: 'Pending',
    resolvedDate: 'Mar 23, 2013',
  },
  {
    complaintId: '#234234',
    email: 'vuahaituong@gmail.com',
    category: 'Advertising',
    reasonForReport: 'False Information',
    dateReported: 'May 12, 2019',
    queries: 2,
    assist: '#234234',
    responseOptions: 'Resolved',
    resolvedDate: '--',
  },
  {
    complaintId: '#62875',
    email: 'tienlapspk@gmail.com',
    category: 'Advertising',
    reasonForReport: 'False Information',
    dateReported: 'Jul 14, 2015',
    queries: 1,
    assist: '#62875',
    responseOptions: 'Pending',
    resolvedDate: 'Jul 14, 2015',
  },
];

const SupportTicketList = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoadingSupportTicketList, setIsLoadingSupportTicketList] =
    useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Enquiry', link: '#' },
      { label: 'Support Ticket ' },
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
    setIsLoadingSupportTicketList(true);
    setTimeout(() => {
      setIsLoadingSupportTicketList(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'complaintId',
      label: 'Complaint ID',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Category',
      sortable: true,
    },
    {
      key: 'reasonForReport',
      label: 'Reason for Report',
      sortable: true,
    },
    {
      key: 'dateReported',
      label: 'Date Reported',
      sortable: true,
    },
    {
      key: 'queries',
      label: 'Queries',
      sortable: true,
    },
    {
      key: 'assist',
      label: 'Assist',
      sortable: true,
    },
    {
      key: 'responseOptions',
      label: 'Response Options',
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
      key: 'resolvedDate',
      label: 'Resolved Date',
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

      <div>
        <SupportTicketCharts />
      </div>

      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Support Ticket List ({mockSupportTicketList?.length})
        </h2>
        <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
          <Button
            size="sm"
            variant="outline"
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
          data={mockSupportTicketList}
          searchQuery={searchQuery}
          isLoading={isLoadingSupportTicketList}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default SupportTicketList;
