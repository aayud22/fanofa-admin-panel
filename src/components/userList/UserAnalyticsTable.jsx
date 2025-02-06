import React from 'react';
import { Card } from '../ui/card';
import { Link2, MoreHorizontal } from 'lucide-react';

const analytics = [
  {
    page: '/home',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '82.54%',
  },
  {
    page: '/about.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '76.29%',
  },
  {
    page: '/index.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '72.68%',
  },
  {
    page: '/invoice.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '44.78%',
  },
  {
    page: '/docs/',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '41.15%',
  },
  {
    page: '/service.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '32.65%',
  },
  {
    page: '/analytical.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '32.65%',
  },
  {
    page: '/analytical.html',
    visited: '5,896',
    adView: '5,896',
    bounceRate: '32.65%',
  },
];

const UserAnalyticsTable = () => {
  return (
    <Card>
      <div className="h-[600px] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-darkBlueText">
            Most Visited Pages
          </h3>
          <button className="rounded p-1 hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5 text-skyBlue" />
          </button>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-normal text-mutedBlue">
                  Page name
                </th>
                <th className="px-4 py-2 text-left text-sm font-normal text-mutedBlue">
                  Visited
                </th>
                <th className="px-4 py-2 text-left text-sm font-normal text-mutedBlue">
                  Ad View
                </th>
                <th className="px-4 py-2 text-left text-sm font-normal text-mutedBlue">
                  Bounce rate
                </th>
                <th className="px-4 py-2 text-left text-sm font-normal text-mutedBlue">
                  Graph
                </th>
              </tr>
            </thead>
            <tbody>
              {analytics.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2 text-sm text-darkBlueText">
                      {row.page}
                      <Link2 className="h-3.5 w-3.5 text-skyBlue" />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-darkBlueText">
                    {row.visited}
                  </td>
                  <td className="px-4 py-2 text-sm text-darkBlueText">
                    {row.adView}
                  </td>
                  <td className="px-4 py-2 text-sm text-darkBlueText">
                    {row.bounceRate}
                  </td>
                  <td className="px-4 py-2">
                    <svg className="h-8 w-24" viewBox="0 0 100 30">
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        stroke="#3498db"
                        points="0,15 20,10 40,20 60,5 80,25 100,15"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default UserAnalyticsTable;
