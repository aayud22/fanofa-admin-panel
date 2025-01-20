import React from 'react';
import { cn } from '../../utils/classNames';
import { Card, CardContent } from '../ui/card';

const stats = [
  {
    title: 'Total User',
    value: '40,689',
    subValue: 'Till, Today',
    trend: { value: 10.0, isPositive: true },
  },
  {
    title: 'New Users',
    value: '6172',
    subValue: 'Last Week Ratio 3457',
    trend: { value: 3.0, isPositive: false },
  },
  {
    title: 'No. of banners',
    value: '1565k',
    subValue: 'Uploaded By 32k Users',
    trend: { value: 3.0, isPositive: true },
  },
  {
    title: 'No of Ads',
    value: '3,422',
    subValue: 'This Week',
    trend: { value: 3.0, isPositive: true },
  },
  {
    title: 'Blocked Account',
    value: '22',
    subValue: 'Restricted Accounts',
    trend: { value: 3.0, isPositive: true },
  },
];

const AvailableWithdraw = () => {
  return (
    <div className="shadow-soft-xl rounded-xl bg-white px-6 py-7">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats?.map((stat, index) => (
          <Card
            key={index}
            className="relative border-none bg-white shadow-none"
          >
            <CardContent className="p-2">
              <div className="flex items-center justify-between">
                <p className="text-base font-normal text-mutedBlue">
                  {stat?.title}
                </p>
                <span
                  className={cn(
                    'rounded-md px-[5px] py-1 text-[12.64px] font-normal',
                    stat?.trend.isPositive
                      ? 'text-forestGreen bg-limeGreen'
                      : 'text-crimsonRed bg-softPink'
                  )}
                >
                  {stat?.trend.isPositive ? '▲' : '▼'}{' '}
                  {Math.abs(stat?.trend.value)}%
                </span>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-darkBlueText">
                  {stat?.value}
                </h3>
                <p className="mt-1 text-sm font-normal text-mutedBlue">
                  {stat?.subValue}
                </p>
              </div>
            </CardContent>
            {index < stats.length - 1 && (
              <div className="absolute bottom-2 right-[-2px] top-2 hidden border-r border-dashed border-gray-200 md:block" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableWithdraw;
