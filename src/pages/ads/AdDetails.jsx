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
import AdInfo from '../../components/advertises/AdInfo';

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
      { label: 'Ad List', link: APP_ROUTES.ADS.BASE },
      { label: 'View Ad' },
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

      <AdInfo
        ad={ad}
        useFor="ads"
        openDeleteModal={openDeleteModal}
        openDeactivateModal={openDeactivateModal}
      />

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
