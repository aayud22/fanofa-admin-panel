import React from 'react';
import { cn } from '../../utils/classNames';
import { Card, CardContent } from '../ui/card';
import PropTypes from 'prop-types';

const StatsCardGroup = ({ stats, className }) => {
  return (
    <div className={cn('bg-white', className)}>
      <div
        className={cn(
          'grid gap-4',
          'grid-cols-1',
          'sm:grid-cols-2',
          'lg:grid-cols-3',
          'xl:grid-cols-5',
          className
        )}
      >
        {stats?.map((stat, index) => (
          <Card
            key={index}
            className="relative border-none bg-white shadow-md transition-shadow hover:shadow-lg"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-mutedBlue md:text-base">
                  {stat?.title}
                </p>
                {stat?.trend && (
                  <span
                    className={cn(
                      'rounded-md px-2 py-1 text-xs font-medium md:text-sm',
                      stat?.trend.isPositive
                        ? 'bg-limeGreen text-forestGreen'
                        : 'bg-softPink text-crimsonRed'
                    )}
                  >
                    {stat?.trend.isPositive ? '▲' : '▼'}{' '}
                    {Math.abs(stat?.trend.value)}%
                  </span>
                )}
              </div>
              <div className="mt-3">
                {stat?.value && (
                  <h3 className="text-xl font-bold text-darkBlueText md:text-2xl">
                    {stat?.value}
                  </h3>
                )}
                {stat?.subValue && (
                  <p className="mt-1 text-xs font-normal text-mutedBlue md:text-sm">
                    {stat?.subValue}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

StatsCardGroup.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string,
      subValue: PropTypes.string,
      trend: PropTypes.shape({
        value: PropTypes.number,
        isPositive: PropTypes.bool,
      }),
    })
  ).isRequired,
  className: PropTypes.string,
};

export default StatsCardGroup;
