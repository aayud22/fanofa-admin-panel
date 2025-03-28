import React, { useEffect, useState } from 'react';
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
import {
  Eye,
  Star,
  Edit3,
  Search,
  Trash2,
  Eraser,
  Ellipsis,
  FileDown,
  RotateCcw,
  MessageSquareMore,
} from 'lucide-react';
import ReviewModal from './ReviewModal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditReviewModal from './EditReviewModal';
import DatePicker from 'react-multi-date-picker';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import EnhancedTable from '../../components/ui/enhanced-table';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const mockReviewList = [
  {
    rowNo: '01',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Åland Islands',
    flag: 'AX',
    category: 'Vehicles',
    reviewDate: '4 Mar 2023',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '02',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Iceland',
    flag: 'IS',
    category: 'Mobile',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Inactive',
  },
  {
    rowNo: '03',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Serbia',
    flag: 'RS',
    category: 'Buy & Sell',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '04',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Poland',
    flag: 'PL',
    category: 'Real Estate',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '05',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Réunion',
    flag: 'RE',
    category: 'Real Estate',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '06',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Greece',
    flag: 'GR',
    category: 'Jobs',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '07',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Curaçao',
    flag: 'CW',
    category: 'Community',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Inactive',
  },
  {
    rowNo: '08',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Sao Tome',
    flag: 'ST',
    category: 'Pets',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Inactive',
  },
  {
    rowNo: '09',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Saudi Arabia',
    flag: 'SA',
    category: 'Deals / Offers',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '10',
    adID: '#234234',
    adOwnerID: '#234234',
    country: 'Israel',
    flag: 'IL',
    category: 'Pets',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
  {
    rowNo: '11',
    adID: '#62875',
    adOwnerID: '#62875',
    country: 'Viet Nam',
    flag: 'VN',
    category: 'Real Estate',
    reviewDate: '27 Jun 2024',
    activity: { rating: 4, comments: 4 },
    status: 'Active',
  },
];

const ReviewsWithStars = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedCategory, setSelectCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedReview, setSelectedReview] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [isLoadingReviewList, setIsLoadingReviewList] = useState(false);

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Reviews & Stars', link: '#' },
      { label: 'All review and starts List' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Reviews & Stars',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setIsLoadingReviewList(true);
    setTimeout(() => {
      setIsLoadingReviewList(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'rowNo',
      label: 'Row No.',
      sortable: true,
    },
    {
      key: 'adID',
      label: 'Ad ID',
      sortable: true,
    },
    {
      key: 'adOwnerID',
      label: 'Ad Owner ID',
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
      key: 'category',
      label: 'Category',
      sortable: true,
    },
    {
      key: 'reviewDate',
      label: 'Review Date',
      sortable: true,
    },
    {
      key: 'activity',
      label: 'Activity',
      sortable: false,
      render: (value) => (
        <div className="flex items-center gap-2">
          <span className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />{' '}
            {value?.rating}
          </span>
          <span className="flex items-center">
            <MessageSquareMore className="!h-4 !w-4 text-blue-500" />{' '}
            {value?.comments}
          </span>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value) => {
        const statusStyles = {
          Active: 'bg-green-100 text-green-700',
          Inactive: 'bg-red-100 text-red-700',
        };

        return (
          <span
            className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${
              statusStyles[value] || 'bg-gray-100 text-gray-700'
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
              onClick={() =>
                navigate(APP_ROUTES.REVIEW_AND_STAR.REVIEW_AND_STAR_DETAILS, {
                  state: { data: row },
                })
              }
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleEditReview(row)}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Edit3 className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-yellow-600">
              <Eraser className="h-4 w-4 text-yellow-400" />
              Remove
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-2 text-yellow-600"
              onClick={() => handleGiveRating()}
            >
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Give Rating
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 text-red-600">
              <Trash2 className="h-4 w-4" />
              Deactivate
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
      review: selectedDate,
      status: selectedStatus,
      country: selectedCountry,
      category: selectedCategory,
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDate('');
    setSelectCategory('');
    setSelectedStatus('');
    setSelectedCountry('');
  };

  const handleGiveRating = () => {
    setIsReviewDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsReviewDialogOpen(false);
  };

  const handleSubmitReview = (reviewData) => {
    // Handle review submission here
    console.log(reviewData);
  };

  const handleEditReview = (row) => {
    setSelectedReview(row);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-darkBlueText">
            All review and starts List ({mockReviewList?.length})
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
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="min-w-[200px] flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                value={searchQuery}
                placeholder="Ad ID / Ad Owner ID / Customer Id"
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
          <Select value={selectedCategory} onValueChange={setSelectCategory}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vehicles">Vehicles</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="jobs">Jobs</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Review Date " />
            </SelectTrigger>
            <SelectContent>
              <DatePicker
                format="DD-MM-YYYY"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
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
            data={mockReviewList}
            searchQuery={searchQuery}
            isLoading={isLoadingReviewList}
            // onRowClick={handleRowClick}
            // onSelectionChange={handleSelectionChange}
          />
        </div>
      </div>

      <ReviewModal
        isOpen={isReviewDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={handleSubmitReview}
      />
      <EditReviewModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        reviewData={selectedReview}
      />
    </>
  );
};

export default ReviewsWithStars;
