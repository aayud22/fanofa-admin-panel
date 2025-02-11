import React from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../../components/ui/select';
import { FileDown, Plus } from 'lucide-react';
import { Card } from '../../components/ui/card';
import AdsList from '../../components/ads/AdsList';
import { Button } from '../../components/ui/button';
import StatsCardGroup from '../../components/common/StatsCardGroup';
import { APP_ROUTES } from '../../constants/routeConstants';
import { useNavigate } from 'react-router-dom';

const adsStats = [
  {
    title: 'Total Ads',
    value: '40,689',
    trend: { value: 100, isPositive: true },
  },
  {
    title: 'User Posted Ads',
    value: '23,533',
    trend: { value: 30, isPositive: false },
  },
  {
    title: 'Active Ads',
    value: '1565k',
    trend: { value: 320, isPositive: true },
  },
];

const AdsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Stats Cards */}
      <StatsCardGroup
        stats={adsStats}
        className="lg:grid-cols-3 xl:grid-cols-3"
      />

      {/* Ads List Section */}
      <Card className="p-4 md:p-6">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-lg font-semibold text-darkBlueText">Ad List</h2>
          <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-medium text-darkBlueText sm:w-auto md:text-sm"
            >
              <FileDown className="h-4 w-4" />
              Download
            </Button>
            <Select defaultValue="this-week">
              <SelectTrigger className="h-9 w-[130px] text-xs md:text-sm">
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
              </SelectContent>
            </Select>
            <Button
              size="sm"
              onClick={() => navigate(APP_ROUTES.DEALS.CREATE)}
              className="w-full bg-primary-gradient text-xs text-white sm:w-auto md:text-sm"
            >
              <Plus className="h-4 w-4" />
              Create New Deal
            </Button>
          </div>
        </div>
        <AdsList />
      </Card>
    </div>
  );
};

export default AdsPage;
