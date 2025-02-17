import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageInfo, resetPageInfo } from '../../redux/slices/pageSlice';
import {
  Edit,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  UserPlus,
  FileDown,
  Instagram,
  MoreHorizontal,
  Link as LinkIcon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Switch } from '../../components/ui/switch';
import { Button } from '../../components/ui/button';
import AddSourceModal from '../../components/ads/AddSourceModal';
import UpdateLinkModal from '../../components/ads/UpdateLinkModal';
import EnhancedTable from '../../components/ui/enhanced-table';

const data = [
  {
    id: 1,
    sectionName: 'Facebook',
    type: 'Post Ad',
    link: 'https://www.facebook.com/company/underbelly',
    status: true,
  },
  {
    id: 2,
    sectionName: 'Instagram',
    type: 'Story Ad',
    link: 'https://www.instagram.com/company/underbelly',
    status: false,
  },
  {
    id: 3,
    sectionName: 'LinkedIn',
    type: 'Post Ad',
    link: 'https://www.linkedin.com/company/underbelly',
    status: true,
  },
  {
    id: 4,
    sectionName: 'Twitter',
    type: 'Tweet Ad',
    link: 'https://www.twitter.com/company/underbelly',
    status: false,
  },
  {
    id: 5,
    sectionName: 'Youtube',
    type: 'Video Ad',
    link: 'https://www.youtube.com/company/underbelly',
    status: true,
  },
];

const getSocialIcon = (platform) => {
  const iconProps = { className: 'h-5 w-5' };
  switch (platform.toLowerCase()) {
    case 'facebook':
      return <Facebook {...iconProps} className="text-blue-600" />;
    case 'instagram':
      return <Instagram {...iconProps} className="text-pink-600" />;
    case 'linkedin':
      return <Linkedin {...iconProps} className="text-blue-500" />;
    case 'twitter':
      return <Twitter {...iconProps} className="text-sky-500" />;
    case 'youtube':
      return <Youtube {...iconProps} className="text-red-600" />;
    default:
      return null;
  }
};

const AdsPromotions = () => {
  const dispatch = useDispatch();
  const [promotions, setPromotions] = useState(data);
  const [isLoadingAds, setIsLoadingAds] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [updateLinkModal, setUpdateLinkModal] = useState({
    isOpen: false,
    promotionId: null,
    existingLink: '',
  });

  const columns = [
    {
      key: 'sectionName',
      label: 'Section Name',
      sortable: true,
      render: (value, row) => (
        <div className="flex items-center gap-2">
          {getSocialIcon(row.sectionName)}
          <span>{row.sectionName}</span>
        </div>
      ),
    },
    {
      key: 'type',
      label: 'Type',
      sortable: true,
    },
    {
      key: 'link',
      label: 'Link',
      sortable: true,
      render: (value, row) => (
        <a
          href={row.link}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-blue-700 hover:underline"
        >
          {row.link}
        </a>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value, row) => (
        <Switch
          checked={row.status}
          onCheckedChange={(checked) => {
            setPromotions((prev) =>
              prev.map((promo) =>
                promo.id === row.id ? { ...promo, status: checked } : promo
              )
            );
          }}
          className="data-[state=checked]:bg-primary-gradient"
        />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <MoreHorizontal className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                console.log('Edit promotion:', row.id);
                // Add your edit logic here
              }}
              className="text-coolSky focus:bg-blue-50 focus:text-coolSky"
            >
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setUpdateLinkModal({
                  isOpen: true,
                  promotionId: row.id,
                  existingLink: row.link,
                });
              }}
              className="text-coolSky focus:bg-blue-50 focus:text-coolSky"
            >
              <LinkIcon className="mr-2 h-4 w-4" />
              <span>Update Link</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  useEffect(() => {
    dispatch(setPageInfo({
      title: 'Ads & Promotions',
      breadcrumbs: [
        { label: 'Home', link: '/dashboard' },
        { label: 'Ads & Promotions' }
      ]
    }));

    return () => {
      dispatch(resetPageInfo());
    };
  }, [dispatch]);

  useEffect(() => {
    setIsLoadingAds(true);
    setTimeout(() => {
      setIsLoadingAds(false);
    }, 1000);
  }, []);

  const handleLinkUpdate = (newLink) => {
    setPromotions((prev) =>
      prev.map((promo) =>
        promo.id === updateLinkModal.promotionId
          ? { ...promo, link: newLink }
          : promo
      )
    );
  };

  const handleAddSource = (formData) => {
    const newSource = {
      id: Date.now(),
      sectionName: formData.name,
      type: 'Post Ad', // You can make this dynamic if needed
      link: formData.link,
      status: true,
    };
    setPromotions((prev) => [...prev, newSource]);
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-4 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Ads Promotions</h1>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="text-sm !font-medium text-darkBlueText"
          >
            <FileDown className="!h-4 !w-4 text-darkBlueText" />
            Download
          </Button>

          <Button
            size="sm"
            className="!bg-primary-gradient text-sm !font-medium text-white"
            onClick={() => setIsAddModalOpen(true)}
          >
            <UserPlus className="!h-4 !w-4 text-white" />
            Add Source
          </Button>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          data={promotions}
          columns={columns}
          isLoading={isLoadingAds}
          // onRowClick={handleRowClick}
          // onSelectionChange={handleSelectionChange}
        />
      </div>

      {isAddModalOpen && (
        <AddSourceModal
          isOpen={isAddModalOpen}
          onAdd={handleAddSource}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      {updateLinkModal.isOpen && (
        <UpdateLinkModal
          isOpen={updateLinkModal.isOpen}
          onClose={() =>
            setUpdateLinkModal({
              isOpen: false,
              promotionId: null,
              existingLink: '',
            })
          }
          existingLink={updateLinkModal.existingLink}
          onUpdate={handleLinkUpdate}
        />
      )}
    </div>
  );
};

export default AdsPromotions;
