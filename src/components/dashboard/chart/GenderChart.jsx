import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const GenderChart = ({ malePercentage, femalePercentage }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
          <CardTitle className="text-lg font-bold text-deepBlue">
            Gender
          </CardTitle>
          <HelpCircle className="h-6 w-6 fill-mutedBlue text-white" />
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative pt-4">
            <div className="relative flex h-[120px] items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 200 100">
                {/* Background arc */}
                <path
                  d="M20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#A3AED0"
                  strokeWidth="30"
                  strokeLinecap="round"
                />
                {/* Male percentage (blue) */}
                <path
                  d="M20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="30"
                  strokeLinecap="round"
                  strokeDasharray={`${malePercentage * 2.51}, 251`}
                />
                {/* Slider circle */}
                <circle
                  cx={100 + Math.cos(Math.PI * (1 - malePercentage / 100)) * 80}
                  cy={100 - Math.sin(Math.PI * (1 - malePercentage / 100)) * 80}
                  r="8"
                  fill="white"
                  stroke="#e2e8f0"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary-gradient" />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-mutedBlue">
                    {malePercentage}%
                  </span>
                  <span className="text-sm text-gray-600">Male</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gray-300" />
                <div className="flex flex-col items-start">
                  <span className="text-sm text-mutedBlue">Female</span>
                  <span className="text-sm font-semibold">
                    {femalePercentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenderChart;
