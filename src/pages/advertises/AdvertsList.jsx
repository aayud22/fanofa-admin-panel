import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import EnhancedTable from '../../components/ui/enhanced-table';
import { setSelectedAdvertise } from '../../redux/slices/adsSlice';
import { Ellipsis, Eye, FileDown, RotateCcw, Search } from 'lucide-react';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const mokAdvertisement = [
  {
    userId: '#234234',
    name: 'Arrora gaur',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Åland Islands',
    flag: 'AX',
    plan: 'Personal Plus',
    banners: '07',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'James Mullican',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Iceland',
    flag: 'IS',
    plan: 'Personal Plus',
    banners: '08',
    status: 'Inactive',
  },
  {
    userId: '#234234',
    name: 'Robert Bacins',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Serbia',
    flag: 'RS',
    plan: 'Personal Plus',
    banners: '04',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'Bethany Jackson',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Poland',
    flag: 'PL',
    plan: 'Personal Plus',
    banners: '27',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'Anne Jacob',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Réunion',
    flag: 'RE',
    plan: 'Personal Plus',
    banners: '12',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'Bethany Jackson',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Greece',
    flag: 'GR',
    plan: 'Personal Plus',
    banners: '05',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'James Mullican',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Curaçao',
    flag: 'CW',
    plan: 'Personal Plus',
    banners: '13',
    status: 'Inactive',
  },
  {
    userId: '#234234',
    name: 'Jhon Deo',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Sao Tome',
    flag: 'ST',
    plan: 'Personal Plus',
    banners: '04',
    status: 'Inactive',
  },
  {
    userId: '#234234',
    name: 'Bethany Jackson',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Saudi Arabia',
    flag: 'SA',
    plan: 'Personal Plus',
    banners: '01',
    status: 'Active',
  },
  {
    userId: '#234234',
    name: 'James Mullican',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Israel',
    flag: 'IL',
    plan: 'Personal Plus',
    banners: '02',
    status: 'Active',
  },
  {
    userId: '#62875',
    name: 'Robert Bacins',
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    country: 'Vietnam',
    flag: 'VN',
    plan: 'Personal Plus',
    banners: '54',
    status: 'Active',
  },
];

const AdvertsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedRange, setSelectedRange] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoadingAdvertises, setIsLoadingAdvertises] = useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Advertising in Banner' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Advertising in Banner',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setIsLoadingAdvertises(true);
    setTimeout(() => {
      setIsLoadingAdvertises(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'userId',
      label: 'User Id',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          <img
            src={row.avatar}
            alt={row.name}
            className="mr-2 h-8 w-8 rounded-full"
          />
          <span>{value}</span>
        </div>
      ),
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
      key: 'plan',
      label: 'Plan',
      sortable: true,
    },
    {
      key: 'banners',
      label: 'No. of Banners',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => {
        const statusStyles = {
          Active: 'bg-green-100 text-green-600',
          Inactive: 'bg-red-100 text-red-600',
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
                dispatch(setSelectedAdvertise(row));
                navigate(`${APP_ROUTES.ADVERTISES.ADVERTISE_BANNER_LIST}`);
                // viewNotification(row.notificationId);
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View
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
      plan: selectedPlan,
      range: selectedRange,
      status: selectedStatus,
      country: selectedCountry,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedPlan('');
    setSelectedRange('');
    setSelectedStatus('');
  };

  return (
    <div className="space-y-4">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-lg font-semibold text-darkBlueText">
          Advertisements ({mokAdvertisement?.length})
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
          <Button
            size="sm"
            variant="outline"
            className="w-full text-xs font-medium text-darkBlueText sm:w-auto md:text-sm"
          >
            Templets
          </Button>
          <Button
            size="sm"
            className="w-full bg-primary-gradient text-xs text-white sm:w-auto md:text-sm"
          >
            Compose New
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              value={searchQuery}
              placeholder="User Id / Name"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select value={selectedCountry} onValueChange={setSelectedCountry}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="india">India</SelectItem>
            <SelectItem value="usa">USA</SelectItem>
            <SelectItem value="uk">Uk</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedPlan} onValueChange={setSelectedPlan}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Created By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personalPlan">Personal Plan</SelectItem>
            <SelectItem value="businessPlan">Business Plan</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedRange} onValueChange={setSelectedRange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Target Criteria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10</SelectItem>
            <SelectItem value="10-20">10-20</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Send Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inActive">Inactive</SelectItem>
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
          data={mokAdvertisement}
          searchQuery={searchQuery}
          isLoading={isLoadingAdvertises}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default AdvertsList;
