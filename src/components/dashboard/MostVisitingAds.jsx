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
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    key: 2,
    title: 'Mercedes Exclusive Gift Cards',
    category: 'Cars & Vehicles',
    date: 'June 15, 2016',
    visitors: '1.2M',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    key: 3,
    title: 'Audi Premium Discount Offers',
    category: 'Cars & Vehicles',
    date: 'July 10, 2017',
    visitors: '834k',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    key: 4,
    title: 'Tesla Exclusive Deals',
    category: 'Cars & Vehicles',
    date: 'August 25, 2018',
    visitors: '1.5M',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  },
  {
    key: 5,
    title: 'Lamborghini Online Offers',
    category: 'Cars & Vehicles',
    date: 'September 30, 2019',
    visitors: '950k',
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/85c1/a129/dcec093d607147a7cf8f6c84c76e3173?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McZgpcDcxO9V4Gy9gvU4m6~7FHwHD59TYzbmyawMjP7HeFZj54~78guyKFX-galxWnCs94zr79t43ijnz1O3dNs0t40KfI7NC3ShgNZx647Vf36~Emaw7Y1F4440le5W3p0ie5Bf5kWq-4plSzpL~sl70x~Oy9IgNpA9OMQ8-sE-42ZTqGoWIPgYVjjCqBpIvhll~mbxdNJdgQHxq5XCy6cMcIYf1YyAtzKpXD4Z5SLLueVL0A6OjTiZhoPpzyr9EKWJRGLB4CvaE7YmTCxxDFC~Cyhzvct2HDL4WS8hEhWFnDb-oiHziCLeaygVKEZQqVQTbcSZUQv0kedT2GcIYA__',
  }
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
              <TableHead className="text-sm font-medium text-mutedBlue">
                Ad
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
                Published on
              </TableHead>
              <TableHead className="text-sm font-medium text-mutedBlue">
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
