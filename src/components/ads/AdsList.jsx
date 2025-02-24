import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import {
  Eye,
  Star,
  Search,
  Pencil,
  Trash2,
  RotateCcw,
  MoreVertical,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ActionModal from '../common/ActionModal';
import EnhancedTable from '../ui/enhanced-table';
import { APP_ROUTES } from '../../constants/routeConstants';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const mockAds = [
  {
    id: '#52875',
    accountName: 'Arrora gaur',
    accountImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Vehicles',
    datePublished: 'Oct 31, 2017',
    country: 'Iceland',
    flag: 'AQ',
    adPromotions: ['M', 'P'],
    rating: 4,
    viewedAd: '3435 User',
    adStatus: 'Active',
    adminStatus: 'Approved',
  },
  {
    id: '#52876',
    accountName: 'James Mullican',
    accountImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Mobile',
    datePublished: 'Feb 28, 2018',
    country: 'Åland Islands',
    flag: 'IS',
    adPromotions: ['M', 'P'],
    rating: 6,
    viewedAd: '2245 User',
    adStatus: 'Deleted',
    adminStatus: 'Pending',
  },
  {
    id: '#52878',
    accountName: 'Robert Bacins',
    accountImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Buy & Sell',
    datePublished: 'Mar 6, 2018',
    country: 'Réunion',
    flag: 'RS',
    adPromotions: ['M', 'P'],
    rating: 2,
    viewedAd: '5343 User',
    adStatus: 'Closed',
    adminStatus: 'Approved',
  },
];

const AdsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoadingAds, setIsLoadingAds] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    entityType: 'Ad',
    actionType: 'Delete',
    selectedReason: '',
    adId: null,
  });

  const deactivationReasons = [
    { value: 'inappropriate', label: 'Inappropriate Content' },
    { value: 'spam', label: 'Spam or Misleading' },
    { value: 'duplicate', label: 'Duplicate Ad' },
    { value: 'expired', label: 'Product No Longer Available' },
    { value: 'other', label: 'Other' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('date');
  const [selectedCountry, setSelectedCountry] = useState('country');
  const [selectedAdStatus, setSelectedAdStatus] = useState('status');
  const [selectedCategory, setSelectedCategory] = useState('category');
  const [selectedAdminStatus, setSelectedAdminStatus] = useState('admin');

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Ad', link: APP_ROUTES.ADS.BASE },
      { label: 'Ad List ' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Ads',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setIsLoadingAds(true);
    setTimeout(() => {
      setIsLoadingAds(false);
    }, 1000);
  }, []);

  const columns = [
    {
      key: 'id',
      label: 'Ad Id',
      sortable: true,
    },
    {
      key: 'accountName',
      label: 'Account Name',
      sortable: true,
    },
    {
      key: 'category',
      label: 'Category',
      sortable: true,
    },
    {
      key: 'datePublished',
      label: 'Date Published',
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
      key: 'adPromotions',
      label: 'Ad Promotions',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center">
          {row.adPromotions.map((promotion, index) => (
            <span
              key={index}
              className="flex h-5 w-5 items-center justify-center gap-1 rounded-full bg-blue-100 text-xs font-medium text-blue-600"
            >
              {promotion}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: 'rating',
      label: 'Rating',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <p className="text-sm font-medium text-darkBlueText">
            {row.rating || 0}
          </p>
        </div>
      ),
    },
    {
      key: 'viewedAd',
      label: 'Viewed Ad',
      sortable: true,
    },
    {
      key: 'adStatus',
      label: 'Ad Status',
      sortable: true,
      render: (value) => {
        const statusStyles = {
          Active: 'bg-success-bg text-success-text',
          Deleted: 'bg-danger-bg text-danger-text',
          Closed: 'bg-yellow-50 text-yellow-700',
          Unread: 'bg-blue-50 text-blue-700',
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
      key: 'adminStatus',
      label: 'Admin Status',
      sortable: true,
      render: (value) => {
        const statusStyles = {
          Approved: 'bg-success-bg text-success-text',
          Closed: 'bg-danger-bg text-danger-text',
          Pending: 'bg-yellow-50 text-yellow-700',
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
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleRowClick(row);
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Eye className="h-4 w-4" />
              View Ad
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center gap-2 text-skyBlue"
            >
              <Pencil className="h-4 w-4" />
              Edit Ad
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                openDeleteModal(row.id);
              }}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              Delete Ad
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                openDeactivateModal(row.id);
              }}
              className="flex items-center gap-2 text-orange-600"
            >
              <RotateCcw className="h-4 w-4" />
              Deactivate Ad
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const handleRowClick = (ad) => {
    const cleanId = ad.id.replace('#', '');
    const route = APP_ROUTES.ADS.AD_DETAILS.replace('/:id', '');
    navigate(`${route}/${cleanId}`, { state: { ad } });
  };

  const handleModalClose = () => {
    setModalConfig({
      isOpen: false,
      entityType: 'Ad',
      actionType: 'Delete',
      selectedReason: '',
      adId: null,
    });
  };

  const handleModalConfirm = () => {
    const { actionType, adId, selectedReason } = modalConfig;

    if (actionType === 'Delete') {
      console.log(`Deleting ad ${adId}`);
      // Implement delete logic here
    } else if (actionType === 'Deactivate') {
      console.log(`Deactivating ad ${adId} with reason: ${selectedReason}`);
      // Implement deactivate logic here
    }

    handleModalClose();
  };

  const handleReasonChange = (reason) => {
    setModalConfig((prev) => ({ ...prev, selectedReason: reason }));
  };

  const openDeleteModal = (adId) => {
    setModalConfig({
      isOpen: true,
      entityType: 'Ad',
      actionType: 'Delete',
      selectedReason: '',
      adId,
    });
  };

  const openDeactivateModal = (adId) => {
    setModalConfig({
      isOpen: true,
      entityType: 'Ad',
      actionType: 'Deactivate',
      selectedReason: '',
      adId,
    });
  };

  const handleSearch = () => {
    // Implement search with all filters
    const filters = {
      searchQuery,
      category: selectedCategory,
      datePublished: selectedDate,
      country: selectedCountry,
      adminStatus: selectedAdminStatus,
      adStatus: selectedAdStatus
    };
    console.log('Applying filters:', filters);
    // Add your search logic here
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('category');
    setSelectedDate('date');
    setSelectedCountry('country');
    setSelectedAdminStatus('admin');
    setSelectedAdStatus('status');
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Ad id / Category Name" 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Select 
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="category">Category</SelectItem>
            <SelectItem value="vehicles">Vehicles</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          value={selectedDate}
          onValueChange={setSelectedDate}
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
          value={selectedCountry}
          onValueChange={setSelectedCountry}
        >
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
        <Select 
          value={selectedAdminStatus}
          onValueChange={setSelectedAdminStatus}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Admin Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin Status</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Select 
          value={selectedAdStatus}
          onValueChange={setSelectedAdStatus}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Ad Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="status">Ad Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="deleted">Deleted</SelectItem>
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

      {/* Table */}

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={mockAds}
          searchQuery={searchQuery}
          isLoading={isLoadingAds}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>

      {modalConfig.isOpen && (
        <ActionModal
          onClose={handleModalClose}
          isOpen={modalConfig.isOpen}
          reasons={deactivationReasons}
          onConfirm={handleModalConfirm}
          entityType={modalConfig.entityType}
          actionType={modalConfig.actionType}
          onReasonChange={handleReasonChange}
          selectedReason={modalConfig.selectedReason}
        />
      )}
    </div>
  );
};

export default AdsList;
