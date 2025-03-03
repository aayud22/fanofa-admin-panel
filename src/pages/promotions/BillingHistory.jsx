import React, { useState, useEffect } from 'react';
import EnhancedTable from '../../components/ui/enhanced-table';

const BillingHistory = () => {
  const [isLoadingBillingHistory, setIsLoadingBillingHistory] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
  const [totalEarning, setTotalEarning] = useState('$475836');

  const columns = [
    { field: 'billing', headerName: 'Billing' },
    { field: 'registerDate', headerName: 'Register Date' },
    { field: 'adPosted', headerName: 'Ad Posted' },
    { 
      field: 'country',
      headerName: 'Country',
      renderCell: (params) => (
        <div className="flex space-x-1">
          {params.value.map((flag, index) => (
            <img key={index} src={flag} alt="country flag" className="w-6 h-4" />
          ))}
        </div>
      )
    },
    { field: 'plan', headerName: 'Plan' },
    { 
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Download PDF
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
            Download all
          </button>
          <button className="text-gray-500">
            <span className="text-xl">⋮</span>
          </button>
        </div>
      )
    },
  ];

  const mockData = [
    {
      id: 1,
      billing: 'Billing #780-Dec 2022',
      registerDate: 'Oct 31, 2017',
      adPosted: '$12.00',
      country: ['/flags/us.png', '/flags/es.png', '/flags/ru.png', '/flags/in.png'],
      plan: 'Personal Plus',
    },
    // Add more mock data as needed
  ];

  const [billingData, setBillingData] = useState(mockData);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsLoadingBillingHistory(true);
    // Simulate API call
    setTimeout(() => {
      setBillingData(mockData); // In real app, fetch data based on tab
      setIsLoadingBillingHistory(false);
    }, 1000);
  };

  useEffect(() => {
    handleTabChange('monthly');
  }, []);

  return (
    <div className="container mx-auto px-6 py-3">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">This Week Earning</p>
            <h2 className="text-2xl font-semibold text-blue-500">{totalEarning}</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 border rounded">
              <span className="material-icons">filter_list</span>
            </button>
            <button className="p-2 border rounded">Download</button>
          </div>
        </div>
        
        <div className="flex space-x-4 border-b">
          <button
            className={`py-2 px-4 ${activeTab === 'weekly' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => handleTabChange('weekly')}
          >
            Weekly Plans
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'monthly' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => handleTabChange('monthly')}
          >
            Monthly Plan
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'semi-annual' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => handleTabChange('semi-annual')}
          >
            Semi-Annual Plan
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'annual' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
            onClick={() => handleTabChange('annual')}
          >
            Annual Plan
          </button>
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