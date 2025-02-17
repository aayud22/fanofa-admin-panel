import React from 'react';
import { Card } from '../ui/card';
import { Link2, MoreHorizontal } from 'lucide-react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
import { Button } from '../ui/button';

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
    <Card className="h-[465px] !p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-darkBlueText">
          Most Visited Pages
        </h3>
        <button className="rounded p-1 hover:bg-gray-100">
          <MoreHorizontal className="h-5 w-5 text-skyBlue" />
        </button>
      </div>
      <div className="h-[calc(100%-4rem)] overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-gray-100">
            <TableRow>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Page name
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Visited
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Ad View
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Bounce rate
              </TableHead>
              <TableHead className="whitespace-nowrap text-sm font-medium text-darkBlueText">
                Graph
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analytics.map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center gap-2 text-sm font-medium text-darkBlueText">
                    {row.page}
                    <Link2 className="h-3.5 w-3.5 text-skyBlue" />
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {row.visited}
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {row.adView}
                </TableCell>
                <TableCell className="text-sm font-medium text-darkBlueText">
                  {row.bounceRate}
                </TableCell>
                <TableCell>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full bg-primary-gradient"
                      style={{
                        width: row.bounceRate,
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default UserAnalyticsTable;
