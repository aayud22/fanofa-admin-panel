import React, { useState } from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
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
  ArrowUp,
  RotateCcw,
  ArrowDown,
  BadgeCheck,
  ArrowUpDown,
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
import ActionModal from '../common/ActionModal';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../constants/routeConstants';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const mockAds = [
  {
    id: '#52875',
    accountName: 'Arrora gaur',
    accountImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Vehicles',
    datePublished: 'Oct 31, 2017',
    country: 'AQ',
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
    country: 'IS',
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
    country: 'RS',
    adPromotions: ['M', 'P'],
    rating: 2,
    viewedAd: '5343 User',
    adStatus: 'Closed',
    adminStatus: 'Approved',
  },
];

const AdsList = () => {
  const navigate = useNavigate();
  const [selectedAds, setSelectedAds] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [adminStatuses, setAdminStatuses] = useState(
    mockAds.reduce(
      (acc, ad) => ({ ...acc, [ad.id]: ad.adminStatus.toLowerCase() }),
      {}
    )
  );
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

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-success-bg text-success-text';
      case 'deleted':
        return 'bg-danger-bg text-danger-text';
      case 'closed':
        return 'bg-warning-bg text-warning-text';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getAdminStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-success-bg text-success-text';
      case 'pending':
        return 'bg-warning-bg text-warning-text';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = () => {
    if (!sortConfig.key) return mockAds;

    return [...mockAds].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const handleAdminStatusChange = (adId, newStatus) => {
    setAdminStatuses((prev) => ({ ...prev, [adId]: newStatus }));
    console.log('Status changed for ad', adId, 'to', newStatus);
  };

  const getSortIcon = (column) => {
    console.log('column', column);
    console.log('sortConfig', sortConfig);

    if (sortConfig.key !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortConfig.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const SortableHeader = ({ column, label }) => (
    <div
      className="flex cursor-pointer items-center gap-1"
      onClick={() => handleSort(column)}
    >
      {label}
      {getSortIcon(column)}
    </div>
  );

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

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Ad id / Category Name" className="pl-10" />
          </div>
        </div>
        <Select defaultValue="category">
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
        <Select defaultValue="date">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Date Published" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date Published</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="country">
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
        <Select defaultValue="admin">
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
        <Select defaultValue="status">
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
          <Button className="h-10 bg-primary-gradient px-6 text-white">
            Search
          </Button>
          <div className="group flex cursor-pointer items-center gap-[3px] text-xs font-semibold text-red-500 transition-all hover:text-red-600 hover:underline">
            <RotateCcw className="h-4 w-4 group-hover:text-red-600" />
            Reset Filter
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[50px]">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  checked={selectedAds.length === mockAds.length}
                  onChange={(e) =>
                    setSelectedAds(
                      e.target.checked ? mockAds.map((ad) => ad.id) : []
                    )
                  }
                />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="id" label="Ad Id" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="accountName" label="Account Name" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="category" label="Category" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="datePublished" label="Date Published" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="country" label="Country" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Ad Promotions
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="rating" label="Rating" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="viewedAd" label="Viewed Ad" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="adStatus" label="Ad Status" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                <SortableHeader column="adminStatus" label="Admin Status" />
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getSortedData().map((ad) => (
              <TableRow
                key={ad.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={(e) => {
                  // Prevent row click if checkbox was clicked
                  if (e.target.type !== 'checkbox') {
                    handleRowClick(ad);
                  }
                }}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedAds.includes(ad.id)}
                    onChange={(e) =>
                      setSelectedAds(
                        e.target.checked
                          ? [...selectedAds, ad.id]
                          : selectedAds.filter((id) => id !== ad.id)
                      )
                    }
                  />
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {ad.id}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={ad.accountImage} />
                      <AvatarFallback>{ad.accountName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-darkBlueText">
                        {ad.accountName}
                      </span>
                      {adminStatuses[ad.id] === 'approved' && (
                        <BadgeCheck className="h-4 w-4 text-success-text" />
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {ad.category}
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {ad.datePublished}
                </TableCell>
                <TableCell>
                  <span
                    className={`flag-icon flag-icon-${ad.country.toLowerCase()}`}
                    style={{ fontSize: '1rem', padding: '0.25rem' }}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {ad.adPromotions.map((promotion, index) => (
                      <span
                        key={index}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-medium text-blue-600"
                      >
                        {promotion}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {ad.rating}
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {ad.viewedAd}
                </TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                      ad.adStatus
                    )}`}
                  >
                    {ad.adStatus}
                  </span>
                </TableCell>
                <TableCell>
                  <Select
                    value={adminStatuses[ad.id]}
                    onValueChange={(value) =>
                      handleAdminStatusChange(ad.id, value)
                    }
                  >
                    <SelectTrigger
                      className={`h-8 w-[100px] ${getAdminStatusColor(adminStatuses[ad.id])}`}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
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
                          handleRowClick(ad);
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
                          openDeleteModal(ad.id);
                        }}
                        className="flex items-center gap-2 text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete Ad
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          e.stopPropagation();
                          openDeactivateModal(ad.id);
                        }}
                        className="flex items-center gap-2 text-orange-600"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Deactivate Ad
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
