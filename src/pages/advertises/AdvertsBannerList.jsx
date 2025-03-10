import React, { useEffect, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../components/ui/select';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { APP_ROUTES } from '../../constants/routeConstants';
import EnhancedTable from '../../components/ui/enhanced-table';
import { setSelectedBanner } from '../../redux/slices/adsSlice';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';
import { Ellipsis, Eye, FileDown, RotateCcw, Search } from 'lucide-react';
import BannerDetailsModal from '../../components/advertises/Modals/BannerDetailsModal';

const mockBanners = [
  {
    bannerName: 'purpleleopard757',
    bannerLocation: 'Main Page',
    placement: 'Bottom',
    duration: '1 Year',
    bannerLink: 'www.wired.com',
    startDate: '4 Mar 2023',
    expiresIn: '4 Mar 2023',
    charges: '$2545',
    status: 'Active',
  },
  {
    bannerName: 'silverlion355',
    bannerLocation: 'Listing Page',
    placement: 'Top',
    duration: '12 Months',
    bannerLink: 'www.edx.org',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Deleted',
  },
  {
    bannerName: 'happysnake594',
    bannerLocation: 'Listing Page',
    placement: 'Center',
    duration: '24 Months',
    bannerLink: 'www.bbc.co.uk/news',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Expires',
  },
  {
    bannerName: 'whitegoose497',
    bannerLocation: 'Main Page',
    placement: 'Bottom',
    duration: '48 Months',
    bannerLink: 'www.cnn.com',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Active',
  },
  {
    bannerName: 'happysnake594',
    bannerLocation: 'Main Page',
    placement: 'Bottom',
    duration: '12 Months',
    bannerLink: 'www.nytimes.com',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Active',
  },
  {
    bannerName: 'beautifulbutterfly',
    bannerLocation: 'Listing Page',
    placement: 'Center',
    duration: '48 Months',
    bannerLink: 'www.medium.com',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Active',
  },
  {
    bannerName: 'whitefish664',
    bannerLocation: 'Listing Page',
    placement: 'Center',
    duration: '1 Month',
    bannerLink: 'www.wordpress.com',
    startDate: '27 Jun 2024',
    expiresIn: '27 Jun 2024',
    charges: '$324',
    status: 'Inactive',
  },
];

const AdvertsBannerList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ads } = useSelector((state) => state);

  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlacement, setSelectedPlacement] = useState('');
  const [isLoadingBanners, setIsLoadingBanners] = useState(false);
  const [selectedBannerLocation, setSelectedBannerLocation] = useState('');
  const [isOpenBannerDetailsModal, setIsOpenBannerDetailsModal] =
    useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      {
        label: 'Advertising in Banner ',
        link: APP_ROUTES.ADVERTISES.ADVERTISE_LIST,
      },
      { label: ads?.selectedAdvertise?.name || '-' },
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
    setIsLoadingBanners(true);
    setTimeout(() => {
      setIsLoadingBanners(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'bannerName',
      label: 'Banner Name',
      sortable: true,
    },
    {
      key: 'bannerLocation',
      label: 'Banner Location',
      sortable: true,
    },
    {
      key: 'placement',
      label: 'Placement',
      sortable: true,
    },
    {
      key: 'duration',
      label: 'Duration',
      sortable: false,
    },
    {
      key: 'bannerLink',
      label: 'Banner Link',
      sortable: false,
      render: (value) => (
        <a
          href={`https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {value}
        </a>
      ),
    },
    {
      key: 'startDate',
      label: 'Start Date',
      sortable: true,
    },
    {
      key: 'expiresIn',
      label: 'Expires In',
      sortable: true,
    },
    {
      key: 'charges',
      label: 'Charges',
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
          Deleted: 'bg-red-100 text-red-600',
          Expires: 'bg-gray-100 text-gray-500',
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
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setSelectedBanner(row));
                setIsOpenBannerDetailsModal(true);
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View Banner
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
      endDate: endDate,
      startDate: startDate,
      status: selectedStatus,
      category: selectedCategory,
      placement: selectedPlacement,
      banner: selectedBannerLocation,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setEndDate('');
    setStartDate('');
    setSearchQuery('');
    setSelectedStatus('');
    setSelectedCategory('');
    setSelectedPlacement('');
    setSelectedBannerLocation('');
  };

  return (
    <div className="space-y-4">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="mt-4 flex items-center gap-3">
          <img
            width={100}
            height={100}
            alt={ads?.selectedAdvertise?.name}
            src={ads?.selectedAdvertise?.avatar}
            className="h-16 w-16 rounded-full object-fill"
          />

          <div>
            <p className="text-lg font-semibold text-darkBlueText">
              {ads?.selectedAdvertise?.name}
            </p>
            <p className="text-base text-darkBlueText">
              {ads?.selectedAdvertise?.userId || '-'}
            </p>
          </div>
        </div>

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
            onClick={() =>
              navigate(APP_ROUTES?.ADVERTISES.ADVERTISE_PAYMENT_AND_TIMING)
            }
            className="w-full bg-primary-gradient text-xs text-white sm:w-auto md:text-sm"
          >
            View Profile
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
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first">First</SelectItem>
            <SelectItem value="second">Second</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedBannerLocation}
          onValueChange={setSelectedBannerLocation}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Banner  Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mainPage">Main Page</SelectItem>
            <SelectItem value="listingPage">Listing Page</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedPlacement} onValueChange={setSelectedPlacement}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Placement" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
            <SelectItem value="center">Center</SelectItem>
          </SelectContent>
        </Select>
        <Select value={startDate} onValueChange={setStartDate}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Starts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">4 Mar 2023</SelectItem>
            <SelectItem value="bottom">27 Jan 2023</SelectItem>
          </SelectContent>
        </Select>
        <Select value={endDate} onValueChange={setEndDate}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Expires on" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">4 Mar 2023</SelectItem>
            <SelectItem value="bottom">27 Jan 2023</SelectItem>
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

      <h2 className="text-lg font-semibold text-darkBlueText">
        Banner ({mockBanners?.length})
      </h2>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={mockBanners}
          searchQuery={searchQuery}
          isLoading={isLoadingBanners}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>

      {isOpenBannerDetailsModal && (
        <BannerDetailsModal
          isOpen={isOpenBannerDetailsModal}
          setIsOpen={setIsOpenBannerDetailsModal}
        />
      )}
    </div>
  );
};

export default AdvertsBannerList;
