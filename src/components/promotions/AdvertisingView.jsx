import { useState } from 'react';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '../ui/select';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import UpdatePlanModal from './UpdatePlanModal';
import { APP_ROUTES } from '../../constants/routeConstants';

export default function AdvertisingView() {
  const navigate = useNavigate()
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: 'Main Page Banners', price: '$3.5 M', users: '40,689' },
          { title: 'Banner in Category 1', price: '$3.5 M', users: '1565k' },
          { title: 'Banner in Listing Page', price: '$3.5 M', users: '3,422' },
        ]?.map((metric, i) => (
          <div
            key={i}
            className="flex flex-col border-r border-dashed last:border-r-0"
          >
            <div className="flex items-center gap-2 px-4">
              <span className="mutedBlue text-sm font-semibold">
                {metric.title}
              </span>
              <span className="rounded bg-blue-50 px-2 py-0.5 text-sm font-bold text-blue-500">
                {metric.price}
              </span>
            </div>
            <div className="px-4 py-2 text-2xl font-bold text-darkBlueText">
              {metric.users}
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1month">1 Month</SelectItem>
            <SelectItem value="3months">3 Months</SelectItem>
            <SelectItem value="6months">6 Months</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Top</SelectItem>
            <SelectItem value="bottom">Bottom</SelectItem>
            <SelectItem value="sidebar">Sidebar</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="property">Property</SelectItem>
            <SelectItem value="jobs">Jobs</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="SubCategory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cars">Cars</SelectItem>
            <SelectItem value="parts">Parts</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Add Section</Button>
          <Button onClick={() => navigate(APP_ROUTES?.PROMOTIONS?.BILLING_HISTORY)} className='bg-primary-gradient'>View Billing History</Button>
        </div>
      </div>

      {/* Promotion Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { 
            title: 'Main Page Banners', 
            price: '$100',
            features: ['Valid till 1 Year', 'Position : Bottom']
          },
          { 
            title: 'Banner in Category 1', 
            price: '$999',
            features: ['Valid till 1 Year', 'Position : Bottom', 'Category : Car']
          },
          { 
            title: 'Banner in Listing Page', 
            price: '$100',
            features: ['Valid till 1 Year', 'Direction : Bottom', 'Category : Car', 'Subcategory : Car']
          },
        ].map((card, index) => (
          <div key={index} className="rounded-t-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-midnightBlue">{card.title}</span>
              <div className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-steelBlue cursor-pointer" />
                <Switch />
              </div>
            </div>
            <div className="mt-6 text-[40px] font-bold text-midnightBlue">{card.price}</div>
            <div className="mt-6 space-y-3">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cloudWhite">
                    <svg className="h-3 w-3 text-steelBlue" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-steelBlue">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center">
              <button 
                className="w-full rounded-[10px] bg-primary-gradient py-3 text-center text-white font-medium hover:opacity-90 transition-opacity"
                onClick={() => setIsUpdateModalOpen(true)}
              >
                Update Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Plan Modal */}
      <UpdatePlanModal 
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />
    </div>
  );
}
