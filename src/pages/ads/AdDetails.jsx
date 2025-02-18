import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import { Card, CardContent } from '../../components/ui/card';
import ActionModal from '../../components/common/ActionModal';
import { Download, AlertCircle, Trash2, Heart } from 'lucide-react';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="min-w-32 text-sm text-muted-foreground">{label}</span>
      <span className="text-base font-semibold text-darkBlueText">{value}</span>
    </div>
  );
};

const AdDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ad = location.state?.ad;

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

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Ad', link: APP_ROUTES.ADS.BASE },
      { label: 'Ad List' , link: APP_ROUTES.ADS.BASE},
      { label: 'View Ad'},
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
    // const { actionType, adId, selectedReason } = modalConfig;
    
    // if (actionType === 'Delete') {
    //   console.log(`Deleting ad ${adId}`);
    //   // Implement delete logic here
    //   navigate('/ads'); // Navigate back to ads list after deletion
    // } else if (actionType === 'Deactivate') {
    //   console.log(`Deactivating ad ${adId} with reason: ${selectedReason}`);
    //   // Implement deactivate logic here
    //   navigate('/ads'); // Navigate back to ads list after deactivation
    // }
    
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

  if (!ad) {
    return <div>No ad details found</div>;
  }

  return (
    <div className="flex-1 space-y-4">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-light text-darkBlueText md:text-2xl">
            Ad ID <span className="font-bold">{ad.id}</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white"
            onClick={() => {}}
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => openDeactivateModal(ad.id)}
          >
            <AlertCircle className="h-4 w-4" />
            <span>Deactivate Ad</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => openDeleteModal(ad.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete Ad</span>
          </Button>
        </div>
      </div>

      {/* Main Image */}
      <div className="h-[273px]">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="BMW 7 Series"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
        <DetailRow
          label="Price"
          value={
            <span className="text-xl font-bold sm:text-2xl">${'678487'}</span>
          }
        />
        <DetailRow label="Location" value="ul. Zarzecze 58, Kraków 30-134" />
        <DetailRow
          label="Rating"
          value={
            <div className="flex items-center gap-2">
              <span>4</span>
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-muted-foreground">(12)</span>
            </div>
          }
        />
        <DetailRow
          label="Product Comments"
          value={<span className="font-semibold">12</span>}
        />
      </div>

      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-darkBlueText">
          Description
        </h2>
        <p className="text-base font-normal text-darkBlueText">
          {ad.description ||
            "BMW 7 Series is the brand's flagship sedan. It is a comfortable chauffeur-driven car which is great to drive as well. Its USPs include bold looks, business-class-like rear seating, and mind-blowing technology headlined by a cinema-style widescreen dropping down from the roof. But the new design is bound to divide opinions, and its length is also not ideal for crowded cities."}
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-4">
              <DetailRow
                label="Account Link"
                value={
                  <a
                    href={ad.accountLink || 'http://192.168.20.250:5000/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-blue-600 hover:underline"
                  >
                    {ad.accountLink || 'http://192.168.20.250:5000/'}
                  </a>
                }
              />

              <DetailRow
                label="Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.category || 'Car & vehicle'}
                  </span>
                }
              />

              <DetailRow
                label="Sub-Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.subCategory || 'Sub-compact SUV'}
                  </span>
                }
              />

              <DetailRow
                label="Sub-Sub-Category"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.subSubCategory || '---'}
                  </span>
                }
              />

              <DetailRow
                label="No. of Views"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.viewedAd || '34245'}
                  </span>
                }
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <DetailRow
                label="Country"
                value={
                  <div className="flex items-center gap-2">
                    <span
                      className={`flag-icon flag-icon-${ad.country?.toLowerCase() || 'us'}`}
                    />
                    <span className="text-base font-semibold text-darkBlueText">
                      {ad.country || 'USA COUNTRY FLAG HERE'}
                    </span>
                  </div>
                }
              />

              <DetailRow
                label="Visitor Time Spent"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    {ad.timeSpent || '52 hours 34min'}
                  </span>
                }
              />

              <DetailRow
                label="Total Earning"
                value={
                  <span className="text-base font-semibold text-darkBlueText">
                    ${ad.totalEarning || '87'}
                  </span>
                }
              />

              <DetailRow
                label="Ad Status"
                value={
                  <Badge
                    variant="success"
                    className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    {ad.adStatus || 'ACTIVE'}
                  </Badge>
                }
              />

              <DetailRow
                label="Admin Status"
                value={
                  <Badge
                    variant="success"
                    className="inline-flex w-fit rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    {ad.adminStatus || 'Approved'}
                  </Badge>
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* More Ads Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">More Ads of this Account</h2>
          <Button variant="link">View All</Button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card className="group relative overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <div className="aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1615494488092-b13b68fe0eb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-3">
                <h3 className="text-base font-semibold text-darkBlueText">
                  Macbook 14
                </h3>
                <p className="text-lg font-bold text-darkBlueText">
                  Rs 450,000
                </p>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge
                    variant="secondary"
                    className="!rounded-md bg-softPaleBlue !p-1 text-darkBlueText"
                  >
                    New
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="!rounded-md bg-softPaleBlue !p-1 text-darkBlueText"
                  >
                    10/10
                  </Badge>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <p className="max-w-[200px] truncate text-sm text-muted-foreground">
                    Gulberg Phase 4, Lahore
                  </p>
                  <div className="text-sm font-semibold text-indigo-900">
                    Sep 22
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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

export default AdDetails;
