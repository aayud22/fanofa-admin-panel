import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { HelpCircle } from 'lucide-react';

const GenderChart = ({ malePercentage, femalePercentage }) => {
  return (
    <div className="shadow-soft-xl rounded-xl bg-white p-6">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">Gender</CardTitle>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="relative pt-4">
            <div className="relative flex h-[120px] items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 200 100">
                {/* Background arc */}
                <path
                  d="M20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#e2e8f0"
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
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-600">Male</span>
                <span className="text-sm font-semibold">{malePercentage}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <span className="text-sm text-gray-600">Female</span>
                <span className="text-sm font-semibold">
                  {femalePercentage}%
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenderChart;
