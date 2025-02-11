import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Plus } from 'lucide-react';
import { APP_ROUTES } from '../../constants/routeConstants';

const DealsPage = () => {
  const navigate = useNavigate();

  const handleCreateDeal = () => {
    navigate(APP_ROUTES.DEALS.CREATE);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-darkBlueText">Deals</h1>
        <Button
          onClick={handleCreateDeal}
          className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Create New Deal
        </Button>
      </div>

      {/* Deals list will be added here */}
      <div className="rounded-lg border border-gray-200 p-6">
        <p className="text-center text-gray-500">No deals found</p>
      </div>
    </div>
  );
};

export default DealsPage;
