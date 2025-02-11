import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Star } from 'lucide-react';
import PerformanceChart from './chart/PerformanceChart';

const MostVisitingAdsList = [
  {
    key: 1,
    title: 'BMW Auxi Car Online Vouchers',
    category: 'Cars & Vehicles',
    date: 'May 20, 2015',
    visitors: '672k',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 2,
    title: 'Mercedes Exclusive Gift Cards',
    category: 'Cars & Vehicles',
    date: 'June 15, 2016',
    visitors: '1.2M',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 3,
    title: 'Audi Premium Discount Offers',
    category: 'Cars & Vehicles',
    date: 'July 10, 2017',
    visitors: '834k',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 4,
    title: 'Tesla Exclusive Deals',
    category: 'Cars & Vehicles',
    date: 'August 25, 2018',
    visitors: '1.5M',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 5,
    title: 'Lamborghini Online Offers',
    category: 'Cars & Vehicles',
    date: 'September 30, 2019',
    visitors: '950k',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const MostVisitingAds = () => {
  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-darkBlueText">
            Most Visiting Ads
          </h2>
          <span className="text-xs font-medium text-mutedBlue">
            (This Week)
          </span>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm font-medium text-mutedBlue whitespace-nowrap">
                Ad
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue whitespace-nowrap">
                Published on
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue whitespace-nowrap">
                Performance
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MostVisitingAdsList?.map((interest) => (
              <TableRow key={interest.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      className="rounded-xl"
                      alt={interest.title}
                      src={interest.imageUrl}
                    />
                    <span className="text-sm font-semibold text-deepBlue">
                      {interest.title}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-deepBlue">
                  {interest.date}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <PerformanceChart />
                    <div className="ml-1">
                      <p className="text-xs font-medium text-deepBlue">672k</p>
                      <p className="text-[10px] font-medium text-mutedBlue">
                        Visitors
                      </p>
                    </div>
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

export default MostVisitingAds;
