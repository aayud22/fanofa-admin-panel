import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  MoreVertical,
  Edit,
  Link as LinkIcon,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  UserPlus,
  FileDown,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import { Switch } from '../../components/ui/switch';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { Button } from '../../components/ui/button';
import AddSourceModal from '../../components/ads/AddSourceModal';
import UpdateLinkModal from '../../components/ads/UpdateLinkModal';

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
  const [promotions, setPromotions] = useState(data);
  const [sortState, setSortState] = useState({ column: '', direction: '' });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [updateLinkModal, setUpdateLinkModal] = useState({
    isOpen: false,
    promotionId: null,
    existingLink: '',
  });

  const handleStatusChange = (id, checked) => {
    setPromotions((prev) =>
      prev.map((promo) =>
        promo.id === id ? { ...promo, status: checked } : promo
      )
    );
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log('Edit promotion:', id);
  };

  const handleUpdateLink = (promotion) => {
    setUpdateLinkModal({
      isOpen: true,
      promotionId: promotion.id,
      existingLink: promotion.link,
    });
  };

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

  // Sorting function
  const handleSort = (column) => {
    setSortState((prev) => {
      const isAsc = prev.column === column && prev.direction === 'asc';
      return { column, direction: isAsc ? 'desc' : 'asc' };
    });
  };

  // Get sorting icon
  const getSortIcon = (column) => {
    if (sortState.column !== column) return <ArrowUpDown className="h-4 w-4" />;
    return sortState.direction === 'asc' ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const sortedAds = [...promotions].sort((a, b) => {
    if (!sortState.column) return 0;
    const { column, direction } = sortState;

    let valueA = a[column];
    let valueB = b[column];

    // Convert numeric values
    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = Number(valueA);
      valueB = Number(valueB);
    }

    // Sorting logic
    if (direction === 'asc') {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

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

      <div className="rounded-lg border">
        <Table>
          <TableHeader className="bg-softPaleBlue">
            <TableRow>
              <TableHead className="w-[250px]">
                <button
                  onClick={() => handleSort('sectionName')}
                  className="flex items-center gap-2"
                >
                  Section Name
                  {getSortIcon('sectionName')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  onClick={() => handleSort('type')}
                  className="flex items-center gap-2"
                >
                  Type {getSortIcon('type')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  onClick={() => handleSort('link')}
                  className="flex items-center gap-2"
                >
                  Link {getSortIcon('link')}
                </button>
              </TableHead>
              <TableHead>
                <button
                  onClick={() => handleSort('status')}
                  className="flex items-center gap-2"
                >
                  Status {getSortIcon('status')}
                </button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAds.map((promotion) => (
              <TableRow key={promotion.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getSocialIcon(promotion.sectionName)}
                    <span>{promotion.sectionName}</span>
                  </div>
                </TableCell>
                <TableCell>{promotion.type}</TableCell>
                <TableCell>
                  <a
                    href={promotion.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coolSky hover:underline"
                  >
                    {promotion.link}
                  </a>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={promotion.status}
                    onCheckedChange={(checked) =>
                      handleStatusChange(promotion.id, checked)
                    }
                    className="data-[state=checked]:bg-primary-gradient"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                      <MoreVertical className="h-5 w-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleEdit(promotion.id)}
                        className="text-coolSky focus:bg-blue-50 focus:text-coolSky"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleUpdateLink(promotion)}
                        className="text-coolSky focus:bg-blue-50 focus:text-coolSky"
                      >
                        <LinkIcon className="mr-2 h-4 w-4" />
                        <span>Update Link</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddSourceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddSource}
      />
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
    </div>
  );
};

export default AdsPromotions;
