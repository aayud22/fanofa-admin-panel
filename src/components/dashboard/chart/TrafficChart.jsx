import React from 'react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const data = [
  { day: 'Sun', value: 50000, value2: 45000 },
  { day: 'Mon', value: 40000, value2: 55000 },
  { day: 'Tue', value: 60000, value2: 35000 },
  { day: 'Wed', value: 85000, value2: 45000 },
  { day: 'Thu', value: 70000, value2: 60000 },
  { day: 'Fri', value: 55000, value2: 50000 },
  { day: 'Sat', value: 45000, value2: 40000 },
];

const TrafficChart = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft-xl">
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-xs font-medium text-mutedBlue">
              Daily Traffic
            </CardTitle>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-semibold text-deepBlue">
                2.579
              </span>
              <span className="text-sm font-normal text-mutedBlue">
                Visitors
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="shadow-soft-lg flex flex-col items-start space-x-1 rounded-lg border bg-white p-1">
              <div className="flex items-center gap-1 pl-1">
                <div className="bg-aquaBlue h-[5px] w-[5px] rounded-full" />
                <span className="text-slateGray text-[8px] font-bold">
                  Seller
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-deepBlue">
                  8950
                </span>
                <span className="text-vibrantGreen text-[8px] font-bold">
                  +22%
                </span>
              </div>
            </div>
            <div className="shadow-soft-lg flex flex-col items-start space-x-1 rounded-lg border bg-white p-1">
              <div className="flex items-center gap-1 pl-1">
                <div className="bg-aquaBlue h-[5px] w-[5px] rounded-full" />
                <span className="text-slateGray text-[8px] font-bold">
                Buyer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-deepBlue">
                1520
                </span>
                <span className="text-vibrantOrange text-[8px] font-bold">
                - 24%
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="mt-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                {/* X-Axis */}
                <XAxis
                  dataKey="day"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                {/* Y-Axis with labels */}
                <YAxis
                  domain={[0, 100000]}
                  tick={{ fontSize: 12, fill: '#888888' }}
                  tickFormatter={(value) => `${value / 1000}k`} // Converts 50000 to 50k
                />

                {/* Horizontal Reference Lines */}
                <ReferenceLine
                  y={100000}
                  stroke="#E0E0E0"
                  strokeDasharray="5 5"
                />
                <ReferenceLine
                  y={50000}
                  stroke="#E0E0E0"
                  strokeDasharray="5 5"
                />
                <ReferenceLine y={0} stroke="#E0E0E0" strokeDasharray="5 5" />

                {/* Tooltip with Vertical Hover Line */}
                <Tooltip
                  cursor={{
                    stroke: '#3b82f6',
                    strokeWidth: 2,
                    strokeDasharray: '4 4',
                  }}
                />

                {/* Line 1 (Seller) */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#lineGradient1)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 8,
                    fill: '#3b82f6',
                    stroke: '#fff',
                    strokeWidth: 2,
                  }}
                />

                {/* Line 2 (Buyer) */}
                <Line
                  type="monotone"
                  dataKey="value2"
                  stroke="url(#lineGradient2)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 8,
                    fill: '#4C909C',
                    stroke: '#fff',
                    strokeWidth: 2,
                  }}
                />

                {/* Define Gradient Strokes */}
                <defs>
                  <linearGradient
                    id="lineGradient1"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#6DE9F4" />
                    <stop offset="50%" stopColor="#3EB1E0" />
                    <stop offset="100%" stopColor="#0E77CC" />
                  </linearGradient>

                  <linearGradient
                    id="lineGradient2"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="100%" stopColor="#4C909C" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficChart;
