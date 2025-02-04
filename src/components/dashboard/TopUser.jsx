import React from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '../ui/table';
import { Crown } from 'lucide-react';

const users = [
  {
    id: '1',
    name: 'Evans Mayo',
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2019',
    startDate: '24Jan2019',
    productCat: 'Buy & Sell',
    country: {
      code: 'ZA',
      flag: 'ZA',
    },
    noOfAds: 242,
    plan: {
      name: 'Personal Plus',
      type: 'Personal Plus',
    },
  },
  {
    id: '2',
    name: 'Smith Lovell',
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2020',
    startDate: '24Jan2020',
    productCat: 'Jobs',
    country: {
      code: 'GB',
      flag: 'GB',
    },
    noOfAds: 242,
    plan: {
      name: 'Business',
      type: 'Business',
    },
  },
  {
    id: '3',
    name: 'Jones Brooks',
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2021',
    startDate: '24Jan2021',
    productCat: 'Buy & Sell',
    country: {
      code: 'US',
      flag: 'US',
    },
    noOfAds: 242,
    plan: {
      name: 'Business Plus',
      type: 'Business Plus',
    },
  },
  {
    id: '4',
    name: 'Wilson Pipes',
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    year: '2022',
    startDate: '24Jan2022',
    productCat: 'Buy & Sell',
    country: {
      code: 'AT',
      flag: 'AT',
    },
    noOfAds: 242,
    plan: {
      name: 'Individual',
      type: 'Individual',
    },
  },
];

const TopUser = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-darkBlueText">Top User</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Customer
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Start Date
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Product Cat
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Country
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                No. of Ads
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Plan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full border-2 border-transparentOlive bg-transparentOlive">
                      <img
                        width={40}
                        height={40}
                        alt={user.name}
                        className="rounded-full"
                        src={user.avatar || '/placeholder.svg'}
                      />
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-darkBlueText">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-mutedBlue">
                        {user.year}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.startDate}
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.productCat}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span
                      className={`flag-icon flag-icon-${user.country.code.toLowerCase()}`}
                      style={{ fontSize: '1.3rem' }}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-xs font-semibold text-darkBlueText">
                  {user.noOfAds}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-yellow-400" />
                    <span className="text-xs font-semibold text-darkBlueText">
                      {user.plan.name}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TopUser;
