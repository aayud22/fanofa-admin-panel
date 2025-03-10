import React, { useState, useEffect } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/ui/button';
import { APP_ROUTES } from '../../constants/routeConstants';
import EnhancedTable from '../../components/ui/enhanced-table';
import { Ellipsis, FileDown, Filter, Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { resetPageInfo, setPageInfo } from '../../redux/slices/pageSlice';

const mockData = [
  {
    id: 1,
    billing: 'Billing #780-Dec 2022',
    registerDate: 'Oct 31, 2017',
    adPosted: '$12.00',
    country: ['AQ', 'IN', 'US', 'GE'],
    plan: 'Personal Plus',
  },
  {
    id: 2,
    billing: 'Billing #781-Jan 2023',
    registerDate: 'Jan 15, 2018',
    adPosted: '$8.00',
    country: ['CA', 'FR', 'DE'],
    plan: 'Weekly Plan',
  },
  {
    id: 3,
    billing: 'Billing #782-Feb 2023',
    registerDate: 'Feb 20, 2019',
    adPosted: '$25.00',
    country: ['US', 'GB', 'AU'],
    plan: 'Monthly Plan',
  },
  {
    id: 4,
    billing: 'Billing #783-Mar 2023',
    registerDate: 'Mar 5, 2020',
    adPosted: '$45.00',
    country: ['BR', 'IN', 'ZA'],
    plan: 'Semi-Annual Plan',
  },
  {
    id: 5,
    billing: 'Billing #784-Apr 2023',
    registerDate: 'Apr 10, 2021',
    adPosted: '$80.00',
    country: ['JP', 'KR', 'CN'],
    plan: 'Annual Plan',
  },
  {
    id: 6,
    billing: 'Billing #785-May 2023',
    registerDate: 'May 25, 2022',
    adPosted: '$15.00',
    country: ['ES', 'IT', 'NL'],
    plan: 'Weekly Plan',
  },
  {
    id: 7,
    billing: 'Billing #786-Jun 2023',
    registerDate: 'Jun 18, 2022',
    adPosted: '$30.00',
    country: ['US', 'MX', 'CA'],
    plan: 'Monthly Plan',
  },
  {
    id: 8,
    billing: 'Billing #787-Jul 2023',
    registerDate: 'Jul 12, 2022',
    adPosted: '$50.00',
    country: ['RU', 'IN', 'CN'],
    plan: 'Semi-Annual Plan',
  },
  {
    id: 9,
    billing: 'Billing #788-Aug 2023',
    registerDate: 'Aug 3, 2022',
    adPosted: '$90.00',
    country: ['UK', 'DE', 'FR'],
    plan: 'Annual Plan',
  },
  {
    id: 10,
    billing: 'Billing #789-Sep 2023',
    registerDate: 'Sep 27, 2022',
    adPosted: '$10.00',
    country: ['SG', 'MY', 'PH'],
    plan: 'Weekly Plan',
  },
];

const BillingHistory = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('monthly');
  const [billingData, setBillingData] = useState(mockData);
  const [totalEarning, setTotalEarning] = useState('$475836');
  const [isLoadingBillingHistory, setIsLoadingBillingHistory] = useState(false);

  const columns = [
    {
      key: 'billing',
      label: 'Billing',
      sortable: true,
    },
    {
      key: 'registerDate',
      label: 'Register Date',
      sortable: true,
    },
    {
      key: 'adPosted',
      label: 'Ad Posted',
      sortable: true,
    },
    {
      key: 'adPosted',
      label: 'Ad Posted',
      sortable: true,
    },
    {
      key: 'country',
      label: 'Country',
      sortable: true,
      render: (value, row) => (
        <div className="flex flex-wrap items-center gap-1">
          {' '}
          {row.country.map((code, index) => (
            <div key={index} className="flex items-center">
              <span
                className={`flag-icon flag-icon-${code.toLowerCase()}`}
                style={{
                  fontSize: '1rem',
                  borderRadius: '100%',
                }}
              />
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'plan',
      label: 'Plan',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_, row) => (
        <div>
          <div className="flex items-center space-x-2">
            <button className="rounded bg-primary-gradient px-3 py-1 text-white">
              Download PDF
            </button>
            <button className="rounded bg-gray-200 px-3 py-1 text-gray-700">
              Download all
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Ellipsis className="h-4 w-4" />
              </DropdownMenuTrigger>
              {/* <DropdownMenuContent align="end">
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Edit User</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent> */}
            </DropdownMenu>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Home', link: APP_ROUTES.DASHBOARD.BASE },
      { label: 'Manage Promotions', link: APP_ROUTES.PROMOTIONS.PROMOTION },
      { label: 'Billing history' },
    ].filter(Boolean);

    dispatch(
      setPageInfo({
        title: 'Manage Promotions',
        breadcrumbs,
      })
    );

    return () => {
      dispatch(resetPageInfo());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    handleTabChange('monthly');
  }, []);

  const handleTabChange = (tab) => {
    console.log('Selected Tab:', tab);

    setActiveTab(tab);
    setIsLoadingBillingHistory(true);

    setTimeout(() => {
      const filteredData = mockData.filter((item) => {
        if (tab === 'weekly') return item.plan === 'Weekly Plan';
        if (tab === 'monthly') return item.plan === 'Monthly Plan';
        if (tab === 'semi-annual') return item.plan === 'Semi-Annual Plan';
        if (tab === 'annual') return item.plan === 'Annual Plan';
        return true;
      });

      setBillingData(filteredData);
      setIsLoadingBillingHistory(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-darkBlueText">
              Billing history
            </h2>
            <p className="text-deepIndigo text-sm font-medium">
              This Week Earning
            </p>
            <h2 className="bg-gradient-to-b from-lightAqua via-coolSky to-deepOcean bg-clip-text text-2xl font-bold text-transparent">
              {totalEarning}
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-darkBlueText"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-sm !font-medium text-darkBlueText"
            >
              <FileDown className="!h-4 !w-4 text-darkBlueText" />
              Download
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Tabs
            className="w-[400px]"
            defaultValue="monthly"
            onValueChange={handleTabChange}
          >
            <TabsList className="!py-7">
              <TabsTrigger
                value="weekly"
                className="rounded-md px-4 py-2 data-[state=active]:bg-primary-gradient data-[state=active]:text-white"
              >
                Weekly Plans
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="rounded-md px-4 py-2 data-[state=active]:bg-primary-gradient data-[state=active]:text-white"
              >
                Monthly Plan
              </TabsTrigger>
              <TabsTrigger
                value="semi-annual"
                className="rounded-md px-4 py-2 data-[state=active]:bg-primary-gradient data-[state=active]:text-white"
              >
                Semi-Annual Plan
              </TabsTrigger>
              <TabsTrigger
                value="annual"
                className="rounded-md px-4 py-2 data-[state=active]:bg-primary-gradient data-[state=active]:text-white"
              >
                Annual Plan
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative text-end">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm text-darkBlueText placeholder:text-gray-400 focus:border-primary focus:outline-none"
            />
            <Search className="absolute right-[180px] top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border">
        <EnhancedTable
          pagination
          columns={columns}
          data={billingData}
          isLoading={isLoadingBillingHistory}
        />
      </div>
    </div>
  );
};

export default BillingHistory;
