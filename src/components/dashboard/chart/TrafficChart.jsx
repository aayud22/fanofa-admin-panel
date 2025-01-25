import React from 'react';
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from '../../ui/chart';
import { Line, XAxis, YAxis, LineChart, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

const chartData = [
  { month: 'Sun', desktop: 50000, mobile: 45000 },
  { month: 'Mon', desktop: 40000, mobile: 55000 },
  { month: 'Tue', desktop: 60000, mobile: 35000 },
  { month: 'Wed', desktop: 85000, mobile: 45000 },
  { month: 'Thu', desktop: 70000, mobile: 60000 },
  { month: 'Fri', desktop: 55000, mobile: 50000 },
  { month: 'Sat', desktop: 45000, mobile: 40000 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
};

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
            <div className="flex flex-col items-start space-x-1 rounded-lg border bg-white p-1 shadow-soft-lg">
              <div className="flex items-center gap-1 pl-1">
                <div className="h-[5px] w-[5px] rounded-full bg-aquaBlue" />
                <span className="text-[8px] font-bold text-slateGray">
                  Seller
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-deepBlue">
                  8950
                </span>
                <span className="text-[8px] font-bold text-vibrantGreen">
                  +22%
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start space-x-1 rounded-lg border bg-white p-1 shadow-soft-lg">
              <div className="flex items-center gap-1 pl-1">
                <div className="h-[5px] w-[5px] rounded-full bg-aquaBlue" />
                <span className="text-[8px] font-bold text-slateGray">
                  Buyer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-deepBlue">
                  1520
                </span>
                <span className="text-[8px] font-bold text-vibrantOrange">
                  - 24%
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}K`}
                ticks={[0, 50000, 100000]}
                tickMargin={8}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
          {/* <div className="mt-4 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis
                  dataKey="day"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  domain={[0, 100000]}
                  tick={{ fontSize: 12, fill: '#888888' }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />

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

                <Tooltip
                  cursor={{
                    stroke: '#3b82f6',
                    strokeWidth: 2,
                    strokeDasharray: '4 4',
                  }}
                />

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
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficChart;
