import React from 'react';
import { cn } from '../../utils/classNames';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const sources = [
  {
    title: 'Direct Source',
    subtitle: 'Direct link click',
    percentage: 75,
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Social Network',
    subtitle: 'Social Channels',
    percentage: 85,
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Referrals',
    subtitle: 'Impact Radius Visit',
    percentage: 85,
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'ADVT',
    subtitle: 'Google Advertisement',
    percentage: 15,
    avatar:
      'https://plus.unsplash.com/premium_photo-1731681926154-9fb4a306fe5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const VisitorSources = () => {
  return (
    <div className="my-3 w-full rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-lg font-semibold text-darkBlueText">
            Source of Visitor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6">
            {sources.map((source) => (
              <div
                key={source.title}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    alt={source.title}
                    src={source.avatar}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-darkBlueText">
                      {source.title}
                    </h3>
                    <p className="text-sm font-medium text-mutedBlue">
                      {source.subtitle}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    'text-sm font-medium',
                    source.percentage >= 50 ? 'text-green-500' : 'text-red-500'
                  )}
                >
                  {source.percentage}%
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorSources;
